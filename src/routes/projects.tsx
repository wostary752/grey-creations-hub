import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Выполненные проекты — МЕТАЛФОРМ" },
      { name: "description", content: "Портфолио: изделия и металлоконструкции, изготовленные предприятием МЕТАЛФОРМ." },
      { property: "og:title", content: "Выполненные проекты — МЕТАЛФОРМ" },
      { property: "og:description", content: "Кронштейны, лестницы, декоративные панели, корпуса и другие изделия." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="container-tight py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Портфолио</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Выполненные проекты</h1>
        <p className="mt-4 text-muted-foreground">Изделия разных отраслей — от единичных заказов до серий. Часть работ мы не показываем публично по договорённости с заказчиками.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.id} className={`group overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elev)] transition ${i % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
            <div className={`overflow-hidden bg-muted ${i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover grayscale-[0.15] group-hover:scale-[1.03] transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                <span>{p.category}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-2 font-display font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-10 text-center">
        <h2 className="text-2xl font-bold">Есть похожая задача?</h2>
        <p className="mt-2 text-muted-foreground">Пришлите чертёж или описание — оценим сроки и стоимость.</p>
        <div className="mt-6"><Button asChild size="lg"><Link to="/request">Оставить заявку</Link></Button></div>
      </div>
    </section>
  );
}
