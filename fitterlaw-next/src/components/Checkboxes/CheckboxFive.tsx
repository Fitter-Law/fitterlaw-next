import { useState } from "react";

const CheckboxFive = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelFive" className="flex cursor-pointer select-none items-center"><div className="relative"><input type="checkbox" id="checkboxLabelFive" className="sr-only" onchange="{()" =="">{ setIsChecked(!isChecked); }} /&gt;<div className="{`box" mr-4="" flex="" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" border-primary="" ${="" ischecked="" &&="" "!border-4"="" }`}=""><span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"></span></div></div>Checkbox Text</label></div>);
};

export default CheckboxFive;</boolean>