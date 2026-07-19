import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  { id: "1", title: "Кронштейн крепёжный", category: "Лазерная резка + гибка", year: "2025", image: p1, summary: "Партия 500 шт. из нержавеющей стали 2 мм." },
  { id: "2", title: "Металлическая лестница", category: "Сварные работы", year: "2025", image: p2, summary: "Промышленная лестница с площадкой для складского комплекса." },
  { id: "3", title: "Декоративная панель", category: "Лазерная резка", year: "2024", image: p3, summary: "Художественная перфорация по эскизу заказчика." },
  { id: "4", title: "Корпус оборудования", category: "Проектирование + изготовление", year: "2024", image: p4, summary: "Шкаф из нержавейки со шлифованной поверхностью." },
  { id: "5", title: "Рама конвейера", category: "Сварка + мех. обработка", year: "2024", image: p5, summary: "Сварная рама с обработкой посадочных мест." },
  { id: "6", title: "Корпус редуктора", category: "Токарно-фрезерная обработка", year: "2023", image: p6, summary: "Алюминиевый корпус, партия 40 шт." },
];
