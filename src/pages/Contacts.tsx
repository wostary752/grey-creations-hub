import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/lib/useSEO";

export default function Contacts() {
  useSEO({
    title: "Контакты — ЛИДЕР МЕТАЛЛ",
    description: "Свяжитесь с производственным предприятием ЛИДЕР МЕТАЛЛ: телефоны, e-mail, юридический адрес, реквизиты.",
    ogTitle: "Контакты — ЛИДЕР МЕТАЛЛ",
    ogDescription: "Телефоны, e-mail, юридический адрес и реквизиты компании.",
  });
  return (
    <section className="container-tight py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Контакты</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Свяжитесь с нами</h1>
        <p className="mt-4 text-muted-foreground">Ответим на вопросы, поможем составить ТЗ, посчитаем стоимость изготовления.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ContactCard icon={<Phone className="h-5 w-5" />} title="Телефоны" lines={[
          <a key="p1" href="tel:+79215832347" className="hover:text-foreground">+7 (921) 583-23-47</a>,
          <a key="p2" href="tel:+79817344536" className="hover:text-foreground">+7 (981) 734-45-36</a>,
        ]} />
        <ContactCard icon={<Mail className="h-5 w-5" />} title="E-mail" lines={[
          <a key="e1" href="mailto:leader-metal@mail.ru" className="hover:text-foreground">leader-metal@mail.ru</a>,
        ]} />
        <ContactCard icon={<MapPin className="h-5 w-5" />} title="Юридический адрес" lines={["196140, г. Санкт-Петербург,", "Пулковское ш., д. 80, литер А, кв. 1"]} />
        <ContactCard icon={<Clock className="h-5 w-5" />} title="Режим работы" lines={["Пн–Пт: 9:00 – 18:00", "Сб–Вс: по договорённости"]} />
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground/80">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="font-display font-semibold text-lg">Реквизиты</div>
        </div>
        <div className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2 text-sm">
          <Req label="Наименование" value="ООО «Пром инжиниринг»" />
          <Req label="Юридический адрес" value="196140, Санкт-Петербург, Пулковское шоссе, д. 80, кв. 1" />
          <Req label="Фактический адрес" value="196247, Санкт-Петербург, Ленинский пр., д. 153" />
          <Req label="ИНН / КПП" value="7810755179 / 781001001" />
          <Req label="ОКПО" value="40686160" />
          <Req label="ОГРН" value="1197847082872" />
          <Req label="БИК" value="044525974" />
          <Req label="Банк" value="АО «Т Банк»" />
          <Req label="Р/с" value="40702810610001795425" />
          <Req label="К/с" value="30101810145250000974" />
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

function ContactCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: React.ReactNode[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground/80">{icon}</div>
        <div className="font-display font-semibold">{title}</div>
      </div>
      <div className="mt-4 space-y-1 text-sm text-muted-foreground">
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}

function Req({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border-b border-border/60 pb-2">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="mt-1 font-medium text-foreground">{value}</span>
    </div>
  );
}
