import React from "react";
import Image from "next/image";
import DropdownFive from "@/components/Dropdowns/DropdownFive";

interface ListItem {
  image: string;
  name: string;
  position: string;
}

const listItems: ListItem[] = [
  {
    image: "/images/user/user-01.png",
    name: "Devid Wilium",
    position: "Digital marketer",
  },
  {
    image: "/images/user/user-03.png",
    name: "Deniyal Shifer",
    position: "Graphics designer",
  },
  {
    image: "/images/user/user-02.png",
    name: "Philifs Geno",
    position: "Content creator",
  },
  {
    image: "/images/user/user-05.png",
    name: "Marko Diyan",
    position: "Web developer",
  },
];

const ListThree: React.FC = () =&gt; {
  return (<div classname="w-full max-w-[360px] rounded-md border border-stroke py-2.5 dark:border-strokedark"><div classname="flex flex-col">{listItems.map((item, index) =&gt; (<div key="{index}" classname="flex items-center justify-between p-4.5 hover:bg-[#F9FAFB] dark:hover:bg-meta-4"><div classname="flex items-center"><div classname="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full"><img width="{50}" height="{50}" src="{item.image}" alt="user" classname="rounded-full object-cover object-center" style="{{" width:="" "auto",="" height:="" }}=""></div><div><h4 classname="text-base font-medium text-black dark:text-white">{item.name}</h4><p classname="text-sm">{item.position}</p></div></div><div><dropdownfive></dropdownfive></div></div>))}</div></div>);
};

export default ListThree;