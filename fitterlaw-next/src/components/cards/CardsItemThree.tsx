<html><head></head><body>import React from "react";
import Link from "next/link";
import { CardItemProps } from "@/types/cards";

const CardsItemThree: React.FC<carditemprops>= ({
  cardTitle,
  cardContent,
}) =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke p-5 px-7.5 dark:border-strokedark"><h4 classname="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary"><link href="#">{cardTitle}</h4></div><div classname="px-7.5 pb-9 pt-6"><p>{cardContent}</p></div></div>);
};

export default CardsItemThree;</carditemprops></body></html>