<html><head></head><body>import { useState } from "react";

const CheckboxFour = () =&gt; {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (<div><label htmlfor="checkboxLabelFour" classname="flex cursor-pointer select-none items-center"><div classname="relative"><input type="checkbox" id="checkboxLabelFour" classname="sr-only" onchange="{()" =="">{
              setIsChecked(!isChecked);
            }}
          /&gt;<div classname="{`mr-4" flex="" h-5="" w-5="" items-center="" justify-center="" rounded-full="" border="" ${="" ischecked="" &&="" "border-primary"="" }`}=""><span classname="{`h-2.5" w-2.5="" rounded-full="" bg-transparent="" ${="" ischecked="" &&="" "!bg-primary"="" }`}="">{" "}</span></div></div>Checkbox Text</label></div>);
};

export default CheckboxFour;</boolean></body></html>