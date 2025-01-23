<html><head></head><body>import React from "react";
import PopoversBottom from "./PopoversBottom";
import PopoversRight from "./PopoversRight";
import PopoversTop from "./PopoversTop";
import PopoversLeft from "./PopoversLeft";

const PopoversOne: React.FC = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Popover in Four directions</h3></div><div classname="p-4 sm:p-5 xl:p-7.5"><div classname="-mx-4 flex flex-wrap justify-center"><popoversbottom><popoversright><popoverstop><popoversleft></popoversleft></popoverstop></popoversright></popoversbottom></div></div></div>);
};

export default PopoversOne;</body></html>