import React from "react";
import Start from "../Start";

const InboxList: React.FC = () =&gt; {
  return (<table classname="h-full w-full table-auto"><thead><tr classname="flex border-y border-stroke dark:border-strokedark"><th classname="w-[65%] py-6 pl-4 pr-4 lg:pl-10 xl:w-1/4"><label htmlfor="checkbox-1" classname="flex cursor-pointer select-none items-center font-medium"><div classname="relative"><input type="checkbox" id="checkbox-1" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div>Sender</label></th><th classname="hidden w-3/5 px-4 py-6 xl:block"><p classname="text-left font-medium">Subject</p></th><th classname="w-[35%] py-6 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right font-medium">Date</p></th></tr></thead><tbody classname="block h-full max-h-full overflow-auto py-4"><tr classname="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2"><td classname="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4"><div classname="flex items-center"><label htmlfor="checkbox-2" classname="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"><div classname="relative"><input type="checkbox" id="checkbox-2" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div></label><span classname="pr-3"><start></start></span>Musharof Chowdhury</div></td><td classname="hidden w-3/5 p-4 xl:block"><p>Some note &amp; Lorem Ipsum available alteration in some form.</p></td><td classname="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right text-xs xl:text-base">17 Oct, 2024</p></td></tr><tr classname="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2"><td classname="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4"><div classname="flex items-center"><label htmlfor="checkbox-3" classname="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"><div classname="relative"><input type="checkbox" id="checkbox-3" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div></label><span classname="pr-3"><start></start></span>Naimur Rahman</div></td><td classname="hidden w-3/5 p-4 xl:block"><p>Lorem Ipsum available alteration in some form.</p></td><td classname="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right text-xs xl:text-base">25 Nov, 2024</p></td></tr><tr classname="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2"><td classname="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4"><div classname="flex items-center"><label htmlfor="checkbox-4" classname="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"><div classname="relative"><input type="checkbox" id="checkbox-4" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div></label><span classname="pr-3"><start></start></span>Juhan Ahamed</div></td><td classname="hidden w-3/5 p-4 xl:block"><p>Lorem Ipsum available alteration in some form.</p></td><td classname="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right text-xs xl:text-base">25 Nov, 2024</p></td></tr><tr classname="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2"><td classname="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4"><div classname="flex items-center"><label htmlfor="checkbox-5" classname="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"><div classname="relative"><input type="checkbox" id="checkbox-5" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div></label><span classname="pr-3"><start></start></span>Mahbub Hasan</div></td><td classname="hidden w-3/5 p-4 xl:block"><p>Lorem Ipsum available alteration in some form.</p></td><td classname="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right text-xs xl:text-base">19 Dec, 2024</p></td></tr><tr classname="flex cursor-pointer items-center hover:bg-whiten dark:hover:bg-boxdark-2"><td classname="w-[65%] py-4 pl-4 pr-4 lg:pl-10 xl:w-1/4"><div classname="flex items-center"><label htmlfor="checkbox-6" classname="flex cursor-pointer select-none items-center text-sm font-medium sm:text-base"><div classname="relative"><input type="checkbox" id="checkbox-6" classname="tableCheckbox sr-only"><div classname="box mr-4 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] border-stroke bg-gray-2 text-white dark:border-strokedark dark:bg-boxdark-2"><span classname="opacity-0"><svg width="14" height="14" viewBox="0 0 10 10"><path fillrule="evenodd" cliprule="evenodd" d="M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z" fill="currentColor"></path></svg></span></div></div></label><span classname="pr-3"><start></start></span>Shafiq Hammad</div></td><td classname="hidden w-3/5 p-4 xl:block"><p>Lorem Ipsum available alteration in some form.</p></td><td classname="w-[35%] py-4 pl-4 pr-4 lg:pr-10 xl:w-[20%]"><p classname="text-right text-xs xl:text-base">20 Dec, 2024</p></td></tr></tbody></table>);
};

export default InboxList;