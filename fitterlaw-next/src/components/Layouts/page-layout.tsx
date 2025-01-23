<html><head></head><body>import React, { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string; // Optional if not always present
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) =&gt; {
  return (<div classname="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"><breadcrumb pagename="{title}"><div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="px-4 py-6 md:px-6 xl:px-7.5"><h1 classname="text-title-xl2 font-bold text-black dark:text-white">{title}</h1>{subtitle &amp;&amp; (<p classname="mt-2.5 text-lg text-body dark:text-bodydark">{subtitle}</p>)}<div classname="prose dark:prose-invert max-w-none mt-6">{children}</div></div></div></breadcrumb></div>);
};

export default PageLayout;</body></html>