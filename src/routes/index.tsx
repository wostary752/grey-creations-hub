import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, Ruler, Wrench } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Цех лазерной резки МЕТАЛФОРМ" width={1920} height={1200} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.985 0.002 250 / 0.6), oklch(0.985 0.002 250))" }} />
        </div>
        <div className="container-tight relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow">Производство · Проектирование · Металлообработка</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05]">
              Металлоизделия<br />полного цикла — <span className="text-muted-foreground">от чертежа до партии</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Собственное конструкторское бюро и производственный цех. Лазерная резка, гибка, сварка, механическая обработка и проектирование изделий на заказ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/request">Оставить заявку <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-3xl">
            <Stat icon={<Factory className="h-5 w-5" />} k="12+" v="лет на рынке" />
            <Stat icon={<Ruler className="h-5 w-5" />} k="0.1 мм" v="точность реза" />
            <Stat icon={<Wrench className="h-5 w-5" />} k="500+" v="выполненных проектов" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-tight py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow">Возможности предприятия</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Что мы делаем</h2>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Все услуги <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elev)] transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.image} alt={s.title} loading="lazy" width={1400} height={900} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[0.2]" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 group-hover:text-foreground">
                  Подробнее <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-tight py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="eyebrow">Полный цикл</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Один подрядчик на весь путь изделия</h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Инженер, технолог и производственный участок работают в одной команде. Не нужно согласовывать проект между разными компаниями — сроки предсказуемые, ответственность одна.
            </p>
          </div>
          <ul className="grid gap-3">
            {[
              "Собственное КБ — от эскиза до КД по ЕСКД",
              "Своё производство — без посредников",
              "Работаем по чертежу, эскизу или образцу",
              "Партии от 1 шт. до серийного производства",
              "Прозрачные сроки и фиксированная стоимость",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg bg-card border border-border p-4">
                <CheckCircle2 className="h-5 w-5 text-foreground/70 mt-0.5 shrink-0" />
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-20 md:py-28">
        <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: "var(--gradient-steel)", color: "oklch(0.98 0 0)" }}>
          <h2 className="text-3xl md:text-4xl font-bold">Расскажите о задаче — рассчитаем стоимость</h2>
          <p className="mt-4 opacity-80 max-w-xl mx-auto">Прикрепите чертёж, фото или опишите словами. Свяжемся в течение рабочего дня.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link to="/request">Оставить заявку</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contacts">Контакты</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card/60 backdrop-blur px-5 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground/80">{icon}</div>
      <div>
        <div className="text-2xl font-bold font-display">{k}</div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{v}</div>
      </div>
    </div>
  );
}
