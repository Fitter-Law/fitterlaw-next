import { useState } from "react";

const CheckboxThree = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelThree" className="flex cursor-pointer select-none items-center"><div className="relative"><input type="checkbox" id="checkboxLabelThree" className="sr-only" onchange="{()" =="">{ setIsChecked(!isChecked); }} /&gt;<div className="{`box" mr-4="" flex="" h-5="" w-5="" items-center="" justify-center="" rounded="" border="" ${="" ischecked="" &&="" "border-primary="" bg-gray="" dark:bg-transparent"="" }`}=""><span className="{`text-primary" opacity-0="" ${="" ischecked="" &&="" "!opacity-100"="" }`}=""><svg className="h-3.5 w-3.5 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></span></div></div>Checkbox Text</label></div>);
};

export default CheckboxThree;</boolean>