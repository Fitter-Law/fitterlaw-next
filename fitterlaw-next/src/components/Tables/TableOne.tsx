<html><head></head><body>import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"><h4 classname="mb-6 text-xl font-semibold text-black dark:text-white">Top Channels</h4><div classname="flex flex-col"><div classname="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5"><div classname="p-2.5 xl:p-5"><h5 classname="text-sm font-medium uppercase xsm:text-base">Source</h5></div><div classname="p-2.5 text-center xl:p-5"><h5 classname="text-sm font-medium uppercase xsm:text-base">Visitors</h5></div><div classname="p-2.5 text-center xl:p-5"><h5 classname="text-sm font-medium uppercase xsm:text-base">Revenues</h5></div><div classname="hidden p-2.5 text-center sm:block xl:p-5"><h5 classname="text-sm font-medium uppercase xsm:text-base">Sales</h5></div><div classname="hidden p-2.5 text-center sm:block xl:p-5"><h5 classname="text-sm font-medium uppercase xsm:text-base">Conversion</h5></div></div>{brandData.map((brand, key) =&gt; (<div 1="" classname="{`grid" grid-cols-3="" sm:grid-cols-5="" ${="" key="==" branddata.length="" -="" ?="" ""="" :="" "border-b="" border-stroke="" dark:border-strokedark"="" }`}=""><div classname="flex items-center gap-3 p-2.5 xl:p-5"><div classname="flex-shrink-0"><img src="{brand.logo}" alt="Brand" width="{48}" height="{48}"></div><p classname="hidden text-black dark:text-white sm:block">{brand.name}</p></div><div classname="flex items-center justify-center p-2.5 xl:p-5"><p classname="text-black dark:text-white">{brand.visitors}K</p></div><div classname="flex items-center justify-center p-2.5 xl:p-5"><p classname="text-meta-3">${brand.revenues}</p></div><div classname="hidden items-center justify-center p-2.5 sm:flex xl:p-5"><p classname="text-black dark:text-white">{brand.sales}</p></div><div classname="hidden items-center justify-center p-2.5 sm:flex xl:p-5"><p classname="text-meta-5">{brand.conversion}%</p></div></div>))}</div></div>);
};

export default TableOne;</body></html>