import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — МЕТАЛФОРМ" },
      { name: "description", content: "Свяжитесь с производственным предприятием МЕТАЛФОРМ: телефон, e-mail, адрес производства, часы работы." },
      { property: "og:title", content: "Контакты — МЕТАЛФОРМ" },
      { property: "og:description", content: "Телефон, e-mail, адрес производства." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <section className="container-tight py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Контакты</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Свяжитесь с нами</h1>
        <p className="mt-4 text-muted-foreground">Ответим на вопросы, поможем составить ТЗ, посчитаем стоимость изготовления.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ContactCard icon={<Phone className="h-5 w-5" />} title="Телефон" lines={["+7 (495) 000-00-00", "+7 (901) 000-00-00"]} />
        <ContactCard icon={<Mail className="h-5 w-5" />} title="E-mail" lines={["info@metalform.ru", "kb@metalform.ru — конструкторское бюро"]} />
        <ContactCard icon={<MapPin className="h-5 w-5" />} title="Производство" lines={["г. Москва, ул. Промышленная, 12", "Собственная территория, охраняемая парковка"]} />
        <ContactCard icon={<Clock className="h-5 w-5" />} title="Режим работы" lines={["Пн–Пт: 9:00 – 18:00", "Сб–Вс: по договорённости"]} />
      </div>

      <div className="mt-12 aspect-[16/7] overflow-hidden rounded-2xl border border-border" style={{ background: "var(--gradient-surface)" }}>
        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto opacity-60" />
            <div className="mt-2 text-sm">Карта проезда — г. Москва, ул. Промышленная, 12</div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl p-10 text-center" style={{ background: "var(--gradient-steel)", color: "oklch(0.98 0 0)" }}>
        <h2 className="text-2xl md:text-3xl font-bold">Готовы начать?</h2>
        <p className="mt-3 opacity-80">Оставьте заявку — свяжемся в течение рабочего дня.</p>
        <div className="mt-6">
          <Button asChild size="lg" variant="secondary"><Link to="/request">Оставить заявку</Link></Button>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground/80">{icon}</div>
        <div className="font-display font-semibold">{title}</div>
      </div>
      <div className="mt-4 space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
