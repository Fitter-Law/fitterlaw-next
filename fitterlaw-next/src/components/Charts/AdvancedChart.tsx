"use client";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import ChartFour from "@/components/Charts/ChartFour";
import ChartSeven from "@/components/Charts/ChartSeven";
import ChartEight from "@/components/Charts/ChartEight";
import ChartSix from "@/components/Charts/ChartSix";
import ChartNine from "@/components/Charts/ChartNine";
import ChartTwelve from "@/components/Charts/ChartTwelve";
import React from "react";

const AdvancedChart: React.FC = () =&gt; {
  return (&lt;&gt;<breadcrumb pagename="Advanced Chart"><div classname="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"><div classname="col-span-12"><chartfour></chartfour></div><div classname="col-span-12 xl:col-span-7"><chartseven></chartseven></div><div classname="col-span-12 xl:col-span-5"><charteight></charteight></div><div classname="col-span-12 xl:col-span-7"><chartsix></chartsix></div><div classname="col-span-12 xl:col-span-5"><chartnine></chartnine></div><charttwelve></charttwelve></div>);
};

export default AdvancedChart;</breadcrumb>