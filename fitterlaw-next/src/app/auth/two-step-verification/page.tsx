import React from "react";
import Image from "next/image";
import Link from "next/link";

const TwoStepVerification: React.FC = () =&gt; {
  return (<div classname="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8"><div classname="flex h-screen flex-col items-center justify-center overflow-hidden"><div classname="no-scrollbar overflow-y-auto py-20"><div classname="mx-auto w-full max-w-[480px]"><div classname="text-center"><link href="/" classname="mx-auto mb-10 inline-flex"><img width="{176}" height="{32}" src="{&quot;/images/logo/logo-dark.svg&quot;}" alt="Logo" priority="" classname="dark:hidden"><img width="{176}" height="{32}" src="{&quot;/images/logo/logo.svg&quot;}" alt="Logo" priority="" classname="hidden dark:block"><div classname="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5"><h1 classname="mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white">Verify Your Account</h1><p classname="mb-7.5 font-medium">Enter the 4 digit code sent to the registered email id.</p><form><div classname="flex items-center gap-4.5">{Array.from({ length: 4 }).map((_, index) =&gt; (<input key="{index}" type="text" classname="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 text-center text-2xl font-medium text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">))}</div><p classname="mb-5 mt-4 text-left font-medium text-black dark:text-white">Did not receive a code?<button classname="text-primary">Resend</button></p><button classname="flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">Verify</button><span classname="mt-5 block text-red">Don’t share the verification code with anyone!</span></form></div></div></div></div></div></div>);
};

export default TwoStepVerification;