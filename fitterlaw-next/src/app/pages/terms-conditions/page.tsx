<html><head></head><body>import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TeamOne from "@/components/Teams/TeamOne";
import TeamTwo from "@/components/Teams/TeamTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Terms &amp; Conditions | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Terms &amp; Conditions page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TermsConditions: React.FC = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="Terms &amp; Conditions"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="flex flex-col gap-7.5 p-4 sm:p-6 xl:p-9"><div><h3 classname="mb-5 text-title-md2 font-bold text-black dark:text-white">Terms &amp; Services</h3><p classname="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis quis ligula id molestie. Ut ultricies nulla sed mi
              elementum eleifend. Vivamus interdum mollis metus. Sed vitae orci
              porta, interdum nisi ac, vestibulum massa. Curabitur lorem sem,
              scelerisque ut lectus.</p><p classname="mt-4.5 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis quis ligula id molestie.</p></div><div><h4 classname="mb-5 text-title-sm2 font-bold leading-[30px] text-black dark:text-white">Lorem ipsum 1</h4><p classname="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis quis ligula id molestie. Ut ultricies nulla sed mi
              elementum eleifend. Vivamus interdum mollis metus. Sed vitae orci
              porta, interdum nisi ac, vestibulum massa. Curabitur lorem sem,
              scelerisque ut lectus Aliquam erat volutpat. Ut a diam ultrices,
              pellentesque magna iaculis, pellentesque lacus. Nulla at luctus
              ligula. Donec nibh est, elementum in tincidunt ac, luctus ut
              ipsum. In hac habitasse platea dictumst.</p><p classname="mt-4.5 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis quis ligula id molestie. Ut ultricies nulla sed mi
              elementum eleifend. Vivamus interdum mollis metus. Sed vitae orci
              porta, interdum nisi ac, vestibulum massa. Curabitur lorem sem.</p><p classname="mt-4.5 font-medium">Curabitur lorem sem, scelerisque ut lectus Aliquam erat volutpat.
              Ut a diam ultrices, pellentesque magna iaculis, pellentesque
              lacus. Nulla at luctus ligula. Donec nibh est, elementum in
              tincidunt ac, luctus ut ipsum. In hac habitasse platea dictumst
              Curabitur lorem sem, scelerisque erat volutpat.</p></div><div><h4 classname="mb-5 text-title-sm2 font-bold leading-[30px] text-black dark:text-white">Lorem ipsum 2</h4><p classname="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis quis ligula id molestie. Ut ultricies nulla sed mi
              elementum eleifend. Vivamus interdum mollis metus. Sed vitae orci
              porta, interdum nisi ac, vestibulum massa. Curabitur lorem sem.</p><p classname="mt-4.5 font-medium">Curabitur lorem sem, scelerisque ut lectus Aliquam erat volutpat.
              Ut a diam ultrices, pellentesque magna iaculis, pellentesque
              lacus. Nulla at luctus ligula. Donec nibh est, elementum in
              tincidunt ac, luctus ut ipsum. In hac habitasse platea dictumst
              Curabitur lorem sem, scelerisque erat volutpat.</p></div><div><h4 classname="mb-5 text-title-sm2 font-bold leading-[30px] text-black dark:text-white">Important Links</h4><ul classname="flex flex-col gap-2.5"><li classname="font-medium text-primary underline">Lorem ipsum dolor sit amet,</li><li classname="font-medium text-primary underline">Curabitur lorem sem scelerisque erat volutpat.</li><li classname="font-medium text-primary underline">Scelerisque erat volutpat.</li><li classname="font-medium text-primary underline">elementum eleifend</li></ul></div></div></div></breadcrumb></defaultlayout>);
};

export default TermsConditions;</body></html>