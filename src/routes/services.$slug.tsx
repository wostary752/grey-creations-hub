import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Ruler,
  Calculator,
  Handshake,
  Cog,
  Wrench,
  ShieldCheck,
  Package,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { getService, services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.svc.title} — МЕТАЛФОРМ` },
          { name: "description", content: loaderData.svc.description.slice(0, 160) },
          { property: "og:title", content: `${loaderData.svc.title} — МЕТАЛФОРМ` },
          { property: "og:description", content: loaderData.svc.short },
          { property: "og:image", content: loaderData.svc.image },
          { name: "twitter:image", content: loaderData.svc.image },
        ]
      : [{ title: "Услуга не найдена" }, { name: "robots", content: "noindex" }],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="text-3xl font-bold">Услуга не найдена</h1>
      <Link to="/services" className="mt-4 inline-block text-muted-foreground hover:text-foreground">
        ← К списку услуг
      </Link>
    </div>
  ),
});

const processSteps = [
  { icon: FileText, title: "Получение заявки", text: "Принимаем заявку, чертежи, эскизы или фото — в любом удобном формате." },
  { icon: Ruler, title: "Анализ чертежа", text: "Инженер проверяет технологичность и уточняет параметры изделия." },
  { icon: Calculator, title: "Расчёт стоимости", text: "Готовим коммерческое предложение с прозрачной калькуляцией и сроком." },
  { icon: Handshake, title: "Согласование заказа", text: "Утверждаем спецификацию, материал, покрытие и график поставки." },
  { icon: Cog, title: "Подготовка производства", text: "Технолог формирует маршрут, закупает материал, готовит оснастку." },
  { icon: Wrench, title: "Выполнение работ", text: "Изготовление на станках с ЧПУ с контролем каждой операции." },
  { icon: ShieldCheck, title: "Контроль качества", text: "Измерения по КД, визуальный и инструментальный контроль." },
  { icon: Package, title: "Упаковка и доставка", text: "Аккуратная упаковка, самовывоз или доставка по России." },
];

const advantages = [
  { title: "Современное оборудование", text: "Оптоволоконные лазеры, прессы и станки с ЧПУ последнего поколения." },
  { title: "Высокая точность", text: "Соблюдаем допуски по КД, контролируем каждую операцию." },
  { title: "Собственное КБ", text: "Инженеры-конструкторы работают рядом с цехом — быстрая коммуникация." },
  { title: "Контроль качества", text: "Многоступенчатый контроль на всех этапах изготовления." },
  { title: "Соблюдение сроков", text: "Планируем производство заранее, не срываем согласованные даты." },
  { title: "Сложные проекты", text: "Опыт с уникальными деталями, малыми и серийными партиями." },
];

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 3);
  const samples = projects.slice(0, 3);

  const faq = [
    { q: `Какие материалы вы обрабатываете?`, a: "Чёрная и нержавеющая сталь, алюминий, латунь, медь, бронза, некоторые пластики. Подскажем оптимальный материал под задачу." },
    { q: "В каком формате принимаете чертежи?", a: "DXF, DWG, STEP, PDF, а также эскизы от руки и фото. При необходимости оцифруем и подготовим КД сами." },
    { q: "Возможно ли изготовление одной штуки?", a: "Да. Работаем и с единичными изделиями, и с серией. Стоимость единицы будет выше — это нормально для штучного производства." },
    { q: "Какие сроки изготовления?", a: "Типовые заказы — от 3–5 рабочих дней. Сложные и серийные — обсуждаем индивидуально, всегда фиксируем срок в спецификации." },
    { q: "Есть ли доставка?", a: "Самовывоз с производства, доставка по городу и в регионы транспортными компаниями." },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container-tight py-4">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Все услуги
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="reveal">
            <div className="eyebrow">Услуга</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{svc.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{svc.short}</p>
            <p className="mt-6 leading-relaxed text-foreground/80">{svc.description}</p>

            <ul className="mt-8 grid gap-2.5">
              {svc.bullets.map((b: string) => (
                <li key={b} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--brand)" }} />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-3 flex-wrap">
              <Button asChild size="lg" className="h-12 px-6 text-base shadow-[var(--shadow-glow)]">
                <Link to="/request">Получить расчёт <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base bg-card">
                <Link to="/contacts">Связаться</Link>
              </Button>
            </div>
          </div>

          <div className="relative reveal-slow">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, oklch(0.55 0.14 250 / 0.18), transparent)" }}
            />
            <div className="aspect-square overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elev)]" style={{ background: "var(--gradient-surface)" }}>
              <img src={svc.image} alt={svc.title} width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-card">
        <div className="container-tight py-24">
          <div className="max-w-2xl reveal">
            <div className="eyebrow">Процесс</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Как проходит выполнение заказа</h2>
            <p className="mt-4 text-muted-foreground">Прозрачный маршрут от заявки до готового изделия — вы всегда знаете, на каком этапе ваш заказ.</p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-[27px] top-2 bottom-2 w-px hidden md:block"
              style={{ background: "linear-gradient(180deg, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent)" }}
            />
            <ol className="grid gap-4">
              {processSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.title}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="reveal group relative grid grid-cols-[56px_1fr] items-start gap-5 rounded-2xl border border-border bg-background p-5 md:p-6 hover:shadow-[var(--shadow-card)] hover:border-transparent transition-all"
                  >
                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-[var(--shadow-soft)]"
                      style={{ background: "var(--gradient-steel)" }}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-card px-1.5 text-[10px] font-bold text-foreground border border-border">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold tracking-tight">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container-tight py-24">
        <div className="max-w-2xl reveal">
          <div className="eyebrow">Преимущества</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Почему выбирают нас</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="reveal rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "var(--gradient-blue)" }}>
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg tracking-tight">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="border-y border-border bg-card">
        <div className="container-tight py-24">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl reveal">
              <div className="eyebrow">Портфолио</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Примеры выполненных работ</h2>
            </div>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Все проекты <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {samples.map((p, i) => (
              <div
                key={p.id}
                style={{ animationDelay: `${i * 70}ms` }}
                className="reveal group overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-out" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{p.category}</div>
                  <h3 className="mt-2 font-display font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-24">
        <div className="max-w-2xl reveal">
          <div className="eyebrow">Частые вопросы</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Отвечаем на главное</h2>
        </div>
        <div className="mt-10 max-w-3xl grid gap-3">
          {faq.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} delay={i * 60} />
          ))}
        </div>
      </section>

      {/* BIG CTA */}
      <section className="container-tight pb-24">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{ background: "var(--gradient-steel)", color: "oklch(0.98 0 0)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(700px circle at 15% 20%, oklch(0.55 0.14 250 / 0.4), transparent 60%), radial-gradient(500px circle at 85% 85%, oklch(0.6 0.12 240 / 0.25), transparent 60%)",
            }}
          />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                Есть чертёж? Рассчитаем стоимость вашего заказа.
              </h2>
              <p className="mt-5 opacity-75 max-w-xl leading-relaxed">
                Отправьте заявку — инженер свяжется с вами, уточнит детали и подготовит коммерческое предложение.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="h-13 px-7 text-base">
                  <Link to="/request">Получить расчёт <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-2.5">
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Телефон" value="+7 (495) 000-00-00" href="tel:+74950000000" />
              <ContactRow icon={<Send className="h-4 w-4" />} label="Telegram" value="@metalform" href="https://t.me/metalform" />
              <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="+7 (901) 000-00-00" href="https://wa.me/79010000000" />
              <ContactRow icon={<Mail className="h-4 w-4" />} label="E-mail" value="info@metalform.ru" href="mailto:info@metalform.ru" />
            </div>
          </div>
        </div>
      </section>

      {/* OTHERS */}
      <section className="container-tight pb-24">
        <h2 className="text-2xl font-bold mb-8">Другие услуги</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden" style={{ background: "var(--gradient-surface)" }}>
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="font-display font-semibold">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a, delay = 0 }: { q: string; a: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="reveal rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-muted/40"
      >
        <span className="font-medium">{q}</span>
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          <span className="text-lg leading-none">+</span>
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur px-4 py-3 hover:bg-white/10 transition-colors"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">{icon}</div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.15em] opacity-60">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </a>
  );
}
