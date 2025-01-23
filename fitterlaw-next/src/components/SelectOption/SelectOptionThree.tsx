<html><head></head><body>"use client";
import React, { useState } from "react";

interface Language {
  id: string;
  name: string;
}

const languages: Language[] = [
  { id: "C", name: "C" },
  { id: "C++", name: "C++" },
  { id: "Java", name: "Java" },
  { id: "Python", name: "Python" },
  { id: "JavaScript", name: "JavaScript" },
  { id: "React", name: "React" },
  { id: "Angular", name: "Angular" },
];

const CheckboxInputGroup: React.FC&lt;{
  id: string;
  isChecked: boolean;
  onChange: () =&gt; void;
}&gt; = ({ id, isChecked, onChange }) =&gt; (<div><label classname="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black dark:text-white"><input classname="sr-only" type="checkbox" name="roleSelect" id="{id}" checked="{isChecked}" onchange="{onChange}"><span classname="{`flex" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="" ?="" "border-primary"="" :="" "border-body"="" }`}=""><span classname="{`h-2.5" w-2.5="" rounded-full="" bg-primary="" ${="" ischecked="" ?="" "flex"="" :="" "hidden"="" }`}=""></span></span>{id}</label></div>);

const SelectOptionThree: React.FC = () =&gt; {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (id: string) =&gt; {
    setSelectedLanguages((prevSelectedLanguages) =&gt; {
      if (prevSelectedLanguages.includes(id)) {
        // Deselect the language if it's already selected
        return prevSelectedLanguages.filter((lang) =&gt; lang !== id);
      } else {
        // Select the language if it's not selected
        return [...prevSelectedLanguages, id];
      }
    });
  };

  return (<div classname="mb-6"><label classname="mb-4.5 block text-sm font-medium text-black dark:text-white">Which languages &amp; frameworks you know?</label><div classname="flex flex-col gap-2.5">{languages.map((language) =&gt; (<checkboxinputgroup key="{language.id}" id="{language.id}" ischecked="{selectedLanguages.includes(language.id)}" onchange="{()" =="">handleLanguageChange(language.id)}
          /&gt;
        ))}</checkboxinputgroup></div></div>);
};

export default SelectOptionThree;</string[]></body></html>