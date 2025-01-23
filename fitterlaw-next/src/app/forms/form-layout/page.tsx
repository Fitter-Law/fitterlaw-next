import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormLayout = () =&gt; {
  return (<defaultlayout><breadcrumb pagename="FormLayout"><div classname="grid grid-cols-1 gap-9 sm:grid-cols-2"><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Contact Form</h3></div><form action="#"><div classname="p-6.5"><div classname="mb-4.5 flex flex-col gap-6 xl:flex-row"><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">First name</label><input type="text" placeholder="Enter your first name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="w-full xl:w-1/2"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Last name</label><input type="text" placeholder="Enter your last name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div></div><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Email<span classname="text-meta-1">*</span></label><input type="email" placeholder="Enter your email address" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Subject</label><input type="text" placeholder="Select subject" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><selectgroupone><div classname="mb-6"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Message</label><textarea rows="{6}" placeholder="Type your message" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea></div><button classname="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">Send Message</button></selectgroupone></div></form></div></div><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Sign In Form</h3></div><form action="#"><div classname="p-6.5"><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Email</label><input type="email" placeholder="Enter your email address" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Password</label><input type="password" placeholder="Enter password" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-5.5 mt-5 flex items-center justify-between"><label htmlfor="formCheckbox" classname="flex cursor-pointer"><div classname="relative pt-0.5"><input type="checkbox" id="formCheckbox" classname="taskCheckbox sr-only"><div classname="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark"><span classname="text-white opacity-0"><svg classname="fill-current" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" cliprule="evenodd" d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z" fill=""></path></svg></span></div></div><p>Remember me</p></label><link href="#" classname="text-sm text-primary hover:underline">Forget password?</div><button classname="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">Sign In</button></div></form></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Sign Up Form</h3></div><form action="#"><div classname="p-6.5"><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Name</label><input type="text" placeholder="Enter your full name" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Email</label><input type="email" placeholder="Enter your email address" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-4.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Password</label><input type="password" placeholder="Enter password" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div classname="mb-5.5"><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Re-type Password</label><input type="password" placeholder="Re-enter password" classname="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><button classname="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">Sign Up</button></div></form></div></div></div></breadcrumb></defaultlayout>);
};

export default FormLayout;