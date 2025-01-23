import { useState } from "react";

const CheckboxFour = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelFour" className="flex cursor-pointer select-none items-center"><div className="relative"><input type="checkbox" id="checkboxLabelFour" className="sr-only" onchange="{()" =="">{ setIsChecked(!isChecked); }} /&gt;<div className="{`mr-4" flex="" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="" &&="" "border-primary"="" }`}=""><span className="{`h-2.5" w-2.5="" rounded-full="" bg-transparent="" ${="" ischecked="" &&="" "!bg-primary"="" }`}="">{" "}</span></div></div>Checkbox Text</label></div>);
};

export default CheckboxFour;</boolean>