import React from "react";

interface ColumnFilterProps {
  column: {
    filterValue: string;
    setFilter: (value: string) =&gt; void;
  };
}

const ColumnFilter: React.FC<columnfilterprops>= ({ column }) =&gt; {
  const { filterValue, setFilter } = column;

  return (<div classname="mt-2.5 w-full"><input type="text" value="{filterValue" ||="" ""}="" onchange="{(e)" =="">setFilter(e.target.value)} onClick={(e) =&gt; e.stopPropagation()} className="w-full rounded-md border border-stroke px-3 py-1 outline-none focus:border-primary" /&gt;</div>);
};

export default ColumnFilter;</columnfilterprops>