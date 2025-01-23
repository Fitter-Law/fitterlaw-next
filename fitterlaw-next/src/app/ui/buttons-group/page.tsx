<html><head></head><body>import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ButtonsGroupOne from "@/components/ButtonsGroups/ButtonsGroupOne";
import ButtonsGroupTwo from "@/components/ButtonsGroups/ButtonsGroupTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Button Groups | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Button Groups page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ButtonsGroup: React.FC = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Buttons Group"><div classname="flex flex-col gap-7.5"><buttonsgroupone><buttonsgrouptwo></buttonsgrouptwo></buttonsgroupone></div></breadcrumb></defaultlayout>);
};

export default ButtonsGroup;</body></html>