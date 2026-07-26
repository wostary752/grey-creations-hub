import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Layers, Sparkles, Award } from "lucide-react";
import heroImg from "@/assets/hero-new.jpg";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="ЛИДЕР МЕТАЛ — производство металлоизделий"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        <div className="container-tight relative py-28 md:py-40">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand)" }} />
              Производство · Конструкторское бюро · Полный цикл
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
              Металлоизделия<br />
              <span className="text-muted-foreground">от чертежа до партии</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Собственное конструкторское бюро и производственный цех.
              Лазерная резка, гибка, сварка, механическая обработка и проектирование изделий на заказ.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 text-base shadow-[var(--shadow-glow)]">
                <Link to="/request">
                  Оставить заявку <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base bg-card">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-3 max-w-4xl">
            <Advantage
              icon={<Award className="h-5 w-5" />}
              title="6+ лет"
              text="опыт работы в металлообработке"
              delay={0.1}
            />
            <Advantage
              icon={<Clock className="h-5 w-5" />}
              title="Расчёт стоимости"
              text="в течение рабочего дня"
              delay={0.2}
            />
            <Advantage
              icon={<Layers className="h-5 w-5" />}
              title="Полный цикл"
              text="от проектирования до готового изделия"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-tight py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl reveal">
            <div className="eyebrow">Возможности предприятия</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Что мы делаем</h2>
            <p className="mt-4 text-muted-foreground">
              Каждая услуга — самостоятельный участок производства. Мы объединяем их в один маршрут для вашего изделия.
            </p>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Все услуги <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elev)] hover:-translate-y-1 transition-all duration-500 reveal"
            >
              <div className="aspect-[4/3] overflow-hidden" style={{ background: "var(--gradient-surface)" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-[color:var(--brand)] transition-colors">
                  Подробнее
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border bg-card">
        <div className="container-tight py-24 grid gap-12 md:grid-cols-2 items-center">
          <div className="reveal">
            <div className="eyebrow">Полный цикл</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Один подрядчик на весь путь изделия</h2>
            <p className="mt-5 text-muted-foreground max-w-lg leading-relaxed">
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
            ].map((t, i) => (
              <li
                key={t}
                style={{ animationDelay: `${i * 70}ms` }}
                className="flex items-start gap-3 rounded-xl bg-background border border-border p-4 reveal"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md shrink-0" style={{ background: "var(--gradient-blue)" }}>
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-24 md:py-32">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          style={{ background: "var(--gradient-steel)", color: "oklch(0.98 0 0)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px circle at 20% 20%, oklch(0.55 0.14 250 / 0.35), transparent 60%), radial-gradient(500px circle at 80% 80%, oklch(0.6 0.12 240 / 0.25), transparent 60%)",
            }}
          />
          <div className="relative">
            <Sparkles className="h-6 w-6 mx-auto opacity-70" />
            <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">
              Расскажите о задаче — рассчитаем стоимость
            </h2>
            <p className="mt-5 opacity-75 max-w-xl mx-auto leading-relaxed">
              Прикрепите чертёж, фото или опишите словами. Свяжемся в течение рабочего дня.
            </p>
            <div className="mt-10 flex justify-center gap-3 flex-wrap">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
                <Link to="/request">Оставить заявку</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contacts">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon, k, v, delay = 0 }: { icon: React.ReactNode; k: string; v: string; delay?: number }) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className="flex items-center gap-4 rounded-xl border border-border bg-card/90 backdrop-blur px-5 py-4 shadow-[var(--shadow-soft)] reveal"
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
        style={{ background: "var(--gradient-steel)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold font-display tracking-tight">{k}</div>
        <div className="text-[11px] text-muted-foreground uppercase tracking-[0.15em]">{v}</div>
      </div>
    </div>
  );
}
