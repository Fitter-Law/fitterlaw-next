<html><head></head><body>import React, { useState } from "react";
import Link from "next/link";

const TabOne: React.FC = () =&gt; {
  const [openTab, setOpenTab] = useState(1);

  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "bg-gray dark:bg-meta-4 text-black dark:text-white";

  return (<div classname="rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="mb-7.5 flex flex-wrap gap-3 rounded-lg border border-stroke px-4 py-3 dark:border-strokedark"><link 1="" href="#" classname="{`rounded-md" px-4="" py-3="" text-sm="" font-medium="" hover:bg-primary="" hover:text-white="" dark:hover:bg-primary="" md:text-base="" lg:px-6="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(1)}
        &gt;
          Home<link 2="" href="#" classname="{`rounded-md" px-4="" py-3="" text-sm="" font-medium="" hover:bg-primary="" hover:text-white="" dark:hover:bg-primary="" md:text-base="" lg:px-6="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(2)}
        &gt;
          About Us<link 3="" href="#" classname="{`rounded-md" px-4="" py-3="" text-sm="" font-medium="" hover:bg-primary="" hover:text-white="" dark:hover:bg-primary="" md:text-base="" lg:px-6="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(3)}
        &gt;
          Our Team<link 4="" href="#" classname="{`rounded-md" px-4="" py-3="" text-sm="" font-medium="" hover:bg-primary="" hover:text-white="" dark:hover:bg-primary="" md:text-base="" lg:px-6="" ${="" opentab="==" ?="" activeclasses="" :="" inactiveclasses="" }`}="" onclick="{()" =="">setOpenTab(4)}
        &gt;
          Company Details</div><div><div 1="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.</div><div 2="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
          ex dolorum voluptate cupiditate adipisci doloremque, vel quam
          praesentium nihil veritatis.</div><div 3="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.<br><br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          mollitia nam eligendi reprehenderit reiciendis saepe laboriosam
          maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis
          ducimus recusandae repellat quasi eaque, suscipit praesentium totam?</div><div 4="" classname="{`leading-relaxed" ${opentab="==" ?="" "block"="" :="" "hidden"}`}="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas
          sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto
          quod.</div></div></div>);
};

export default TabOne;</body></html>