import React, { useState } from "react";
import AccordionItemTwo from "./AccordionItemTwo";
import { FAQ } from "@/types/faq";

const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.`;

const faqs: FAQ[] = [
  {
    id: 1,
    header: `Can I use TailGrids Pro for my clients projects?`,
    text,
  },
  {
    id: 2,
    header: `Which license type is suitable for me?`,
    text,
  },
  {
    id: 3,
    header: `Is Windy UI Well-documented?`,
    text,
  },
  {
    id: 4,
    header: `Do you provide support?`,
    text,
  },
];

const AccordionTwo: React.FC = () =&gt; {
  const [active, setActive] = useState<number |="" null="">(null);

  const handleToggle = (index: number) =&gt; {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">Accordions Style 2</h3></div><div className="p-4 sm:p-6 xl:p-12.5"><div className="flex flex-col gap-7.5">{faqs.map((faq) =&gt; { return (<accordionitemtwo key="{faq.id}" active="{active}" handletoggle="{handleToggle}" faq="{faq}">); })}</accordionitemtwo></div></div></div>);
};

export default AccordionTwo;</number>