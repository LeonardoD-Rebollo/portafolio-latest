
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import { JSX } from "react";
import { TecnologiesInterface } from "./tecnologies-list";
export interface ProjectsInterface {
  id: number;
  icon: JSX.Element;
  name: string;
  date: string;
  repository: string;
  description: string;
  imagesSrc: string;
  technologies: number[];
  projectTecnologies?: TecnologiesInterface[];
  images?: string[];
  features: string[];
}

export const Projects: ProjectsInterface[] = [
  {
    id: 1,
    icon: <WebRoundedIcon />,
    name: "mirror.name",
    date: "mirror.date",
    repository: "private",
    description: "mirror.description",
    imagesSrc: "images/MirrorProject",
    technologies: [9, 10, 11, 1, 2, 14],
    features: ["mirror.features.database", "mirror.features.versioning", "mirror.features.ai", "mirror.features.databasedesign", "mirror.features.databaseexport"],
  },
  {
    id: 2,
    icon: <WebRoundedIcon />,
    name: "aluvipac.name",
    date: "aluvipac.date",
    repository: "https://github.com/LeonardoDRebollo/ALUVIPAC",
    description: "aluvipac.description",
    imagesSrc: "images/Aluvipac",
    technologies: [9, 10, 11, 1, 2, 15],
    features: ["aluvipac.features.mail", "aluvipac.features.contact", "aluvipac.features.database",],
  },
  {
    id: 3,
    icon: <WebRoundedIcon />,
    name: "hrc.name",
    date: "hrc.date",
    repository: "private",
    description: "hrc.description",
    imagesSrc: "images/HardRock",
    technologies: [9, 10, 11, 1, 2, 14],
    features: ["hrc.features.practicants", "hrc.features.versioning", "hrc.features.ws", "hrc.features.pdf", "hrc.features.charts", "hrc.features.charts2"],
  },
  {
    id: 4,
    icon: <PhoneAndroidRoundedIcon />,
    name: "banking.name",
    date: "banking.date",
    repository: "private",
    description: "banking.description",
    imagesSrc: "images/Banking",
    technologies: [13],
    features: ["banking.features.banking", "banking.features.api", "banking.features.versioning", "banking.features.notifications"],
  },
  {
    id: 5,
    icon: <WebRoundedIcon />,
    name: "sipse.name",
    date: "sipse.date",
    repository: "https://github.com/Albertofuentes00/Newsnet-sipsetv",
    description: "sipse.description",
    imagesSrc: "images/SIPSE",
    technologies: [1, 2, 4, 5, 7, 9],
    features: ["sipse.features.tables", "sipse.features.pdf", "sipse.features.automation", "sipse.features.versioning"],
  },
  {
    id: 6,
    icon: <WebRoundedIcon />,
    name: "acervo.name",
    date: "acervo.date",
    repository: "private",
    description: "acervo.description",
    imagesSrc: "images/Acervo",
    technologies: [12],
    features: ["acervo.features.memories", "acervo.features.mails", "acervo.features.plugins", "acervo.features.versioning", "acervo.features.pdf"],
  },
  {
    id: 7,
    icon: <WebRoundedIcon />,
    name: "mythschool.name",
    date: "mythschool.date",
    repository: "https://github.com/LeonardoDRebollo/PFmyschool",
    description: "mythschool.description",
    imagesSrc: "images/MythSchool",
    technologies: [1, 2, 4, 7],
    features: ["mythschool.features.search", "mythschool.features.versioning", "mythschool.features.form", "mythschool.features.api", "mythschool.features.mvc"],
  },
  {
    id: 8,
    icon: <DesktopWindowsRoundedIcon />,
    name: "radio.name",
    date: "radio.date",
    repository: "private",
    description: "radio.description",
    imagesSrc: "images/RadioXmal",
    technologies: [4, 7],
    features: ["radio.features.radio", "radio.features.xml", "radio.features.desktop", "radio.features.net", "radio.features.mvc"],
  },
  {
    id: 9,
    icon: <DesktopWindowsRoundedIcon />,
    name: "petmania.name",
    date: "petmania.date",
    repository: "private",
    description: "petmania.description",
    imagesSrc: "images/Petmania",
    technologies: [3, 6],
    features: ["petmania.features.pets", "petmania.features.versioning", "petmania.features.java", "petmania.features.desktop"],
  }

];
