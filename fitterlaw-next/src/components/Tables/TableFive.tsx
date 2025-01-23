<html><head></head><body>import React from "react";

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

const users: User[] = [
  {
    name: "Musharof Chowdhury",
    title: "Multidisciplinary Web Entrepreneur",
    email: "musharof@example.com",
    role: "Owner",
  },
  {
    name: "Naimur Rahman",
    title: "Website Front-end Developer",
    email: "naimurrahman@example.com",
    role: "Member",
  },
  {
    name: "Shafiq Hammad",
    title: "Regional Paradigm Technician",
    email: "shafiq.hd@example.com",
    role: "Moderator",
  },
  {
    name: "Alex Semuyel",
    title: "Applications Engineer",
    email: "alex.semuel@example.com",
    role: "Admin",
  },
  {
    name: "Sulium Keliym",
    title: "Lead Implementation Liaison",
    email: "suliym.info@example.com",
    role: "Member",
  },
  {
    name: "Jhon Smith",
    title: "Regional Paradigm Technician",
    email: "jhon.smith@example.com",
    role: "Admin",
  },
  {
    name: "Jenifer Lofess",
    title: "Multidisciplinary Web Entrepreneur",
    email: "loffes.cooper@example.com",
    role: "Member",
  },
  {
    name: "Devid Deekook",
    title: "Central Security Manager",
    email: "devid.decok@example.com",
    role: "Moderator",
  },
];

const TableFive: React.FC = () =&gt; {
  return (<div classname="overflow-hidden rounded-[10px]"><div classname="max-w-full overflow-x-auto"><div classname="min-w-[1170px]">{/* table header start */}<div classname="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11"><div classname="col-span-3"><h5 classname="font-medium text-[#637381] dark:text-bodydark">NAME</h5></div><div classname="col-span-3"><h5 classname="font-medium text-[#637381] dark:text-bodydark">TITLE</h5></div><div classname="col-span-3"><h5 classname="font-medium text-[#637381] dark:text-bodydark">EMAIL</h5></div><div classname="col-span-2"><h5 classname="font-medium text-[#637381] dark:text-bodydark">ROLE</h5></div></div>{/* table header end */}

          {/* table body start */}<div classname="bg-white dark:bg-boxdark">{users.map((user, index) =&gt; (<div key="{index}" classname="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11"><div classname="col-span-3"><p classname="text-[#637381] dark:text-bodydark">{user.name}</p></div><div classname="col-span-3"><p classname="text-[#637381] dark:text-bodydark">{user.title}</p></div><div classname="col-span-3"><p classname="text-[#637381] dark:text-bodydark">{user.email}</p></div><div classname="col-span-2"><p classname="text-[#637381] dark:text-bodydark">{user.role}</p></div><div classname="col-span-1"><button classname="float-right text-primary">Edit</button></div></div>))}</div>{/* table body end */}</div></div></div>);
};

export default TableFive;</body></html>