<html><head></head><body>"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartTen from "@/components/Charts/ChartTen";
import FileDetailsList from "@/components/FileDetailsList";
import StorageChart from "@/components/Storage/StorageChart";
import StorageList from "@/components/Storage/StorageList";
import DownloadList from "@/components/DownloadList";

const FileManager: React.FC = () =&gt; {
  return (
    &lt;&gt;<breadcrumb pagename="File Manager"><filedetailslist><div classname="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"><div classname="col-span-12 xl:col-span-8"><chartten></chartten></div><div classname="col-span-12 xl:col-span-4"><div classname="flex flex-col gap-4 sm:flex-row md:gap-6 xl:flex-col xl:gap-7.5"><storagechart><storagelist></storagelist></storagechart></div></div><downloadlist></downloadlist></div>);
};

export default FileManager;</filedetailslist></breadcrumb></body></html>