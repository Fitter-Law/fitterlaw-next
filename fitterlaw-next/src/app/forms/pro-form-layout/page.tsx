import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectOptionOne from "@/components/SelectOption/SelectOptionOne";
import SelectGroupThree from "@/components/SelectGroup/SelectGroupThree";
import SelectOptionTwo from "@/components/SelectOption/SelectOptionTwo";
import SelectOptionThree from "@/components/SelectOption/SelectOptionThree";

export const metadata: Metadata = {
  title: "Next.js Pro Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Pro Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ProFormLayout = () =&gt; {
  return (<DefaultLayout><breadcrumb pagename="Pro Form Layout"><div classname="grid grid-cols-1 gap-9 sm:grid-cols-2"><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Contact Form 2</h3></div><form action="#"><div classname="p-6.5"><div classname="mb-5 flex flex-col gap-6 xl:flex-row"><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">First name</label><input type="text" placeholder="Enter your first name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Last name</label><input type="text" placeholder="Enter your last name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div></div><div classname="mb-5.5 flex flex-col gap-6 xl:flex-row"><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Email</label><input type="email" placeholder="yourmail@gmail.com" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Phone</label><input type="text" placeholder="(321) 5555-0115" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div></div><selectoptionone><div classname="mb-6"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Message</label><textarea rows="{6}" placeholder="Type your message" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea></div><button classname="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">Send Message</button></selectoptionone></div></form></div></div><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Survey Form</h3></div><form action="#"><div classname="p-6.5"><div classname="mb-5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Name</label><input type="text" placeholder="Enter your full name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Email</label><input type="email" placeholder="Enter your email address" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Age</label><input type="text" placeholder="Enter your age" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><selectgroupthree><selectoptiontwo><selectoptionthree><div classname="mb-5.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Any comments or suggestions?</label><textarea rows="{6}" placeholder="Type here" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea></div><button classname="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">Send Message</button></selectoptionthree></selectoptiontwo></selectgroupthree></div></form></div></div></div></breadcrumb></DefaultLayout>);
};

export default ProFormLayout;