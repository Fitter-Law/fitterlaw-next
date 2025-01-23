<html><head></head><body>import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import VideosItem from "@/components/VideosItem";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Videos | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Videos page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Videos: React.FC = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Videos"><div classname="flex flex-col gap-7.5"><videositem title="Embeds Video" embeds=""><videositem title="Responsive Aspect ratios 4:3" aspectfour=""><videositem title="Responsive Aspect ratios 21:9" aspecttwentyone=""><videositem title="Responsive Aspect ratios 1:1" aspectone=""></videositem></videositem></videositem></videositem></div></breadcrumb></defaultlayout>);
};

export default Videos;</body></html>