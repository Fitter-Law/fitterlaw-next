<html><head></head><body>import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const CalendarPage = () =&gt; {
  return (<defaultlayout><calendar></calendar></defaultlayout>);
};

export default CalendarPage;</body></html>