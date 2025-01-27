import React from "react";

interface VideosItemProps {
  title: string;
  embeds?: boolean;
  aspectOne?: boolean;
  aspectFour?: boolean;
  aspectTwentyOne?: boolean;
}

const VideosItem: React.FC<videositemprops>= ({
  title,
  embeds,
  aspectOne,
  aspectFour,
  aspectTwentyOne,
}) =&gt; {
  return (<div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div className="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 className="font-medium text-black dark:text-white">{title}</h3></div><div className="p-4 sm:p-6 xl:p-10"><iframe className="{`w-full" ${embeds="" &&="" "aspect-video"}="" ${aspectone="" "aspect-square"}="" ${aspectfour="" "aspect-4="" 3"}="" ${aspecttwentyone="" "aspect-21="" 9"}="" `}="" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe></div></div>);
};

export default VideosItem;</videositemprops>