import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Выполненные проекты — МЕТАЛФОРМ" },
      { name: "description", content: "Портфолио металлоконструкций и изделий, изготовленных на производстве МЕТАЛФОРМ: сварные рамы, кронштейны, опорные узлы, лазерная резка." },
      { property: "og:title", content: "Выполненные проекты — МЕТАЛФОРМ" },
      { property: "og:description", content: "Реальные производственные работы: рамы, узлы, кронштейны, детали лазерной резки." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: projects[0].image },
      { name: "twitter:image", content: projects[0].image },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  // Editorial rhythm: split into visually intentional rows
  const feature = projects[0];
  const rowA = projects.slice(1, 3);   // portrait + landscape
  const rowB = projects.slice(3, 5);   // landscape wide + square
  const rowC = projects.slice(5, 8);   // trio
  const rowD = projects.slice(8, 10);  // square + feature landscape

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="container-tight pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              N<span className="mx-1">°</span>01 / Портфолио
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight font-medium">
              Выполненные<br />
              <span className="text-neutral-400">проекты</span>
            </h1>
            <p className="mt-8 max-w-xl text-neutral-500 text-base md:text-lg leading-relaxed">
              Реальные работы производства — от единичных узлов до серийных партий.
              Часть заказов не публикуется по договорённости с клиентами.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              2023 — 2025
            </div>
          </div>
        </div>
      </section>

      <TechDivider label="Избранное" index="001" />

      {/* ── Feature project ─────────────────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <FeatureCard project={feature} />
      </section>

      <TechDivider label="Металлоконструкции" index="002" />

      {/* ── Row A: portrait + landscape ─────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-5">
            <ProjectCard project={rowA[0]} aspectClass="aspect-[3/4]" />
          </div>
          <div className="col-span-12 md:col-span-7 md:pt-24">
            <ProjectCard project={rowA[1]} aspectClass="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ── Row B: wide + square ────────────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-8">
            <ProjectCard project={rowB[0]} aspectClass="aspect-[16/10]" />
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-16">
            <ProjectCard project={rowB[1]} aspectClass="aspect-square" />
          </div>
        </div>
      </section>

      <TechDivider label="Точная обработка" index="003" />

      {/* ── Row C: trio ─────────────────────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <ProjectCard project={rowC[0]} aspectClass="aspect-[4/5]" />
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-20">
            <ProjectCard project={rowC[1]} aspectClass="aspect-[4/5]" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProjectCard project={rowC[2]} aspectClass="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* ── Row D: square + wide feature ────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4 md:pt-24">
            <ProjectCard project={rowD[0]} aspectClass="aspect-square" />
          </div>
          <div className="col-span-12 md:col-span-8">
            <ProjectCard project={rowD[1]} aspectClass="aspect-[16/10]" />
          </div>
        </div>
      </section>

      <TechDivider label="Связаться" index="004" />

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="container-tight py-20 md:py-32">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              Ваш проект
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight font-medium">
              Есть чертёж<br />
              <span className="text-neutral-400">или задача?</span>
            </h2>
            <p className="mt-6 max-w-lg text-neutral-500 leading-relaxed">
              Пришлите файл или описание — оценим сроки и стоимость в течение рабочего дня.
            </p>
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

/* ─────────────────────────────────────────────────────────────── */

function TechDivider({ label, index }: { label: string; index: string }) {
  return (
    <div className="container-tight">
      <div className="flex items-center gap-6 border-t border-neutral-200 pt-4">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
          {index}
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
          {label}
        </span>
        <span className="ml-auto font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-300">
          ——
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  aspectClass,
}: {
  project: Project;
  aspectClass: string;
}) {
  return (
    <article className="group cursor-pointer">
      <div
        className={`relative overflow-hidden rounded-[16px] border border-neutral-200 bg-neutral-100 ${aspectClass}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-500" />
        <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="h-4 w-4 text-neutral-900" />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-neutral-500">
            {project.category}
          </div>
          <h3 className="mt-2 font-display text-xl md:text-2xl font-medium leading-snug tracking-tight text-neutral-900">
            {project.title}
          </h3>
          {project.summary && (
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-md">
              {project.summary}
            </p>
          )}
        </div>
        <div className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-neutral-400 pt-1">
          {project.year}
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ project }: { project: Project }) {
  return (
    <article className="group cursor-pointer">
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
        <div className="col-span-12 md:col-span-9">
          <div className="relative overflow-hidden rounded-[18px] border border-neutral-200 bg-neutral-100 aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/25 transition-colors duration-500" />
            <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/80 mix-blend-difference">
              Feature project
            </div>
            <div className="absolute right-5 bottom-5 h-12 w-12 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="h-5 w-5 text-neutral-900" />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-neutral-500">
            {project.category}
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-[1.1] tracking-tight">
            {project.title}
          </h2>
          <div className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-neutral-400">
            <span className="h-px w-8 bg-neutral-300" />
            {project.year}
          </div>
          {project.summary && (
            <p className="mt-6 text-sm text-neutral-500 leading-relaxed">
              {project.summary}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
