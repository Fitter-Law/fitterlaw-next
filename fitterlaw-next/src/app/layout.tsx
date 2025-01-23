<html lang="en"><head></head><body suppresshydrationwarning="{true}">"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "nouislider/dist/nouislider.css";
import "dropzone/dist/dropzone.css";
import "@/css/satoshi.css";
import "@/css/simple-datatables.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: Readonly&lt;{
  children: React.ReactNode;
}&gt;) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() =&gt; {
    setTimeout(() =&gt; setLoading(false), 1000);
  }, []);

  return (<div classname="dark:bg-boxdark-2 dark:text-bodydark">{loading ?<loader>: children}</loader></div>);
}</boolean></body></html>