import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];

const ChatCard = () =&gt; {
  return (<div classname="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4"><h4 classname="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">Chats</h4><div>{chatData.map((chat, key) =&gt; (<link href="/" classname="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4" key="{key}"><div classname="relative h-14 w-14 rounded-full"><img width="{56}" height="{56}" src="{chat.avatar}" alt="User" style="{{" width:="" "auto",="" height:="" }}=""><span 6="" classname="{`absolute" bottom-0="" right-0="" h-3.5="" w-3.5="" rounded-full="" border-2="" border-white="" ${="" chat.dot="==" ?="" "bg-meta-6"="" :="" `bg-meta-${chat.dot}`="" }="" `}=""></span></div><div classname="flex flex-1 items-center justify-between"><div><h5 classname="font-medium text-black dark:text-white">{chat.name}</h5><p><span classname="text-sm text-black dark:text-white">{chat.text}</span><span classname="text-xs">. {chat.time} min</span></p></div>{chat.textCount !== 0 &amp;&amp; (<div classname="flex h-6 w-6 items-center justify-center rounded-full bg-primary"><span classname="text-sm font-medium text-white">{" "} {chat.textCount}</span></div>)}</div>))}</div></div>);
};

export default ChatCard;