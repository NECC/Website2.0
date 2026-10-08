import {
  FaUser,
  FaCalendar,
  FaMapPin,
  FaUserGroup,
  FaWrench,
  FaCircleQuestion,
  FaDisplay,
  FaAtom,
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
      "Fundado em 2001, o NECC é um dos núcleos de estudantes mais antigos da Universidade do Minho, com mais de duas décadas ao serviço da comunidade académica.",
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
  },
  {
    name: "Sessões de dúvidas",
    icon: FaCircleQuestion,
    description:
      "Espaços de apoio académico onde membros mais experientes ajudam colegas a superar dificuldades nas unidades curriculares do curso.",
  },
  {
    name: "LIP",
    icon: FaDisplay,
    description:
      "Linux Installation Party — um evento dedicado a ajudar estudantes a instalar e configurar Linux, promovendo o software livre e o controlo do próprio ambiente de trabalho.",
  },
  {
    name: "SCI",
    icon: FaAtom,
    description:
      "Semana da Ciência e Inovação — uma semana de palestras, painéis e demonstrações com investigadores e profissionais da área da computação e tecnologia.",
  },
];
