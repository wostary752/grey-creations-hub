import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { projects, type Project } from "@/lib/projects";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Портфолио — ЛИДЕР МЕТАЛ" },
      { name: "description", content: "Кураторская фотогалерея реальных производственных работ ЛИДЕР МЕТАЛ: сварные конструкции, кронштейны, узлы, лазерная резка." },
      { property: "og:title", content: "Портфолио — ЛИДЕР МЕТАЛ" },
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const close = useCallback(() => setActiveIdx(null), []);
  const next = useCallback(
    () => setActiveIdx((i) => (i === null ? i : (i + 1) % projects.length)),
    []
  );
  const prev = useCallback(
    () => setActiveIdx((i) => (i === null ? i : (i - 1 + projects.length) % projects.length)),
    []
  );

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIdx, close, next, prev]);

  return (
    <div className="bg-white text-neutral-900">
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="container-tight pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              N<span className="mx-1">°</span>01 / Портфолио
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight font-medium">
              Ремесло<br />
              <span className="text-neutral-400">в кадре</span>
            </h1>
            <p className="mt-8 max-w-lg text-neutral-500 text-base md:text-lg leading-relaxed">
              Кураторская подборка производственных снимков. Нажмите на любое изображение, чтобы увидеть подробности.
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

      {/* ── Masonry gallery ─────────────────────────────────────── */}
      <section className="container-tight py-14 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
          {projects.map((p, i) => (
            <GalleryTile key={p.id} project={p} onOpen={() => setActiveIdx(i)} />
          ))}
        </div>
      </section>

      {/* ── Quiet CTA ───────────────────────────────────────────── */}
      <section className="container-tight py-20 md:py-32 border-t border-neutral-200">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400">
              Ваш проект
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight font-medium">
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

      {activeIdx !== null && (
        <Lightbox
          project={projects[activeIdx]}
          index={activeIdx}
          total={projects.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */

function GalleryTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative mb-6 md:mb-8 block w-full overflow-hidden rounded-[16px] border border-neutral-200 bg-neutral-100 break-inside-avoid text-left"
    >
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="block w-full h-auto object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-500" />
      <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <ArrowUpRight className="h-4 w-4 text-neutral-900" />
      </div>
    </button>
  );
}

function Lightbox({
  project,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-white animate-fade-in">
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-neutral-200 bg-white">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
          {String(index + 1).padStart(2, "0")} <span className="text-neutral-300">/ {String(total).padStart(2, "0")}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            aria-label="Предыдущее"
            className="h-10 w-10 grid place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={onNext}
            aria-label="Следующее"
            className="h-10 w-10 grid place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="ml-2 h-10 w-10 grid place-items-center rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-full pt-[72px] grid grid-cols-12 gap-0">
        <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-neutral-50 flex items-center justify-center p-6 md:p-12 overflow-hidden">
          <img
            key={project.id}
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain animate-fade-in"
          />
        </div>
        <aside className="col-span-12 md:col-span-4 lg:col-span-3 border-l border-neutral-200 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
              {project.category}
            </div>
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-medium leading-[1.15] tracking-tight">
              {project.title}
            </h2>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-neutral-400">
              <span className="h-px w-8 bg-neutral-300" />
              {project.year}
            </div>
            {project.summary && (
              <p className="mt-8 text-sm text-neutral-600 leading-relaxed">
                {project.summary}
              </p>
            )}
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-200">
            <Link
              to="/request"
              onClick={onClose}
              className="group inline-flex items-center gap-3 text-sm font-medium border-b border-neutral-900 pb-1 hover:gap-5 transition-all"
            >
              Обсудить похожий проект
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
