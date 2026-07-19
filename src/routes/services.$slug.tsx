import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/services";
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
        ]
      : [{ title: "Услуга не найдена" }, { name: "robots", content: "noindex" }],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="text-3xl font-bold">Услуга не найдена</h1>
      <Link to="/services" className="mt-4 inline-block text-muted-foreground hover:text-foreground">← К списку услуг</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <div className="container-tight py-10">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Все услуги
          </Link>
        </div>
      </section>

      <section className="container-tight py-12 md:py-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="eyebrow">Услуга</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">{svc.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{svc.short}</p>
          <p className="mt-6 leading-relaxed">{svc.description}</p>

          <ul className="mt-8 grid gap-3">
            {svc.bullets.map((b: string) => (
              <li key={b} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-foreground/70 shrink-0" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-3 flex-wrap">
            <Button asChild size="lg"><Link to="/request">Оставить заявку</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contacts">Связаться</Link></Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-[var(--shadow-elev)]">
            <img src={svc.image} alt={svc.title} width={1400} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container-tight pb-24">
        <h2 className="text-2xl font-bold mb-6">Другие услуги</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-xl overflow-hidden border border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elev)] transition">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.short}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
