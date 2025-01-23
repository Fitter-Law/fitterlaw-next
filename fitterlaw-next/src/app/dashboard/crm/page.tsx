<html><head></head><body>import CRM from "@/components/Dashboard/CRM";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js CRM Dashboard | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js CRM Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const CrmPage = () =&gt; {
  return (<defaultlayout><crm></crm></defaultlayout>);
};

export default CrmPage;</body></html>