<html><head></head><body>import Link from "next/link";
import Image from "next/image";
import { CardItemProps } from "@/types/cards";
import React from "react";

const CardsItemTwo: React.FC<carditemprops>= ({
  cardImageSrc,
  cardTitle,
  cardContent,
}) =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><link href="#" classname="block px-4 pt-4"><img width="{432}" height="{238}" src="{cardImageSrc" ||="" ""}="" alt="Cards"><div classname="p-6"><h4 classname="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary"><link href="#">{cardTitle}</h4><p>{cardContent}</p></div></div>);
};

export default CardsItemTwo;</carditemprops></body></html>