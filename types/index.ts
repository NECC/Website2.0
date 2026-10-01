import { IconType } from "react-icons";

export type Partner = {
  name: string;
  description: string;
  image: string;
};

export type Info = {
  name: string;
  icon: IconType;
  description: string;
};

export type TeamMember = {
  role: string;
  name: string;
  imgUrl: string;
};

export type TeamData = {
  direcao: TeamMember[];
  assembleia: TeamMember[];
  conselho: TeamMember[];
  departamentos: {
    pedagogico: TeamMember[];
    comunicacao: TeamMember[];
    desenvolvimento: TeamMember[];
    recreativo: TeamMember[];
  };
};
