import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Услуги — МЕТАЛФОРМ" },
      { name: "description", content: "Лазерная резка, гибка, сварные работы, механическая обработка, проектирование изделий на заказ и с последующим изготовлением." },
      { property: "og:title", content: "Услуги производства — МЕТАЛФОРМ" },
      { property: "og:description", content: "Полный список услуг предприятия." },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/services/$slug");
  if (isChild) return <Outlet />;

  return (
    <section className="container-tight py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Услуги</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Возможности предприятия</h1>
        <p className="mt-4 text-muted-foreground">
          Каждая услуга — самостоятельный участок производства. Мы объединяем их в один маршрут для вашего изделия.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group grid grid-cols-[140px_1fr] gap-5 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elev)] transition-all"
          >
            <div className="aspect-square h-full overflow-hidden bg-muted">
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover grayscale-[0.15] group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="py-5 pr-5">
              <h2 className="font-display font-semibold text-lg leading-tight">{s.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                Открыть <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
