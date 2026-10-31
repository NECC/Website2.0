import { IconType } from "react-icons";

export interface Partner {
  name: string;
  imgUrl: string;
  discounts: string[];
}

export type Info = {
  name: string;
  description: string;
  icon: IconType;
  imgUrl?: string[];
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

export type Product = {
  name: string;
  unit?: boolean;
  members: string;
  nonMembers: string;
  images: string[];
};

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};
