import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const Calendar = () =&gt; {
  return (<div classname="mx-auto max-w-7xl"><breadcrumb pagename="Calendar">{/**/}<div classname="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">{/* */} {/* */} {/* */} {/* */} {/* */} {/* */} {/* */} {/* */} {/* */} {/* */}<table classname="w-full"><thead><tr classname="grid grid-cols-7 rounded-t-sm bg-primary text-white"><th classname="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Sunday</span><span classname="block lg:hidden">Sun</span></th><th classname="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Monday</span><span classname="block lg:hidden">Mon</span></th><th classname="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Tuesday</span><span classname="block lg:hidden">Tue</span></th><th classname="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Wednesday</span><span classname="block lg:hidden">Wed</span></th><th classname="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Thursday</span><span classname="block lg:hidden">Thur</span></th><th classname="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Friday</span><span classname="block lg:hidden">Fri</span></th><th classname="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5"><span classname="hidden lg:block">Saturday</span><span classname="block lg:hidden">Sat</span></th></tr></thead><tbody><tr classname="grid grid-cols-7"><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">1</span><div classname="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30"><span classname="group-hover:text-primary md:hidden">More</span><div classname="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100"><span classname="event-name text-sm font-semibold text-black dark:text-white">Redesign Website</span><span classname="time text-sm font-medium text-black dark:text-white">1 Dec - 2 Dec</span></div></div></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">2</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">3</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">4</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">5</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">6</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">7</span></td></tr><tr classname="grid grid-cols-7"><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">8</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">9</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">10</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">11</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">12</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">13</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">14</span></td></tr><tr classname="grid grid-cols-7"><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">15</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">16</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">17</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">18</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">19</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">20</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">21</span></td></tr><tr classname="grid grid-cols-7"><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">22</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">23</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">24</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">25</span><div classname="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30"><span classname="group-hover:text-primary md:hidden">More</span><div classname="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100"><span classname="event-name text-sm font-semibold text-black dark:text-white">App Design</span><span classname="time text-sm font-medium text-black dark:text-white">25 Dec - 27 Dec</span></div></div></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">26</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">27</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">28</span></td></tr><tr classname="grid grid-cols-7"><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">29</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">30</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">31</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">1</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">2</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">3</span></td><td classname="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"><span classname="font-medium text-black dark:text-white">4</span></td></tr></tbody></table></div>{/**/}</breadcrumb></div>);
};

export default Calendar;