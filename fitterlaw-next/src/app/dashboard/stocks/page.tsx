<html><head></head><body>import Stocks from "@/components/Dashboard/Stocks";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Stocks Dashboard | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Stocks Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const StocksPage = () =&gt; {
  return (<defaultlayout><stocks></stocks></defaultlayout>);
};

export default StocksPage;</body></html>