<html><head></head><body>import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  author: string;
 }
 
 const BlogLayout = ({ children, title, date, author }: BlogLayoutProps) =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="px-4 py-6 md:px-6 xl:px-7.5"><h2 classname="text-title-lg font-bold text-black dark:text-white">{title}</h2>{(date || author) &amp;&amp; (<div classname="mt-2.5 flex flex-wrap items-center gap-4.5">{date &amp;&amp; (<div classname="flex items-center gap-2"><span classname="text-sm font-medium text-black dark:text-white">{new Date(date).toLocaleDateString()}</span></div>)}
            {author &amp;&amp; (<div classname="flex items-center gap-2"><span classname="text-sm font-medium text-black dark:text-white">By {author}</span></div>)}</div>)}<div classname="prose dark:prose-invert max-w-none mt-4">{children}</div></div></div>);
};

export default BlogLayout;</body></html>