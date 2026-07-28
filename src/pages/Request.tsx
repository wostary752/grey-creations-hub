import { RequestForm } from "@/components/RequestForm";
import { useSEO } from "@/lib/useSEO";

export default function Request() {
  useSEO({
    title: "Оставить заявку — ЛИДЕР МЕТАЛЛ",
    description: "Быстрая заявка или расширенное ТЗ — прикрепите фото и чертежи, укажите контакт, и мы свяжемся с вами.",
    ogTitle: "Оставить заявку — ЛИДЕР МЕТАЛЛ",
    ogDescription: "Быстрая заявка и расширенное ТЗ.",
  });
  return (
    <section className="container-tight py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="eyebrow">Заявка</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Оставить заявку</h1>
        <p className="mt-4 text-muted-foreground">
          Быстрая форма — если нужно просто описать задачу. Расширенное ТЗ — если задача сложная и вы уже знаете параметры изделия.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <RequestForm />
      </div>
    </section>
  );
}
