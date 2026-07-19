import { useState, type FormEvent, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Paperclip, X, CheckCircle2 } from "lucide-react";

type Preset = { subject?: string };

export function RequestForm({ preset }: { preset?: Preset }) {
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []).slice(0, 8);
    setFiles((prev) => [...prev, ...list].slice(0, 8));
    e.target.value = "";
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // имитация отправки — реального бэкенда сейчас нет
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setFiles([]);
  };

  return (
    <>
      <Tabs defaultValue="simple" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="simple">Быстрая заявка</TabsTrigger>
          <TabsTrigger value="detailed">Расширенное ТЗ</TabsTrigger>
        </TabsList>

        <TabsContent value="simple">
          <form onSubmit={submit} className="grid gap-5 rounded-xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
            <div className="grid gap-2">
              <Label htmlFor="s-details">Детали заявки</Label>
              <Textarea id="s-details" name="details" required rows={5} placeholder="Опишите, что нужно изготовить: материал, размеры, количество, срок…" defaultValue={preset?.subject} />
            </div>

            <FileField files={files} onFiles={onFiles} removeFile={removeFile} />

            <div className="grid gap-2">
              <Label htmlFor="s-contact">Телефон или юзернейм в соцсетях</Label>
              <Input id="s-contact" name="contact" required placeholder="+7 (___) ___-__-__  или  @username" />
              <p className="text-xs text-muted-foreground">Мы свяжемся с вами удобным способом.</p>
            </div>

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Отправляем…" : "Отправить заявку"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="detailed">
          <form onSubmit={submit} className="grid gap-5 rounded-xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
            <div className="grid gap-4 md:grid-cols-2">
              <Field id="d-name" label="Имя / контактное лицо" name="name" required />
              <Field id="d-company" label="Компания" name="company" placeholder="Необязательно" />
              <Field id="d-phone" label="Телефон" name="phone" required placeholder="+7 (___) ___-__-__" />
              <Field id="d-messenger" label="Мессенджер / соцсеть" name="messenger" placeholder="Telegram, WhatsApp, @username" />
              <Field id="d-email" label="E-mail" name="email" type="email" />
              <div className="grid gap-2">
                <Label htmlFor="d-service">Тип услуги</Label>
                <Select name="service">
                  <SelectTrigger id="d-service"><SelectValue placeholder="Выберите услугу" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laser">Лазерная резка</SelectItem>
                    <SelectItem value="bending">Гибка</SelectItem>
                    <SelectItem value="welding">Сварные работы</SelectItem>
                    <SelectItem value="machining">Мех. обработка</SelectItem>
                    <SelectItem value="design">Проектирование</SelectItem>
                    <SelectItem value="full">Проектирование + изготовление</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="grid gap-2">
                <Label htmlFor="d-material">Материал</Label>
                <Input id="d-material" name="material" placeholder="Ст3, AISI 304, AL и т.д." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-thickness">Толщина, мм</Label>
                <Input id="d-thickness" name="thickness" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-qty">Количество, шт</Label>
                <Input id="d-qty" name="qty" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-dim">Габариты изделия</Label>
                <Input id="d-dim" name="dim" placeholder="ДхШхВ" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-tolerance">Требуемая точность</Label>
                <Input id="d-tolerance" name="tolerance" placeholder="±0.1 мм и т.д." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-coating">Покрытие / обработка</Label>
                <Input id="d-coating" name="coating" placeholder="Порошок, цинк, шлифовка" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-deadline">Желаемый срок</Label>
                <Input id="d-deadline" name="deadline" placeholder="напр. до 15 числа" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-budget">Ориентир по бюджету</Label>
                <Input id="d-budget" name="budget" placeholder="Необязательно" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="d-delivery">Доставка</Label>
                <Select name="delivery">
                  <SelectTrigger id="d-delivery"><SelectValue placeholder="Выберите" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Самовывоз</SelectItem>
                    <SelectItem value="city">По городу</SelectItem>
                    <SelectItem value="region">В регион</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="d-task">Техническое задание / описание</Label>
              <Textarea id="d-task" name="task" rows={6} placeholder="Опишите изделие, назначение, особые требования, ссылки на референсы…" />
            </div>

            <FileField files={files} onFiles={onFiles} removeFile={removeFile} label="Чертежи, эскизы, фото (до 8 файлов)" />

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? "Отправляем…" : "Отправить расширенную заявку"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <Dialog open={sent} onOpenChange={setSent}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-center text-xl">Заявка принята</DialogTitle>
            <DialogDescription className="text-center">
              Спасибо! Мы получили вашу заявку и скоро свяжемся с вами по указанным контактам.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-2">
            <Button onClick={() => setSent(false)}>Хорошо</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({ id, label, ...props }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </div>
  );
}

function FileField({ files, onFiles, removeFile, label = "Прикрепить фото или файлы" }: {
  files: File[];
  onFiles: (e: ChangeEvent<HTMLInputElement>) => void;
  removeFile: (i: number) => void;
  label?: string;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground hover:bg-muted transition">
        <Paperclip className="h-4 w-4" />
        <span>Нажмите, чтобы выбрать файлы (JPG, PNG, PDF, DWG…)</span>
        <input type="file" multiple className="hidden" onChange={onFiles} accept="image/*,application/pdf,.dwg,.dxf,.step,.stp" />
      </label>
      {files.length > 0 && (
        <ul className="grid gap-1.5">
          {files.map((f, i) => (
            <li key={i} className="flex items-center justify-between rounded-md bg-secondary px-3 py-2 text-xs">
              <span className="truncate">{f.name}</span>
              <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-foreground">
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
