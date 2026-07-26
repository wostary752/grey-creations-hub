import weldingFrame from "@/assets/portfolio/welding-frame.jpg.asset.json";
import weldedJoint from "@/assets/portfolio/welded-joint.jpg.asset.json";
import adjustableFrame from "@/assets/portfolio/adjustable-frame.jpg.asset.json";
import beamBrackets from "@/assets/portfolio/beam-brackets.jpg.asset.json";
import channelPerforated from "@/assets/portfolio/channel-perforated.jpg.asset.json";
import liftingLugs from "@/assets/portfolio/lifting-lugs.jpg.asset.json";
import angleBrackets from "@/assets/portfolio/angle-brackets.jpg.asset.json";
import postBases from "@/assets/portfolio/post-bases.jpg.asset.json";
import profileBatch from "@/assets/portfolio/profile-batch.jpg.asset.json";
import laserParts from "@/assets/portfolio/laser-parts.jpg.asset.json";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  /** Orientation hint for editorial layout */
  aspect: "landscape" | "portrait" | "square";
  /** Feature size in the mosaic */
  size: "feature" | "large" | "medium" | "small";
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Сварная рама сборочного стенда",
    category: "Сварные металлоконструкции",
    year: "2025",
    image: weldingFrame.url,
    summary: "Регулируемый каркас из профильной трубы для промышленной сборки.",
    aspect: "square",
    size: "feature",
  },
  {
    id: "2",
    title: "Опорные базы колонн",
    category: "Резка + сварка",
    year: "2025",
    image: postBases.url,
    summary: "Партия опорных узлов из листа 10 мм с фрезерованными отверстиями.",
    aspect: "portrait",
    size: "large",
  },
  {
    id: "3",
    title: "Кронштейны монтажные",
    category: "Лазерная резка + гибка",
    year: "2025",
    image: angleBrackets.url,
    summary: "Серия угловых кронштейнов с резьбовыми втулками.",
    aspect: "landscape",
    size: "medium",
  },
  {
    id: "4",
    title: "Балочные закладные",
    category: "Сварка",
    year: "2024",
    image: beamBrackets.url,
    summary: "Закладные элементы для несущих балок промышленного здания.",
    aspect: "landscape",
    size: "large",
  },
  {
    id: "5",
    title: "Перфорированный швеллер",
    category: "Лазерная резка",
    year: "2024",
    image: channelPerforated.url,
    summary: "Гнутый профиль с точной перфорацией по чертежу.",
    aspect: "square",
    size: "medium",
  },
  {
    id: "6",
    title: "Проушины подъёмные",
    category: "Резка + сварка",
    year: "2024",
    image: liftingLugs.url,
    summary: "Такелажные проушины с контролем сварных швов.",
    aspect: "landscape",
    size: "medium",
  },
  {
    id: "7",
    title: "Узлы соединения рамы",
    category: "Сварные работы",
    year: "2024",
    image: weldedJoint.url,
    summary: "Сварка ответственных узлов с последующей зачисткой.",
    aspect: "landscape",
    size: "large",
  },
  {
    id: "8",
    title: "Регулируемые стойки",
    category: "Проектирование + изготовление",
    year: "2023",
    image: adjustableFrame.url,
    summary: "Стойки с регулировкой по высоте и фиксирующими рукоятками.",
    aspect: "landscape",
    size: "medium",
  },
  {
    id: "9",
    title: "Серия профильных балок",
    category: "Резка + сварка",
    year: "2023",
    image: profileBatch.url,
    summary: "Партия унифицированных балок по повторяющейся оснастке.",
    aspect: "square",
    size: "medium",
  },
  {
    id: "10",
    title: "Комплект деталей лазерной резки",
    category: "Лазерная резка",
    year: "2023",
    image: laserParts.url,
    summary: "Серийные детали из листовой стали для машиностроения.",
    aspect: "landscape",
    size: "feature",
  },
];
