import {
  FaUser,
  FaCalendar,
  FaMapPin,
  FaUserGroup,
  FaWrench,
  FaCircleQuestion,
  FaDisplay,
  FaLinux,
} from "react-icons/fa6";

import { Info } from "@/types";

export const aboutUsData: Info[] = [
  {
    name: "Missão",
    icon: FaUser,
    description:
      "Representar e apoiar os estudantes de Ciências da Computação da Universidade do Minho, promovendo o seu desenvolvimento académico, profissional e pessoal.",
  },
  {
    name: "Fundação",
    icon: FaCalendar,
    description:
      "As raízes do NECC estão no GEMCC (Grupo de Estudantes de Matemática e Ciências de Computação), criado por alunos da antiga licenciatura em 1994. Em 2009 passou a chamar-se NECC e continua, desde então, ao serviço da comunidade de Ciências da Computação.",
  },
  {
    name: "Localização",
    icon: FaMapPin,
    description:
      "Encontra-nos no Departamento de Informática da Universidade do Minho, sala 1.03, Campus de Gualtar, Braga.",
  },
  {
    name: "Comunidade",
    icon: FaUserGroup,
    description:
      "Uma comunidade ativa de estudantes organizada em departamentos de Direção, Desenvolvimento, Comunicação, Pedagógico, Recreativo e órgãos fiscais.",
  },
];

export const eventData: Info[] = [
  {
    name: "Workshops",
    icon: FaWrench,
    description:
      "Sessões práticas sobre tecnologias, linguagens e ferramentas relevantes para a área da computação, conduzidas por membros e convidados.",
    imgUrl: [
      "/images/landingPage/workshop1.jpeg",
      "/images/landingPage/workshop2.jpeg",
      "/images/landingPage/workshop3.jpeg",
    ],
  },
  {
    name: "Sessões de dúvidas",
    icon: FaCircleQuestion,
    description:
      "Espaços de apoio académico onde professores e alunos mais experientes ajudam a tirar duvidas para uma melhor preparação dos alunos para um teste.",
    imgUrl: [
      "/images/landingPage/duvidas1.jpeg",
      "/images/landingPage/duvidas2.jpeg",
    ],
  },
  {
    name: "LIP",
    icon: FaLinux,
    description:
      "Linux Installation Party ou LIP é um evento organizado pelo NECC e pelo Cesium que visa em ajudar os novos alunos a entrarem num novo ambiente de trabalho, o Linux, promovendo o software livre e o controlo da sua própria máquina.",
    imgUrl: [
      "/images/landingPage/lip2.jpeg",
      "/images/landingPage/lip3.jpeg"
    ],
  },
  {
    name: "40 ANOS LCC",
    icon: FaDisplay,
    description:
      "40 Anos da Licenciatura em Ciências da Computação, em 2027 vamos celebrar quatro décadas de história com um grande evento de 3 dias! Prepara-te para palestras, workshops, atividades e a presença de empresas do setor da computação. Um ponto de encontro imperdível para alunos, ex-alunos e todos os que queiram fazer parte desta celebração.",
    imgUrl: ["/images/landingPage/40anos.jpeg"],
  },
];
