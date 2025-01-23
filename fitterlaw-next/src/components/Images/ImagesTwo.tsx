<html><head></head><body>import React from "react";
import Image from "next/image";

const ImagesTwo: React.FC = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Image Grid</h3></div><div classname="p-4 sm:p-6 xl:p-10"><div classname="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10"><div><img width="{431}" height="{385}" src="{&quot;/images/cover/cover-03.jpg&quot;}" alt="Cover"></div><div><img width="{431}" height="{385}" src="{&quot;/images/cover/cover-04.jpg&quot;}" alt="Cover"></div><div><img width="{431}" height="{385}" src="{&quot;/images/cover/cover-05.jpg&quot;}" alt="Cover"></div></div></div></div>);
};

export default ImagesTwo;</body></html>