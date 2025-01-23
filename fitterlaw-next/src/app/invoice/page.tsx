import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import InvoiceOne from "@/components/Invoice/InvoiceOne";
import InVoiceTwo from "@/components/Invoice/InvoiceTwo";

export const metadata: Metadata = {
  title: "Next.js Invoice | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Invoice page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Invoice: React.FC = () =&gt; {
  return (<DefaultLayout><breadcrumb pagename="Invoice"><div classname="flex flex-col gap-10"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 1</h3></div><div classname="p-4 sm:p-6 xl:p-9"><invoiceone></invoiceone></div></div><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-9"><h3 classname="font-medium text-black dark:text-white">Style 2</h3></div><div classname="p-4 sm:p-6 xl:p-9"><invoicetwo></invoicetwo></div></div></div></breadcrumb></DefaultLayout>);
};

export default Invoice;