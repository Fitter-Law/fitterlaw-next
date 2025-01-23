import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableFive from "@/components/Tables/TableFive";
import TableSix from "@/components/Tables/TableSix";

export const metadata: Metadata = {
  title: "Next.js Pro Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pro Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ProTablesPage = () =&gt; {
  return (<DefaultLayout><breadcrumb pagename="Pro Tables"><div classname="flex flex-col gap-10"><tablefive><tablesix></tablesix></tablefive></div></breadcrumb></DefaultLayout>);
};

export default ProTablesPage;