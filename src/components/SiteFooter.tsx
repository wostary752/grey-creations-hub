import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-tight py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display font-bold text-lg">ЛИДЕР МЕТАЛ</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Производство металлоизделий полного цикла с собственным конструкторским бюро. От единичного заказа до серии.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Услуги</div>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-muted-foreground hover:text-foreground">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Контакты</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+7 (495) 000-00-00</li>
            <li>info@metalform.ru</li>
            <li>г. Москва, ул. Промышленная, 12</li>
            <li>Пн–Пт 9:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="hairline">
        <div className="container-tight py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} ЛИДЕР МЕТАЛ. Все права защищены.</span>
          <span>Производство. Проектирование. Металлообработка.</span>
        </div>
      </div>
    </footer>
  );
}
