import React from "react";
import Link from "next/link";

const PaginationThree: React.FC = () =&gt; {
  return (<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Pagination Style 3</h3></div><div className="p-4 sm:p-6 xl:p-7.5"><nav><ul className="flex flex-wrap items-center gap-2"><li><link className="flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white" href="#">Previous</li><li><link className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white" href="#">1</li><li><link className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white" href="#">2</li><li><link className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white" href="#">3</li><li><link className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white" href="#">4</li><li><link className="flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white" href="#">5</li><li><link className="flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white" href="#">Next</li></ul></nav></div></div>);
};

export default PaginationThree;