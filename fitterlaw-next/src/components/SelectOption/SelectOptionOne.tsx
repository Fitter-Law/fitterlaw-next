"use client";
import React, { useState } from "react";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "Graphics", label: "Graphics Design" },
  { id: "Web", label: "Web Development" },
  { id: "Logo", label: "Logo Design" },
  { id: "Others", label: "Others" },
];

const SelectOptionOne: React.FC = () =&gt; {
  const [isChecked, setIsChecked] = useState<string>("");

  const handleRadioChange = (value: string) =&gt; {
    setIsChecked(value);
  };
  return (<div className="mb-5.5"><label htmlfor="roleSelect" className="mb-4.5 block text-sm font-medium text-black dark:text-white">Select option</label><div className="flex flex-wrap items-center gap-5.5">{options.map((option) =&gt; (<div key="{option.id}"><label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white"><input className="sr-only" type="radio" name="roleSelect" id="{option.id}" onchange="{()" =="">handleRadioChange(option.id)} /&gt;<span className="{`flex" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="==" option.id="" ?="" "border-primary"="" :="" "border-body"="" }`}=""><span className="{`h-2.5" w-2.5="" rounded-full="" bg-primary="" ${="" ischecked="==" option.id="" ?="" "flex"="" :="" "hidden"="" }`}=""></span></span>{option.label}</label></div>))}</div></div>);
};

export default SelectOptionOne;</string>