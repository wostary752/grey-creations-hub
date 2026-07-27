import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Портфолио — ЛИДЕР МЕТАЛЛ" },
      { name: "description", content: "Кураторская фотогалерея реальных производственных работ ЛИДЕР МЕТАЛЛ: сварные конструкции, кронштейны, узлы, лазерная резка." },
      { property: "og:title", content: "Портфолио — ЛИДЕР МЕТАЛЛ" },
      { property: "og:description", content: "Ремесло через фотографию: сварка, резка, сборка, точная обработка." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: projects[0].image },
      { name: "twitter:image", content: projects[0].image },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="bg-white text-neutral-900">
      <section className="container-tight pt-16 pb-10 md:pt-28 md:pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              N<span className="mx-1">°</span>01 / Портфолио
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] tracking-tight font-medium">
              Ремесло<br />
              <span className="text-neutral-400">в кадре</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-lg text-neutral-500 text-base md:text-lg leading-relaxed">
              Кураторская подборка производственных снимков наших работ.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              2023 — 2025
            </div>
          </div>
        </div>
      </section>

      <div className="container-tight">
        <div className="flex items-center gap-6 border-t border-neutral-200 pt-4">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">001</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">Галерея</span>
          <span className="ml-auto font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300">
            {String(projects.length).padStart(2, "0")} работ
          </span>
        </div>
      </div>

      <section className="container-tight py-10 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8 [column-fill:_balance]">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative mb-4 sm:mb-6 md:mb-8 block w-full overflow-hidden rounded-[16px] border border-neutral-200 bg-neutral-100 break-inside-avoid"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="block w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight py-16 md:py-32 border-t border-neutral-200">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              Ваш проект
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight font-medium">
              Есть чертёж<br />
              <span className="text-neutral-400">или задача?</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link
              to="/request"
              className="group inline-flex items-center gap-4 border-b border-neutral-900 pb-2 text-lg font-medium hover:gap-6 transition-all"
            >
              Оставить заявку
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
