<html><head></head><body>import React, { useState } from "react";
import Link from "next/link";

const TabThree: React.FC = () =&gt; {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "text-primary border-primary";
  const inactiveClasses = "border-transparent";

  return (<div classname="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10"><link 1="" href="#" classname="{`border-b-2" py-4="" text-sm="" font-medium="" hover:text-primary="" md:text-base="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(1)}
        &gt;
          Profile<link 2="" href="#" classname="{`border-b-2" py-4="" text-sm="" font-medium="" hover:text-primary="" md:text-base="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(2)}
        &gt;
          Password<link 3="" href="#" classname="{`border-b-2" py-4="" text-sm="" font-medium="" hover:text-primary="" md:text-base="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(3)}
        &gt;
          Team<link 4="" href="#" classname="{`border-b-2" py-4="" text-sm="" font-medium="" hover:text-primary="" md:text-base="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(4)}
        &gt;
          Notification</div><div><div 1="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per</div><div 2="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Tab2 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per</div><div 3="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Tab3 ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus ligula nec dolor placerat, a consequat elit volutpat. Quisque
          nibh lacus, posuere et turpis in, pretium facilisis nisl. Proin congue
          sem vel sollicitudin sagittis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per</div><div 4="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Tab4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.</div></div></div>);
};

export default TabThree;</body></html>