import { useState } from "react";

const CheckboxOne = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelOne" classname="flex cursor-pointer select-none items-center"><div classname="relative"><input type="checkbox" id="checkboxLabelOne" classname="sr-only" onchange="{()" =="">{ setIsChecked(!isChecked); }} /&gt;<div classname="{`mr-4" flex="" h-5="" w-5="" items-center="" justify-center="" rounded="" border="" ${="" ischecked="" &&="" "border-primary="" bg-gray="" dark:bg-transparent"="" }`}=""><span classname="{`h-2.5" w-2.5="" rounded-sm="" ${ischecked="" &&="" "bg-primary"}`}=""></span></div></div>Checkbox Text</label></div>);
};

export default CheckboxOne;</boolean>