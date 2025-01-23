import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TeamOne from "@/components/Teams/TeamOne";
import TeamTwo from "@/components/Teams/TeamTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Teams | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Teams page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Team: React.FC = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Teams"><div classname="flex flex-col gap-7.5"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 1</h3></div><div classname="p-4 sm:p-6 xl:p-9"><teamone></teamone></div></div><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 2</h3></div><div classname="p-4 sm:p-6 xl:p-9 2xl:p-15"><teamtwo></teamtwo></div></div></div></breadcrumb></defaultlayout>);
};

export default Team;