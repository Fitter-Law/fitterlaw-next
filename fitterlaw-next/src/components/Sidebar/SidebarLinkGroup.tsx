"use client";
import { ReactNode, useState } from "react";

interface SidebarLinkGroupProps {
  children: (handleClick: () =&gt; void, open: boolean) =&gt; ReactNode;
  activeCondition: boolean;
}

const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps) =&gt; {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () =&gt; {
    setOpen(!open);
  };

  return<li>{children(handleClick, open)}</li>;
};

export default SidebarLinkGroup;</boolean>