import React, { useState, useRef, useEffect } from "react";

const PopoversTwo: React.FC = () =&gt; {
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
    return () =&gt; document.removeEventListener("click", clickHandler); }); // close if the esc key is pressed useEffect(() =&gt; { const keyHandler = ({ keyCode }: KeyboardEvent) =&gt; { if (!popoversOpen || keyCode !== 27) return; setPopoversOpen(false); }; document.addEventListener("keydown", keyHandler); return () =&gt; document.removeEventListener("keydown", keyHandler); }); return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Popover With Button</h3></div><div classname="p-4 sm:p-5 xl:p-7.5"><div classname="-mx-4 flex flex-wrap"><div classname="w-full px-4 sm:w-1/2 xl:w-1/4"><div classname="mb-60 mt-10"><div classname="relative inline-block"><button ref="{trigger}" onclick="{()" =="">setPopoversOpen(!popoversOpen)} className="inline-flex rounded-md bg-primary px-5 py-2.5 font-medium text-white" &gt; Popover Text</button><div ref="{popovers}" onfocus="{()" =="">setPopoversOpen(true)} onBlur={() =&gt; setPopoversOpen(false)} className={`absolute left-full top-0 z-20 ml-3 w-max max-w-[533px] rounded-md bg-white p-4 font-medium drop-shadow-5 dark:bg-meta-4 sm:p-5 xl:p-7.5 ${ popoversOpen === true ? "block" : "hidden" }`} &gt;<span classname="absolute -left-1 top-4 -z-10 h-2 w-2 rotate-45 rounded-r-sm bg-white dark:bg-meta-4"></span><h4 classname="mb-4 text-title-md font-bold text-black dark:text-white">Do you want to add this?</h4><p classname="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis congue justo nec facilisis. Quisque quis augue ipsum. Aliquam suscipit dui ac dui commodo.</p><p classname="mt-4 font-medium">Quisque quis augue ipsum. Aliquam suscipit dui ac dui.</p><div classname="mt-6 flex items-center gap-4"><button classname="inline-block rounded bg-primary px-7.5 py-1 font-medium text-white hover:bg-opacity-90">Yes</button><button classname="inline-block rounded bg-body px-7.5 py-1 font-medium text-white hover:bg-opacity-90">No</button></div></div></div></div></div></div></div></div>);
};

export default PopoversTwo;</any></any>