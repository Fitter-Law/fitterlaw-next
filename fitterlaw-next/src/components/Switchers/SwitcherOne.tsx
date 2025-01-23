import { useState } from "react";

const SwitcherOne = () =&gt; {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (<div><label htmlfor="toggle1" className="flex cursor-pointer select-none items-center"><div className="relative"><input type="checkbox" id="toggle1" className="sr-only" onchange="{()" =="">{ setEnabled(!enabled); }} /&gt;<div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div><div className="{`absolute" left-1="" top-1="" h-6="" w-6="" rounded-full="" bg-white="" transition="" ${="" enabled="" &&="" "!right-1="" !translate-x-full="" !bg-primary="" dark:!bg-white"="" }`}=""></div></div></label></div>);
};

export default SwitcherOne;</boolean>