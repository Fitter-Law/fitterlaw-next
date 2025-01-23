"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import MultiSelect from "@/components/FormElements/MultiSelect";
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";

const FormElements = () =&gt; {
  return (&lt;&gt;<breadcrumb pagename="FormElements"><div classname="grid grid-cols-1 gap-9 sm:grid-cols-2"><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Input Fields</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Default Input</label><input type="text" placeholder="Default Input" classname="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Active Input</label><input type="text" placeholder="Active Input" classname="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Disabled label</label><input type="text" placeholder="Disabled label" disabled="" classname="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"></div></div></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Toggle switch input</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><switcherone><switchertwo><switcherthree><switcherfour></switcherfour></switcherthree></switchertwo></switcherone></div></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Time and date</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><datepickerone><datepickertwo></datepickertwo></datepickerone></div></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">File upload</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Attach file</label><input type="file" classname="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Attach file</label><input type="file" classname="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"></div></div></div></div><div classname="flex flex-col gap-9">{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Textarea Fields</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Default textarea</label><textarea rows="{6}" placeholder="Default textarea" classname="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Active textarea</label><textarea rows="{6}" placeholder="Active textarea" classname="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"></textarea></div><div><label classname="mb-3 block text-sm font-medium text-black dark:text-white">Disabled textarea</label><textarea rows="{6}" disabled="" placeholder="Disabled textarea" classname="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"></textarea></div></div></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Checkbox and radio</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><checkboxone><checkboxtwo><checkboxthree><checkboxfour><checkboxfive></checkboxfive></checkboxfour></checkboxthree></checkboxtwo></checkboxone></div></div>{/**/}<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-6.5 py-4 dark:border-strokedark"><h3 classname="font-medium text-black dark:text-white">Select input</h3></div><div classname="flex flex-col gap-5.5 p-6.5"><selectgrouptwo><multiselect id="multiSelect"></multiselect></selectgrouptwo></div></div></div></div>);
};

export default FormElements;</breadcrumb>