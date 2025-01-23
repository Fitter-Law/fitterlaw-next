import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FaqOne from "@/components/Faq/FaqOne";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Faq's | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Faq's page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Faq: React.FC = () =&gt; {
  return (<DefaultLayout><breadcrumb pagename="Faq's"><div classname="flex flex-col gap-7.5"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 1</h3></div><div classname="p-4 sm:p-6 xl:p-9"><faqone></faqone></div></div></div></breadcrumb></DefaultLayout>);
};

export default Faq;