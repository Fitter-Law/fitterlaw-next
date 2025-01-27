"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (&lt;&gt;<div className="flex h-screen overflow-hidden"><sidebar sidebaropen="{sidebarOpen}" setsidebaropen="{setSidebarOpen}"><div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"><header sidebaropen="{sidebarOpen}" setsidebaropen="{setSidebarOpen}"><main><div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div></main></header></div></sidebar></div>);
}