import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ListOne from "@/components/List/ListOne";
import ListTwo from "@/components/List/ListTwo";
import ListThree from "@/components/List/ListThree";

export const metadata: Metadata = {
  title: "Next.js List | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js List page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ListPage = () =&gt; {
  return (
  <DefaultLayout>
    return (
  
    return (<breadcrumb pagename="List"><div className="flex flex-col gap-7.5"><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 className="font-medium text-black dark:text-white">Style 1</h3></div><div className="p-4 sm:p-6 xl:p-9"><listone></listone></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 className="font-medium text-black dark:text-white">Style 2</h3></div><div className="p-4 sm:p-6 xl:p-9"><listtwo></listtwo></div></div><div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 className="font-medium text-black dark:text-white">Style 3</h3></div><div className="p-4 sm:p-6 xl:p-9"><listthree></listthree></div></div></div></breadcrumb>);
  
);
  </DefaultLayout>
);
};

export default ListPage;