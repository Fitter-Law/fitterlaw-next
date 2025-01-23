import React, { useState, useRef, useEffect } from "react";

const PopoversBottom: React.FC = () =&gt; {
  const [popoversOpen, setPopoversOpen] = useState(false);

  const trigger = useRef<any>(null);
  const popovers = useRef<any>(null);

  // close on click outside
  useEffect(() =&gt; {
    const clickHandler = ({ target }: MouseEvent) =&gt; {
      if (!popovers.current) return;
      if (
        !popoversOpen ||
        popovers.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setPopoversOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () =&gt; document.removeEventListener("click", clickHandler); }); // close if the esc key is pressed useEffect(() =&gt; { const keyHandler = ({ keyCode }: KeyboardEvent) =&gt; { if (!popoversOpen || keyCode !== 27) return; setPopoversOpen(false); }; document.addEventListener("keydown", keyHandler); return () =&gt; document.removeEventListener("keydown", keyHandler); }); return (<div classname="w-full px-4 sm:w-1/2 xl:w-1/4"><div classname="mt-10 text-center sm:mb-60"><div classname="relative inline-block"><button ref="{trigger}" onclick="{()" =="">setPopoversOpen(!popoversOpen)} className="inline-flex rounded-md bg-primary px-5 py-2.5 font-medium text-white" &gt; Popover on Bottom</button><div ref="{popovers}" onfocus="{()" =="">setPopoversOpen(true)} onBlur={() =&gt; setPopoversOpen(false)} className={`absolute left-1/2 top-full z-20 mt-3 w-max max-w-[311px] -translate-x-1/2 rounded bg-white drop-shadow-5 dark:bg-meta-4 ${ popoversOpen === true ? "block" : "hidden" }`} &gt;<span classname="absolute -top-1.5 left-1/2 -z-10 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm bg-white dark:bg-meta-4"></span><div classname="border-b border-stroke p-3 dark:border-strokedark"><h4 classname="text-center text-title-sm font-semibold text-black dark:text-white">Popover Title</h4></div><div classname="px-5 py-4.5 text-center"><p classname="font-medium">Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris facilisis congue exclamate justo nec facilisis.</p></div></div></div></div></div>);
};

export default PopoversBottom;</any></any>