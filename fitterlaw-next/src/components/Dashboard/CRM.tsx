<html><head></head><body>"use client";
import React from "react";
import DataStatsThree from "../DataStats/DataStatsThree";
import ChartSeven from "../Charts/ChartSeven";
import ChartEight from "../Charts/ChartEight";
import ChartNine from "../Charts/ChartNine";
import LeadsReport from "../LeadsReport";
import ToDoList from "../Todo/ToDoList";

const CRM: React.FC = () =&gt; {
  return (
    &lt;&gt;<datastatsthree><div classname="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"><div classname="col-span-12 xl:col-span-7"><chartseven></chartseven></div><div classname="col-span-12 xl:col-span-5"><charteight></charteight></div><leadsreport><div classname="col-span-12 xl:col-span-5"><chartnine></chartnine></div><todolist></todolist></leadsreport></div>);
};

export default CRM;</datastatsthree></body></html>