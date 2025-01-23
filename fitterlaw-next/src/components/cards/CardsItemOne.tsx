<html><head></head><body>import React from "react";
import Link from "next/link";
import { CardItemProps } from "@/types/cards";
import Image from "next/image";

const CardsItemOne: React.FC<carditemprops>= ({
  imageSrc,
  name,
  role,
  cardImageSrc,
  cardTitle,
  cardContent,
}) =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="flex items-center gap-3 px-6 py-5"><div classname="h-10 w-10 rounded-full"><img width="{40}" height="{40}" src="{imageSrc" ||="" ""}="" alt="User"></div><div><h4 classname="font-medium text-black dark:text-white">{name}</h4><p classname="text-sm">{role}</p></div></div><link href="#" classname="block px-4"><img width="{432}" height="{238}" src="{cardImageSrc" ||="" ""}="" alt="Cards"><div classname="p-6"><h4 classname="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary"><link href="#">{cardTitle}</h4><p>{cardContent}</p></div></div>);
};

export default CardsItemOne;</carditemprops></body></html>