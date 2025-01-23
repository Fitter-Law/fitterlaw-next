import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AvatarOne from "@/components/Avatars/AvatarOne";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AvatarTwo from "@/components/Avatars/AvatarTwo";

export const metadata: Metadata = {
  title: "Next.js Avatars | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Avatars page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AvatarsPage = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Avatars"><div classname="flex flex-col gap-7.5"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 1</h3></div><div classname="px-4 py-9 sm:px-6 xl:px-8.5"><avatarone></avatarone></div></div><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 2</h3></div><div classname="p-4 sm:p-6 xl:p-9"><avatartwo></avatartwo></div></div></div></breadcrumb></defaultlayout>);
};

export default AvatarsPage;