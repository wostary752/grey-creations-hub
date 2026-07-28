# Миграция на статический фронтенд (Vite + React SPA)

## Цель
Убрать TanStack Start (SSR/Cloudflare Workers) и получить чистую статическую сборку `dist/` — обычные `index.html` + JS/CSS ассеты. Такую сборку можно деплоить на Timeweb App Platform как **Static site** (frontend), без Docker и Node-сервера.

## Что меняется

### Стек
- **Было:** TanStack Start (SSR) + TanStack Router (file-based) + Vite + Cloudflare Workers.
- **Станет:** Vite + React 19 + **React Router v6** (SPA) + Tailwind v4.

### Файлы, которые удаляются
- `src/server.ts`, `src/start.ts`, `src/router.tsx`
- `src/routeTree.gen.ts` (генерируется TanStack)
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts`
- Вся папка `src/routes/` (её содержимое переносится в `src/pages/`)
- `src/routes/sitemap[.]xml.ts` → переносится в `public/sitemap.xml` статически

### Файлы, которые создаются
- `index.html` (корень проекта) — точка входа Vite
- `src/main.tsx` — монтирует React + `<BrowserRouter>`
- `src/App.tsx` — определяет `<Routes>` для: `/`, `/services`, `/services/:slug`, `/projects`, `/contacts`, `/request`, `404`
- `src/pages/*.tsx` — все страницы (Home, Services, ServiceDetail, Projects, Contacts, Request, NotFound), логика и вёрстка переносится 1:1 из `src/routes/`
- Замена `<Link to>` на `react-router-dom` API (в `SiteHeader`/`SiteFooter`/CTA-блоках)
- Замена `head()` метаданных на компонент `<SEO>` через хук, обновляющий `document.title` и meta-теги в `useEffect`
- Новый `vite.config.ts` — простой React SPA конфиг (`@vitejs/plugin-react` + Tailwind + alias `@`)

### SPA fallback для роутинга
При деплое на Timeweb Static нужно включить fallback на `index.html` для всех путей (стандартная опция «SPA mode» / rewrite `/*` → `/index.html`), иначе прямой заход на `/services` даст 404. Это настройка на стороне Timeweb, не в коде.

## Что сохраняется без изменений
- Дизайн, `src/styles.css`, все компоненты shadcn/ui, `SiteHeader`, `SiteFooter`, `RequestForm` (Formspree)
- Все ассеты в `src/assets/`
- Логика `services.ts` / `projects.ts`
- Яндекс.Метрика (переносится в `index.html`)
- `public/yandex_d56b7f284ceb0ab8.html`, `public/favicon.png`, `public/robots.txt`

## SEO компромисс
Статический SPA = метаданные обновляются JS уже после загрузки. Google это индексирует нормально, но соцсети (og:image превью) и Яндекс — хуже, чем при SSR. Если критично SEO — есть шаг 2: добавить `vite-plugin-ssg` для пререндера HTML для каждой страницы (можно сделать позже).

## Проверка после миграции
- `bun run build` → `dist/` собирается без ошибок
- Локально работают все маршруты, формы, галерея
- Файл `_redirects` или аналог для SPA fallback (создам `public/_redirects` с `/* /index.html 200` на случай, если Timeweb поддерживает Netlify-стиль)

## Технические детали
```
package.json:
  - remove: @tanstack/react-start, @tanstack/react-router, @lovable.dev/vite-tanstack-config, nitro, h3
  - add:    react-router-dom, @vitejs/plugin-react, @tailwindcss/vite
  - scripts: "dev": "vite", "build": "vite build", "preview": "vite preview"
```

После вашего подтверждения выполняю миграцию одним заходом.
