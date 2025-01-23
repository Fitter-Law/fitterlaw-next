import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) =&gt; {
  return (<div classname="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><h2 classname="text-title-md2 font-semibold text-black dark:text-white">{pageName}</h2><nav><ol classname="flex items-center gap-2"><li><link classname="font-medium" href="/">Dashboard /</li><li classname="font-medium text-primary">{pageName}</li></ol></nav></div>);
};

export default Breadcrumb;