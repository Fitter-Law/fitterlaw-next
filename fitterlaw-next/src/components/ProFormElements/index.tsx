<html><head></head><body>"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import RangeSliderOne from "@/components/ProFormElements/RangeSlider/RangeSliderOne";
import RangeSliderTwo from "@/components/ProFormElements/RangeSlider/RangeSliderTwo";
import FileDropZone from "@/components/ProFormElements/FileDropZone";

const ProFormElements = () =&gt; {
  return (
    &lt;&gt;<breadcrumb pagename="Pro Form Elements"><div classname="grid grid-cols-1 gap-9 sm:grid-cols-2"><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Range Slider</h3></div><div classname="flex flex-col gap-5.5 p-7.5"><rangesliderone><rangeslidertwo></rangeslidertwo></rangesliderone></div></div></div><div classname="flex flex-col gap-9">{/**/}<filedropzone></filedropzone></div></div>);
};

export default ProFormElements;</breadcrumb></body></html>