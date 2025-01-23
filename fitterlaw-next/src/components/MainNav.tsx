import React from 'react';
import Link from 'next/link';

const MainNav = () =&gt; {
  const menuItems = [
    { title: 'Log In', path: '/login' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Insight', path: '/insight' },
    { 
      title: 'About Us',
      path: '/about',
      subItems: [
        { title: 'About The Firm', path: '/about' },
        { title: 'Practice Areas', path: '/about/practice-areas' },
        { title: 'Privacy Policy', path: '/about-us/terms-of-service/privacy-policy' },
        { title: 'Contact Us', path: '/contact-us' }
      ]
    }
  ];

  return (<nav className="w-full"><ul className="flex flex-wrap items-center gap-5.5">{menuItems.map((item) =&gt; (<li key="{item.path}" className="group relative"><link href="{item.path}" className="text-sm font-medium text-black hover:text-primary dark:text-white">{item.title} {item.subItems &amp;&amp; (<svg className="inline-block ml-1 w-4 h-4" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"></path></svg>)} {item.subItems &amp;&amp; (<ul className="invisible absolute left-0 top-full z-40 mt-2 w-[230px] rounded-lg bg-white p-4 shadow-md transition-all group-hover:visible dark:bg-boxdark">{item.subItems.map((subItem) =&gt; (<li key="{subItem.path}"><link href="{subItem.path}" className="block rounded py-2 px-4 text-sm hover:bg-primary/5 dark:hover:bg-meta-4">{subItem.title}</li>))}</ul>)}</li>))}</ul></nav>);
};

export default MainNav;