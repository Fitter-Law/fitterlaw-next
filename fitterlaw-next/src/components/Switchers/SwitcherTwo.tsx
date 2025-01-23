<html><head></head><body>import { useState } from "react";

const SwitcherTwo = () =&gt; {
  const [enabled, setEnabled] = useState(false);

  return (<div x-data="{ switcherToggle: false }"><label htmlfor="toggle2" classname="flex cursor-pointer select-none items-center"><div classname="relative"><input id="toggle2" type="checkbox" classname="sr-only" onchange="{()" =="">{
              setEnabled(!enabled);
            }}
          /&gt;<div classname="h-5 w-14 rounded-full bg-meta-9 shadow-inner dark:bg-[#5A616B]"></div><div classname="{`dot" absolute="" -top-1="" left-0="" h-7="" w-7="" rounded-full="" bg-white="" shadow-switch-1="" transition="" ${="" enabled="" &&="" "!right-0="" !translate-x-full="" !bg-primary="" dark:!bg-white"="" }`}=""></div></div></label></div>);
};

export default SwitcherTwo;</body></html>