<html><head></head><body>import React, { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  text: string;
  selected: boolean;
  element?: HTMLElement;
}

interface DropdownProps {
  id: string;
}

const MultiSelect: React.FC<dropdownprops>= ({ id }) =&gt; {
  const [options, setOptions] = useState<option[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<any>(null);
  const trigger = useRef<any>(null);

  useEffect(() =&gt; {
    const loadOptions = () =&gt; {
      const select = document.getElementById(id) as HTMLSelectElement | null;
      if (select) {
        const newOptions: Option[] = [];
        for (let i = 0; i &lt; select.options.length; i++) {
          newOptions.push({
            value: select.options[i].value,
            text: select.options[i].innerText,
            selected: select.options[i].hasAttribute("selected"),
          });
        }
        setOptions(newOptions);
      }
    };

    loadOptions();
  }, [id]);

  const open = () =&gt; {
    setShow(true);
  };

  const isOpen = () =&gt; {
    return show === true;
  };

  const select = (index: number, event: React.MouseEvent) =&gt; {
    const newOptions = [...options];

    if (!newOptions[index].selected) {
      newOptions[index].selected = true;
      newOptions[index].element = event.currentTarget as HTMLElement;
      setSelected([...selected, index]);
    } else {
      const selectedIndex = selected.indexOf(index);
      if (selectedIndex !== -1) {
        newOptions[index].selected = false;
        setSelected(selected.filter((i) =&gt; i !== index));
      }
    }

    setOptions(newOptions);
  };

  const remove = (index: number) =&gt; {
    const newOptions = [...options];
    const selectedIndex = selected.indexOf(index);

    if (selectedIndex !== -1) {
      newOptions[index].selected = false;
      setSelected(selected.filter((i) =&gt; i !== index));
      setOptions(newOptions);
    }
  };

  const selectedValues = () =&gt; {
    return selected.map((option) =&gt; options[option].value);
  };

  useEffect(() =&gt; {
    const clickHandler = ({ target }: MouseEvent) =&gt; {
      if (!dropdownRef.current) return;
      if (
        !show ||
        dropdownRef.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setShow(false);
    };
    document.addEventListener("click", clickHandler);
    return () =&gt; document.removeEventListener("click", clickHandler);
  });

  return (<div classname="relative z-50"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Multiselect Dropdown</label><div><select classname="hidden" id="{id}"><option value="1">Option 2</option><option value="2">Option 3</option><option value="3">Option 4</option><option value="4">Option 5</option></select><div classname="flex flex-col items-center"><input name="values" type="hidden" defaultvalue="{selectedValues()}"><div classname="relative z-20 inline-block w-full"><div classname="relative flex flex-col items-center"><div ref="{trigger}" onclick="{open}" classname="w-full"><div classname="mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"><div classname="flex flex-auto flex-wrap gap-3">{selected.map((index) =&gt; (<div key="{index}" classname="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30"><div classname="max-w-full flex-initial">{options[index].text}</div><div classname="flex flex-auto flex-row-reverse"><div onclick="{()" =="">remove(index)}
                            className="cursor-pointer pl-2 hover:text-danger"
                          &gt;<svg classname="fill-current" role="button" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" cliprule="evenodd" d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z" fill="currentColor"></path></svg></div></div></div>))}
                    {selected.length === 0 &amp;&amp; (<div classname="flex-1"><input placeholder="Select an option" classname="h-full w-full appearance-none bg-transparent p-1 px-2 outline-none" defaultvalue="{selectedValues()}"></div>)}</div><div classname="flex w-8 items-center py-1 pl-1 pr-1"><button type="button" onclick="{open}" classname="h-6 w-6 cursor-pointer outline-none focus:outline-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.8"><path fillrule="evenodd" cliprule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381"></path></g></svg></button></div></div></div><div classname="w-full px-4"><div classname="{`max-h-select" absolute="" left-0="" top-full="" z-40="" w-full="" overflow-y-auto="" rounded="" bg-white="" shadow="" dark:bg-form-input="" ${="" isopen()="" ?="" ""="" :="" "hidden"="" }`}="" ref="{dropdownRef}" onfocus="{()" =="">setShow(true)}
                  onBlur={() =&gt; setShow(false)}
                &gt;<div classname="flex w-full flex-col">{options.map((option, index) =&gt; (<div key="{index}"><div classname="w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark" onclick="{(event)" =="">select(index, event)}
                        &gt;<div classname="{`relative" flex="" w-full="" items-center="" border-l-2="" border-transparent="" p-2="" pl-2="" ${="" option.selected="" ?="" "border-primary"="" :="" ""="" }`}=""><div classname="flex w-full items-center"><div classname="mx-2 leading-6">{option.text}</div></div></div></div></div>))}</div></div></div></div></div></div></div></div>);
};

export default MultiSelect;</any></any></number[]></option[]></dropdownprops></body></html>