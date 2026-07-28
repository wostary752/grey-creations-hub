import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { useSEO } from "@/lib/useSEO";

export default function Services() {
  useSEO({
    title: "Услуги — ЛИДЕР МЕТАЛЛ",
    description: "Лазерная резка, гибка, сварные работы, механическая обработка, проектирование изделий на заказ и производство полного цикла.",
    ogTitle: "Услуги производства — ЛИДЕР МЕТАЛЛ",
    ogDescription: "Полный список услуг предприятия.",
  });
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="max-w-2xl reveal">
        <div className="eyebrow">Услуги</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">Возможности предприятия</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Каждая услуга — самостоятельный участок производства. Мы объединяем их в один маршрут для вашего изделия.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            style={{ animationDelay: `${i * 70}ms` }}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elev)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden" style={{ background: "var(--gradient-surface)" }}>
              <img src={s.image} alt={s.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" />
            </div>
            <div className="p-6">
              <h2 className="font-display font-semibold text-lg tracking-tight">{s.title}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 group-hover:text-[color:var(--brand)] transition-colors">
                Открыть <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
