import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardsItemOne from "@/components/cards/CardsItemOne";
import CardsItemTwo from "@/components/cards/CardsItemTwo";
import CardsItemThree from "@/components/cards/CardsItemThree";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Cards | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Cards page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const cardsItemOneData = [
  {
    imageSrc: "/images/user/user-11.png",
    name: "Naimur Rahman",
    role: "Content Writer",
    cardImageSrc: "/images/cards/cards-01.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    imageSrc: "/images/user/user-12.png",
    name: "Musharof Chy",
    role: "Web Developer",
    cardImageSrc: "/images/cards/cards-02.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    imageSrc: "/images/user/user-13.png",
    name: "Shafiq Hammad",
    role: "Front-end Developer",
    cardImageSrc: "/images/cards/cards-03.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const cardsItemTwoData = [
  {
    cardImageSrc: "/images/cards/cards-04.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    cardImageSrc: "/images/cards/cards-05.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },

  {
    cardImageSrc: "/images/cards/cards-06.png",
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const cardsItemThreeData = [
  {
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
  {
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
  {
    cardTitle: "Next.js Card Title here",
    cardContent:
      "Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.",
  },
];

const Cards: React.FC = () =&gt; {
  return (<DefaultLayout><breadcrumb pagename="Cards"><div classname="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">{cardsItemOneData.map((card, key) =&gt; (<cardsitemone key="{key}" imagesrc="{card.imageSrc}" name="{card.name}" role="{card.role}" cardimagesrc="{card.cardImageSrc}" cardtitle="{card.cardTitle}" cardcontent="{card.cardContent}">))}</cardsitemone></div><h2 classname="mb-7.5 mt-10 text-title-md2 font-semibold text-black dark:text-white">Cards</h2><div classname="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">{cardsItemTwoData.map((card, key) =&gt; (<cardsitemtwo key="{key}" cardimagesrc="{card.cardImageSrc}" cardtitle="{card.cardTitle}" cardcontent="{card.cardContent}">))}</cardsitemtwo></div><h2 classname="mb-7.5 mt-10 text-title-md2 font-semibold text-black dark:text-white">Cards</h2><div classname="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">{cardsItemThreeData.map((card, key) =&gt; (<cardsitemthree key="{key}" cardtitle="{card.cardTitle}" cardcontent="{card.cardContent}">))}</cardsitemthree></div></breadcrumb></DefaultLayout>);
};

export default Cards;