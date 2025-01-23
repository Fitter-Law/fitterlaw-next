"use client";
import React, { useState } from "react";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "Yes", label: "Yes" },
  { id: "No", label: "No" },
  { id: "Maybe", label: "Maybe" },
];

const SelectOptionTwo: React.FC = () =&gt; {
  const [isChecked, setIsChecked] = useState<string>("");

  const handleRadioChange = (value: string) =&gt; {
    setIsChecked(value);
  };

  return (<div className="mb-5.5"><label htmlfor="recommend" className="mb-4.5 block text-sm font-medium text-black dark:text-white">Would you recommend our site to a friend?</label><div className="flex flex-col gap-2.5">{options.map((option) =&gt; (<div key="{option.id}"><label className="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white"><input className="sr-only" type="radio" name="recommend" id="{option.id}" onchange="{()" =="">handleRadioChange(option.id)} /&gt;<span className="{`flex" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="==" option.id="" ?="" "border-primary"="" :="" "border-body"="" }`}=""><span className="{`h-2.5" w-2.5="" rounded-full="" bg-primary="" ${="" ischecked="==" option.id="" ?="" "flex"="" :="" "hidden"="" }`}=""></span></span>{option.label}</label></div>))}</div></div>);
};

export default SelectOptionTwo;</string>