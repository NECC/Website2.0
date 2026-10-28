import { Product } from "@/types";

export const products: Product[] = [
  {
    name: "Casaco NECC",
    members: "27€",
    nonMembers: "30€",
    images: ["merch1.png", "merch2.png"],
  },
  {
    name: "Hoodie NECC",
    members: "25€",
    nonMembers: "28€",
    images: ["merch3.png", "merch4.png"],
  },
  {
    name: "TShirt NECC",
    unit: true,
    members: "6,50€",
    nonMembers: "7,50€",
    images: ["merch5.png", "merch6.png"],
  },
  {
    name: "Hoodie + Casaco NECC",
    members: "50€",
    nonMembers: "53€",
    images: ["merch1.png", "merch3.png"],
  },
  {
    name: "Sticker NECC",
    unit: true,
    members: "0,50€",
    nonMembers: "1€",
    images: ["merch7.png", "merch8.png"],
  },
  {
    name: "Emblema NECC",
    unit: true,
    members: "1€",
    nonMembers: "2€",
    images: ["merch9.png", "merch10.png"],
  },
];
