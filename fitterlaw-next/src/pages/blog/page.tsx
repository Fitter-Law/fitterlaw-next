import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

interface Post {
 title: string;
 slug: string;
 date: string;
 excerpt?: string;
}

export default function BlogPage() {
 const posts: Post[] = [
    {
      title: "Who is the best lawyer for my type of business?",
      slug: "who-is-the-best-attorney-for-my-type-of-business",
      date: "2019-06-26",
      excerpt: "<hr class="\&quot;wp-block-separator" is-style-wide\"=""><p>Welcome to this learning session on<strong>Legal Contracts in..."
    },
    {
      title: "Corporation Startup Legal Documents",
      slug: "corporation-startup-legal-documents",
      date: "2024-12-08",
      excerpt: "</strong></p><h2><strong>Corporate Formation Templates</strong></h2><strong><a href="\&quot;https://fitterlaw.com/subscription/legal-guides/understanding-corporations/\&quot;">Learn ..."
    },
    {
      title: "Understanding Corporations",
      slug: "understanding-corporations",
      date: "2024-12-08",
      excerpt: "<h2>Understanding Corporations:<br>A Comprehensive Guide</h2></a><a href="\&quot;https://fitterlaw.com/subscription/templates/starting-a-business/corp...&quot;" },="" {="" title:="" "fiduciary="" duties:="" the="" essential="" guide="" for="" startup="" founders="" and="" executives",="" slug:="" "fiduciary-duties-the-essential-guide-for-startup-founders-and-executives",="" date:="" "2024-12-27",="" excerpt:="" "as="" an="" entrepreneur="" or="" corporate="" leader,="" understanding="" fiduciary="" duties="" is="" critical="" sound="" governance="" protecting="" your="" company="" from="" legal="" risks.="" in="" this="" article,="" we'll="" dive="" into="" what="" are,="" two="" main="" types="" of="" duties,="" best="" practices="" to="" ensure="" you="" board="" are="" fulfilling="" obligations."="" "corporate="" "corporate-governance-best-practices-for-startup-founders-and-executives",="" may="" not="" be="" most="" exciting="" topic="" entrepreneurs,="" but="" it's="" a="" foundation="" any="" successful="" business.="" getting="" right="" can="" help="" attract="" investors,="" make="" better="" decisions,="" avoid="" costly="" pitfalls.="" explore="" some="" that="" every="" founder="" executive="" should="" know."="" "understanding="" business="" judgment="" rule:="" entrepreneurs",="" "understanding-the-business-judgment-rule-a-guide-for-entrepreneurs",="" entrepreneur,="" high-stakes="" decisions="" day.="" you're="" constantly="" weighing="" risks="" opportunities,="" trying="" chart="" path="" forward="" lot="" responsibility,="" it="" daunting="" think="" about="" ramifications="" choices.="" if="" something="" goes="" wrong?="" could="" held="" personally="" liable?"="" "shielding="" directors:="" exculpation,="" indemnification,="" d&o="" insurance",="" "shielding-directors-exculpation-indemnification-and-do-insurance",="" directors="" take="" on="" enormous="" responsibilities="" when="" they="" join="" board.="" they're="" tasked="" with="" steering="" company's="" strategy,="" overseeing="" risk="" management,="" keeping="" watchful="" eye="" management="" team.="" things="" go="" well,="" rarely="" get="" credit.="" wrong,="" find="" themselves="" crosshairs="" angry="" shareholders,="" regulators,="" prosecutors."="" "corporation="" bylaws",="" "corporation-bylaws",="" "2024-12-31",="" "<h2="">Corporation ByLaws</a><a href="\&quot;https://fitterlaw.com/subscription/legal-guides/understanding-corporations/\&quot;">Learn About Corpo..."
    },
    {
      title: "2024 YE Recap for Artificial Intelligence",
      slug: "2024-ye-recap-for-artificial-intelligence",
      date: "2025-01-08",
      excerpt: "<h2>2024 Year-End AI Recap</h2></a><a href="\&quot;https://fitterlaw.com/subscription/templates/starting-a-business/corporation/corporation-startup-leg...&quot;" },="" {="" title:="" "new="" laws="" starting="" in="" illinois="" 2025",="" slug:="" "2024-ye-recap-for-artificial-intelligence-cloned-13802",="" date:="" "2025-01-08",="" excerpt:="" "<h1="">Illinois Law 2025 Updates</a><a href="\&quot;https://fitterlaw.com/subscription/templates/starting-a-business/corporation/corporation-startup-...&quot;" },="" {="" title:="" "key="" ai="" laws="" taking="" effect="" in="" 2025",="" slug:="" "key-ai-laws-taking-effect-in-2025",="" date:="" "2025-01-08",="" excerpt:="" "<h2="">Key AI Laws Taking Effect in 2025</a><a href="\&quot;https://fitterlaw.com/subscription/templates/starting-a-business/corporation/corporation-...&quot;" },="" {="" title:="" "understanding="" contract="" breaches="" and="" defenses:="" a="" guide="" for="" small="" business="" owners",="" slug:="" "understanding-contract-breaches-and-defenses-a-guide-for-small-business-owners",="" date:="" "2025-01-14",="" excerpt:="" "<h2="">Corporate Formation Templates</a><a href="\&quot;https://fitterlaw.com/subscription/legal-guides/understanding-corporations/\&quot;">Learn ..."
    }
  ];

  return (<DefaultLayout></DefaultLayout></a><div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"><a href="\&quot;https://fitterlaw.com/subscription/legal-guides/understanding-corporations/\&quot;"><h1 className="mb-4 text-title-md2 font-bold text-black dark:text-white">Blog</h1></a><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><a href="\&quot;https://fitterlaw.com/subscription/legal-guides/understanding-corporations/\&quot;">{posts.map((post) =&gt; (</a><a key="{post.slug}" href="{`/blog/${post.slug}`}" className="block"><div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark"><h2 className="mb-2 text-lg font-semibold text-black dark:text-white">{post.title}</h2><p className="mb-4 text-sm text-body dark:text-bodydark">{new Date(post.date).toLocaleDateString()}</p>{post.excerpt &amp;&amp; (<p className="text-sm">{post.excerpt}</p>)}</div></a>))}</div></div>);
}</strong>