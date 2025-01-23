<html><head></head><body>import { useState } from "react";

const SwitcherFour = () =&gt; {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (<div><label htmlfor="toggle4" classname="flex cursor-pointer select-none items-center"><div classname="relative"><input type="checkbox" id="toggle4" classname="sr-only" onchange="{()" =="">{
              setEnabled(!enabled);
            }}
          /&gt;<div classname="block h-8 w-14 rounded-full bg-black"></div><div classname="{`absolute" left-1="" top-1="" flex="" h-6="" w-6="" items-center="" justify-center="" rounded-full="" bg-white="" transition="" ${="" enabled="" &&="" "!right-1="" !translate-x-full"="" }`}=""></div></div></label></div>);
};

export default SwitcherFour;</boolean></body></html>