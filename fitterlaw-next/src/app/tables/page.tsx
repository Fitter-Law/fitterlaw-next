import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Tables"><div classname="flex flex-col gap-10"><tableone><tabletwo><tablethree></tablethree></tabletwo></tableone></div></breadcrumb></defaultlayout>);
};

export default TablesPage;