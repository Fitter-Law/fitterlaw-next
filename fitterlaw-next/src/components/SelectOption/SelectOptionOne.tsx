<html><head></head><body>"use client";
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
  return (<div classname="mb-5.5"><label htmlfor="roleSelect" classname="mb-4.5 block text-sm font-medium text-black dark:text-white">Select option</label><div classname="flex flex-wrap items-center gap-5.5">{options.map((option) =&gt; (<div key="{option.id}"><label classname="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white"><input classname="sr-only" type="radio" name="roleSelect" id="{option.id}" onchange="{()" =="">handleRadioChange(option.id)}
              /&gt;<span classname="{`flex" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="==" option.id="" ?="" "border-primary"="" :="" "border-body"="" }`}=""><span classname="{`h-2.5" w-2.5="" rounded-full="" bg-primary="" ${="" ischecked="==" option.id="" ?="" "flex"="" :="" "hidden"="" }`}=""></span></span>{option.label}</label></div>))}</div></div>);
};

export default SelectOptionOne;</string></body></html>