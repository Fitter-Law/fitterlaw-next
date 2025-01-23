<html><head></head><body>import React from "react";
import Messages from "@/components/Messages";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Messages | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Messages page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const MessagesPage = () =&gt; {
  return (<defaultlayout><messages></messages></defaultlayout>);
};

export default MessagesPage;</body></html>