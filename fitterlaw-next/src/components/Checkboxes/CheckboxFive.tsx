import { useState } from "react";

const CheckboxFive = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelFive" classname="flex cursor-pointer select-none items-center"><div classname="relative"><input type="checkbox" id="checkboxLabelFive" classname="sr-only" onchange="{()" =="">{ setIsChecked(!isChecked); }} /&gt;<div classname="{`box" mr-4="" flex="" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" border-primary="" ${="" ischecked="" &&="" "!border-4"="" }`}=""><span classname="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span></div></div>Checkbox Text</label></div>);
};

export default CheckboxFive;</boolean>