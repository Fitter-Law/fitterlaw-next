<html><head></head><body>import React, { useEffect } from "react";
import ImageResize from "@/js/image-resize";
import Image from "next/image";

const ImagesOne: React.FC = () =&gt; {
  useEffect(() =&gt; {
    ImageResize();
  });
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Responsive image</h3></div><div classname="p-4 sm:p-6 xl:p-10"><div classname="relative"><div id="pane" classname="overflow-hidden"><img src="{&quot;/images/cover/cover-02.jpg&quot;}" width="{1374}" height="{520}" alt="Cover"></div><div id="ghostpane" classname="absolute left-0 top-0 duration-300 ease-in-out"></div></div></div></div>);
};

export default ImagesOne;</body></html>