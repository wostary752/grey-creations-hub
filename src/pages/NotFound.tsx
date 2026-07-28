import { Link } from "react-router-dom";
import { useSEO } from "@/lib/useSEO";

export default function NotFound() {
  useSEO({ title: "Страница не найдена — ЛИДЕР МЕТАЛЛ", noindex: true });
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, страница была перемещена или её никогда не существовало.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
