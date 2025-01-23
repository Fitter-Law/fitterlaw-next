<html><head></head><body>import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () =&gt; {
  const [state, setState] = useState<chartthreestate>({
    series: [65, 34, 12, 56],
  });

  const handleReset = () =&gt; {
    setState((prevState) =&gt; ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };
  handleReset;

  return (<div classname="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5"><div classname="mb-3 justify-between gap-4 sm:flex"><div><h5 classname="text-xl font-semibold text-black dark:text-white">Visitors Analytics</h5></div><div><div classname="relative z-20 inline-block"><select name="" classname="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"><option value="" classname="dark:bg-boxdark">Monthly</option><option value="" classname="dark:bg-boxdark">Yearly</option></select><span classname="absolute right-3 top-1/2 z-10 -translate-y-1/2"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z" fill="#637381"></path><path fillrule="evenodd" cliprule="evenodd" d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z" fill="#637381"></path></svg></span></div></div></div><div classname="mb-2"><div id="chartThree" classname="mx-auto flex justify-center"><reactapexchart options="{options}" series="{state.series}" type="donut"></reactapexchart></div></div><div classname="-mx-8 flex flex-wrap items-center justify-center gap-y-3"><div classname="w-full px-8 sm:w-1/2"><div classname="flex w-full items-center"><span classname="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span><p classname="flex w-full justify-between text-sm font-medium text-black dark:text-white"><span>Desktop</span><span>65%</span></p></div></div><div classname="w-full px-8 sm:w-1/2"><div classname="flex w-full items-center"><span classname="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span><p classname="flex w-full justify-between text-sm font-medium text-black dark:text-white"><span>Tablet</span><span>34%</span></p></div></div><div classname="w-full px-8 sm:w-1/2"><div classname="flex w-full items-center"><span classname="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span><p classname="flex w-full justify-between text-sm font-medium text-black dark:text-white"><span>Mobile</span><span>45%</span></p></div></div><div classname="w-full px-8 sm:w-1/2"><div classname="flex w-full items-center"><span classname="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span><p classname="flex w-full justify-between text-sm font-medium text-black dark:text-white"><span>Unknown</span><span>12%</span></p></div></div></div></div>);
};

export default ChartThree;</chartthreestate></body></html>