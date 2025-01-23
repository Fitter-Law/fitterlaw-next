<html><head></head><body>import Link from "next/link";

const ButtonsGroupTwo: React.FC = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Buttons Group With Icon</h3></div><div classname="p-4 sm:p-5 xl:p-7.5"><div classname="flex flex-col gap-6"><div classname="flex flex-wrap items-center"><link href="#" classname="inline-flex items-center gap-2.5 border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9.03125C9.42187 9.03125 10.9922 7.46094 10.9922 5.53906C10.9922 3.61719 9.42187 2.02344 7.5 2.02344C5.57812 2.02344 4.00781 3.59375 4.00781 5.51562C4.00781 7.4375 5.57812 9.03125 7.5 9.03125ZM7.5 2.84375C8.97656 2.84375 10.1719 4.03906 10.1719 5.51562C10.1719 6.99219 8.97656 8.1875 7.5 8.1875C6.02344 8.1875 4.82812 6.99219 4.82812 5.51562C4.82812 4.0625 6.02344 2.84375 7.5 2.84375Z" fill=""></path><path d="M14.555 13.25C12.6097 11.5859 10.1019 10.6719 7.50034 10.6719C4.89878 10.6719 2.39096 11.5859 0.445651 13.25C0.258151 13.3906 0.234714 13.6484 0.398776 13.8359C0.539401 14 0.797214 14.0234 0.984714 13.8828C2.7894 12.3594 5.10971 11.5156 7.52378 11.5156C9.93784 11.5156 12.2582 12.3594 14.0628 13.8828C14.1332 13.9531 14.2269 13.9766 14.3207 13.9766C14.4378 13.9766 14.555 13.9297 14.6253 13.8359C14.766 13.6484 14.7425 13.3906 14.555 13.25Z" fill=""></path></svg>About<link href="#" classname="inline-flex items-center gap-2.5 border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17188 4.90625H3.23438C3 4.90625 2.8125 5.09375 2.8125 5.32813C2.8125 5.5625 3 5.75 3.23438 5.75H7.17188C7.40625 5.75 7.59375 5.5625 7.59375 5.32813C7.59375 5.09375 7.38281 4.90625 7.17188 4.90625Z" fill=""></path><path d="M3.23438 7.57813H5.03906C5.27344 7.57813 5.46094 7.39063 5.46094 7.15625C5.46094 6.92187 5.27344 6.73438 5.03906 6.73438H3.23438C3 6.73438 2.8125 6.92187 2.8125 7.15625C2.8125 7.39063 3 7.57813 3.23438 7.57813Z" fill=""></path><path d="M6.25781 8.60938H3.21094C2.97656 8.60938 2.78906 8.79688 2.78906 9.03125C2.78906 9.26563 2.97656 9.45313 3.21094 9.45313H6.25781C6.49219 9.45313 6.67969 9.26563 6.67969 9.03125C6.67969 8.79688 6.49219 8.60938 6.25781 8.60938Z" fill=""></path><path d="M11.3447 4.55466C10.8056 4.48435 10.3134 4.74216 10.0556 5.21091C9.9384 5.42185 10.0322 5.65622 10.2197 5.77341C10.4306 5.8906 10.665 5.79685 10.7822 5.60935C10.8759 5.44529 11.0634 5.35154 11.2509 5.37497C11.4618 5.39841 11.6259 5.56247 11.6493 5.74997C11.6728 5.93747 11.579 6.10154 11.415 6.17185C11.0634 6.33591 10.8056 6.75779 10.8056 7.15622V7.46091C10.8056 7.69529 10.9931 7.88279 11.2275 7.88279C11.4618 7.88279 11.6493 7.69529 11.6493 7.46091V7.15622C11.6493 7.08591 11.7431 6.94529 11.8134 6.92185C12.2822 6.68747 12.5634 6.19529 12.4931 5.65622C12.3993 5.07029 11.9306 4.62497 11.3447 4.55466Z" fill=""></path><path d="M11.2031 8.67969C10.8516 8.67969 10.5938 8.96094 10.5938 9.28906C10.5938 9.64062 10.875 9.89844 11.2031 9.89844C11.5547 9.89844 11.8125 9.61719 11.8125 9.28906C11.8359 8.96094 11.5547 8.67969 11.2031 8.67969Z" fill=""></path><path d="M12.9609 2.70312H2.03906C1.07813 2.70312 0.304688 3.47656 0.304688 4.4375V12.2422C0.304688 12.6172 0.492188 12.9453 0.820313 13.1328C0.984375 13.2266 1.14844 13.2734 1.33594 13.2734C1.52344 13.2734 1.6875 13.2266 1.85156 13.1328L4.57031 11.5625C4.59375 11.5391 4.64063 11.5391 4.66406 11.5391H12.9844C13.9453 11.5391 14.7188 10.7656 14.7188 9.80469V4.46094C14.7188 3.5 13.9219 2.70312 12.9609 2.70312ZM13.8984 9.82812C13.8984 10.3437 13.4766 10.7422 12.9844 10.7422H4.64063C4.45313 10.7422 4.28906 10.7891 4.125 10.8828L1.42969 12.4531C1.33594 12.5 1.24219 12.4766 1.21875 12.4531C1.19531 12.4297 1.125 12.3828 1.125 12.2656V4.46094C1.125 3.94531 1.54688 3.54688 2.03906 3.54688H12.9609C13.4766 3.54688 13.875 3.96875 13.875 4.46094V9.82812H13.8984Z" fill=""></path></svg>Support<link href="#" classname="inline-flex items-center gap-2.5 border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clippath="url(#clip0_652_20634)"><path d="M12.5391 0.78125H11.3438C10.4063 0.78125 9.63281 1.55469 9.63281 2.49219V11.8906C9.63281 11.9609 9.65625 12.0313 9.70313 12.1016L11.4141 14.9141C11.5313 15.1016 11.7422 15.2188 11.9766 15.2188C12.2109 15.2188 12.4219 15.1016 12.5391 14.9141L14.25 12.1016C14.2969 12.0313 14.3203 11.9609 14.3203 11.8906V2.49219C14.25 1.55469 13.4766 0.78125 12.5391 0.78125ZM11.3438 1.60156H12.5391C13.0312 1.60156 13.4297 2 13.4297 2.49219V3.28906H10.4531V2.49219C10.4531 2 10.8516 1.60156 11.3438 1.60156ZM11.9297 14.2344L10.4297 11.7734V4.10938H13.4062V11.7734L11.9297 14.2344Z" fill=""></path><path d="M5.27344 0.804688H2.10938C1.35938 0.804688 0.75 1.41406 0.75 2.16406V13.8594C0.75 14.6094 1.35938 15.2188 2.10938 15.2188H5.27344C6.02344 15.2188 6.63281 14.6094 6.63281 13.8594V2.16406C6.60938 1.41406 6 0.804688 5.27344 0.804688ZM5.78906 13.8359C5.78906 14.1172 5.55469 14.375 5.25 14.375H2.10938C1.82813 14.375 1.57031 14.1406 1.57031 13.8359V12.8047C1.59375 12.8047 1.64062 12.8281 1.6875 12.8281H3.42188C3.65625 12.8281 3.84375 12.6406 3.84375 12.4063C3.84375 12.1719 3.65625 11.9844 3.42188 11.9844H1.6875C1.64062 11.9844 1.61719 11.9844 1.57031 12.0078V10.5078C1.59375 10.5078 1.64062 10.5313 1.6875 10.5313H2.20312C2.4375 10.5313 2.625 10.3438 2.625 10.1094C2.625 9.875 2.4375 9.6875 2.20312 9.6875H1.6875C1.64062 9.6875 1.61719 9.6875 1.57031 9.71094V8.23438C1.59375 8.23438 1.64062 8.25781 1.6875 8.25781H3.42188C3.65625 8.25781 3.84375 8.07031 3.84375 7.83594C3.84375 7.60156 3.65625 7.41406 3.42188 7.41406H1.6875C1.64062 7.41406 1.61719 7.41406 1.57031 7.4375V5.9375C1.59375 5.9375 1.64062 5.96094 1.6875 5.96094H2.20312C2.4375 5.96094 2.625 5.77344 2.625 5.53906C2.625 5.30469 2.4375 5.11719 2.20312 5.11719H1.6875C1.64062 5.11719 1.61719 5.11719 1.57031 5.14063V3.64063C1.59375 3.64063 1.64062 3.66406 1.6875 3.66406H3.42188C3.65625 3.66406 3.84375 3.47656 3.84375 3.24219C3.84375 3.00781 3.65625 2.84375 3.42188 2.84375H1.6875C1.64062 2.84375 1.61719 2.84375 1.57031 2.86719V2.16406C1.57031 1.88281 1.80469 1.625 2.10938 1.625H5.27344C5.55469 1.625 5.8125 1.85938 5.8125 2.16406V13.8359H5.78906Z" fill=""></path></g><defs><clipPath id="clip0_652_20634"><rect width="15" height="15" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>Services</div><div classname="flex flex-wrap items-center rounded-lg"><link href="#" classname="inline-flex items-center gap-2.5 rounded-l-lg border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9.03125C9.42187 9.03125 10.9922 7.46094 10.9922 5.53906C10.9922 3.61719 9.42187 2.02344 7.5 2.02344C5.57812 2.02344 4.00781 3.59375 4.00781 5.51562C4.00781 7.4375 5.57812 9.03125 7.5 9.03125ZM7.5 2.84375C8.97656 2.84375 10.1719 4.03906 10.1719 5.51562C10.1719 6.99219 8.97656 8.1875 7.5 8.1875C6.02344 8.1875 4.82812 6.99219 4.82812 5.51562C4.82812 4.0625 6.02344 2.84375 7.5 2.84375Z" fill=""></path><path d="M14.555 13.25C12.6097 11.5859 10.1019 10.6719 7.50034 10.6719C4.89878 10.6719 2.39096 11.5859 0.445651 13.25C0.258151 13.3906 0.234714 13.6484 0.398776 13.8359C0.539401 14 0.797214 14.0234 0.984714 13.8828C2.7894 12.3594 5.10971 11.5156 7.52378 11.5156C9.93784 11.5156 12.2582 12.3594 14.0628 13.8828C14.1332 13.9531 14.2269 13.9766 14.3207 13.9766C14.4378 13.9766 14.555 13.9297 14.6253 13.8359C14.766 13.6484 14.7425 13.3906 14.555 13.25Z" fill=""></path></svg>About<link href="#" classname="inline-flex items-center gap-2.5 border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17188 4.90625H3.23438C3 4.90625 2.8125 5.09375 2.8125 5.32813C2.8125 5.5625 3 5.75 3.23438 5.75H7.17188C7.40625 5.75 7.59375 5.5625 7.59375 5.32813C7.59375 5.09375 7.38281 4.90625 7.17188 4.90625Z" fill=""></path><path d="M3.23438 7.57813H5.03906C5.27344 7.57813 5.46094 7.39063 5.46094 7.15625C5.46094 6.92187 5.27344 6.73438 5.03906 6.73438H3.23438C3 6.73438 2.8125 6.92187 2.8125 7.15625C2.8125 7.39063 3 7.57813 3.23438 7.57813Z" fill=""></path><path d="M6.25781 8.60938H3.21094C2.97656 8.60938 2.78906 8.79688 2.78906 9.03125C2.78906 9.26563 2.97656 9.45313 3.21094 9.45313H6.25781C6.49219 9.45313 6.67969 9.26563 6.67969 9.03125C6.67969 8.79688 6.49219 8.60938 6.25781 8.60938Z" fill=""></path><path d="M11.3447 4.55466C10.8056 4.48435 10.3134 4.74216 10.0556 5.21091C9.9384 5.42185 10.0322 5.65622 10.2197 5.77341C10.4306 5.8906 10.665 5.79685 10.7822 5.60935C10.8759 5.44529 11.0634 5.35154 11.2509 5.37497C11.4618 5.39841 11.6259 5.56247 11.6493 5.74997C11.6728 5.93747 11.579 6.10154 11.415 6.17185C11.0634 6.33591 10.8056 6.75779 10.8056 7.15622V7.46091C10.8056 7.69529 10.9931 7.88279 11.2275 7.88279C11.4618 7.88279 11.6493 7.69529 11.6493 7.46091V7.15622C11.6493 7.08591 11.7431 6.94529 11.8134 6.92185C12.2822 6.68747 12.5634 6.19529 12.4931 5.65622C12.3993 5.07029 11.9306 4.62497 11.3447 4.55466Z" fill=""></path><path d="M11.2031 8.67969C10.8516 8.67969 10.5938 8.96094 10.5938 9.28906C10.5938 9.64062 10.875 9.89844 11.2031 9.89844C11.5547 9.89844 11.8125 9.61719 11.8125 9.28906C11.8359 8.96094 11.5547 8.67969 11.2031 8.67969Z" fill=""></path><path d="M12.9609 2.70312H2.03906C1.07813 2.70312 0.304688 3.47656 0.304688 4.4375V12.2422C0.304688 12.6172 0.492188 12.9453 0.820313 13.1328C0.984375 13.2266 1.14844 13.2734 1.33594 13.2734C1.52344 13.2734 1.6875 13.2266 1.85156 13.1328L4.57031 11.5625C4.59375 11.5391 4.64063 11.5391 4.66406 11.5391H12.9844C13.9453 11.5391 14.7188 10.7656 14.7188 9.80469V4.46094C14.7188 3.5 13.9219 2.70312 12.9609 2.70312ZM13.8984 9.82812C13.8984 10.3437 13.4766 10.7422 12.9844 10.7422H4.64063C4.45313 10.7422 4.28906 10.7891 4.125 10.8828L1.42969 12.4531C1.33594 12.5 1.24219 12.4766 1.21875 12.4531C1.19531 12.4297 1.125 12.3828 1.125 12.2656V4.46094C1.125 3.94531 1.54688 3.54688 2.03906 3.54688H12.9609C13.4766 3.54688 13.875 3.96875 13.875 4.46094V9.82812H13.8984Z" fill=""></path></svg>Support<link href="#" classname="inline-flex items-center gap-2.5 rounded-r-lg border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clippath="url(#clip0_652_20634)"><path d="M12.5391 0.78125H11.3438C10.4063 0.78125 9.63281 1.55469 9.63281 2.49219V11.8906C9.63281 11.9609 9.65625 12.0313 9.70313 12.1016L11.4141 14.9141C11.5313 15.1016 11.7422 15.2188 11.9766 15.2188C12.2109 15.2188 12.4219 15.1016 12.5391 14.9141L14.25 12.1016C14.2969 12.0313 14.3203 11.9609 14.3203 11.8906V2.49219C14.25 1.55469 13.4766 0.78125 12.5391 0.78125ZM11.3438 1.60156H12.5391C13.0312 1.60156 13.4297 2 13.4297 2.49219V3.28906H10.4531V2.49219C10.4531 2 10.8516 1.60156 11.3438 1.60156ZM11.9297 14.2344L10.4297 11.7734V4.10938H13.4062V11.7734L11.9297 14.2344Z" fill=""></path><path d="M5.27344 0.804688H2.10938C1.35938 0.804688 0.75 1.41406 0.75 2.16406V13.8594C0.75 14.6094 1.35938 15.2188 2.10938 15.2188H5.27344C6.02344 15.2188 6.63281 14.6094 6.63281 13.8594V2.16406C6.60938 1.41406 6 0.804688 5.27344 0.804688ZM5.78906 13.8359C5.78906 14.1172 5.55469 14.375 5.25 14.375H2.10938C1.82813 14.375 1.57031 14.1406 1.57031 13.8359V12.8047C1.59375 12.8047 1.64062 12.8281 1.6875 12.8281H3.42188C3.65625 12.8281 3.84375 12.6406 3.84375 12.4063C3.84375 12.1719 3.65625 11.9844 3.42188 11.9844H1.6875C1.64062 11.9844 1.61719 11.9844 1.57031 12.0078V10.5078C1.59375 10.5078 1.64062 10.5313 1.6875 10.5313H2.20312C2.4375 10.5313 2.625 10.3438 2.625 10.1094C2.625 9.875 2.4375 9.6875 2.20312 9.6875H1.6875C1.64062 9.6875 1.61719 9.6875 1.57031 9.71094V8.23438C1.59375 8.23438 1.64062 8.25781 1.6875 8.25781H3.42188C3.65625 8.25781 3.84375 8.07031 3.84375 7.83594C3.84375 7.60156 3.65625 7.41406 3.42188 7.41406H1.6875C1.64062 7.41406 1.61719 7.41406 1.57031 7.4375V5.9375C1.59375 5.9375 1.64062 5.96094 1.6875 5.96094H2.20312C2.4375 5.96094 2.625 5.77344 2.625 5.53906C2.625 5.30469 2.4375 5.11719 2.20312 5.11719H1.6875C1.64062 5.11719 1.61719 5.11719 1.57031 5.14063V3.64063C1.59375 3.64063 1.64062 3.66406 1.6875 3.66406H3.42188C3.65625 3.66406 3.84375 3.47656 3.84375 3.24219C3.84375 3.00781 3.65625 2.84375 3.42188 2.84375H1.6875C1.64062 2.84375 1.61719 2.84375 1.57031 2.86719V2.16406C1.57031 1.88281 1.80469 1.625 2.10938 1.625H5.27344C5.55469 1.625 5.8125 1.85938 5.8125 2.16406V13.8359H5.78906Z" fill=""></path></g><defs><clipPath id="clip0_652_20634"><rect width="15" height="15" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>Services</div><div classname="flex flex-wrap items-center rounded-full"><link href="#" classname="inline-flex items-center gap-2.5 rounded-l-full border border-primary bg-primary px-2 py-1 font-medium text-white hover:border-primary hover:bg-primary hover:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 9.03125C9.42187 9.03125 10.9922 7.46094 10.9922 5.53906C10.9922 3.61719 9.42187 2.02344 7.5 2.02344C5.57812 2.02344 4.00781 3.59375 4.00781 5.51562C4.00781 7.4375 5.57812 9.03125 7.5 9.03125ZM7.5 2.84375C8.97656 2.84375 10.1719 4.03906 10.1719 5.51562C10.1719 6.99219 8.97656 8.1875 7.5 8.1875C6.02344 8.1875 4.82812 6.99219 4.82812 5.51562C4.82812 4.0625 6.02344 2.84375 7.5 2.84375Z" fill=""></path><path d="M14.555 13.25C12.6097 11.5859 10.1019 10.6719 7.50034 10.6719C4.89878 10.6719 2.39096 11.5859 0.445651 13.25C0.258151 13.3906 0.234714 13.6484 0.398776 13.8359C0.539401 14 0.797214 14.0234 0.984714 13.8828C2.7894 12.3594 5.10971 11.5156 7.52378 11.5156C9.93784 11.5156 12.2582 12.3594 14.0628 13.8828C14.1332 13.9531 14.2269 13.9766 14.3207 13.9766C14.4378 13.9766 14.555 13.9297 14.6253 13.8359C14.766 13.6484 14.7425 13.3906 14.555 13.25Z" fill=""></path></svg>About<link href="#" classname="inline-flex items-center gap-2.5 border-y border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17188 4.90625H3.23438C3 4.90625 2.8125 5.09375 2.8125 5.32813C2.8125 5.5625 3 5.75 3.23438 5.75H7.17188C7.40625 5.75 7.59375 5.5625 7.59375 5.32813C7.59375 5.09375 7.38281 4.90625 7.17188 4.90625Z" fill=""></path><path d="M3.23438 7.57813H5.03906C5.27344 7.57813 5.46094 7.39063 5.46094 7.15625C5.46094 6.92187 5.27344 6.73438 5.03906 6.73438H3.23438C3 6.73438 2.8125 6.92187 2.8125 7.15625C2.8125 7.39063 3 7.57813 3.23438 7.57813Z" fill=""></path><path d="M6.25781 8.60938H3.21094C2.97656 8.60938 2.78906 8.79688 2.78906 9.03125C2.78906 9.26563 2.97656 9.45313 3.21094 9.45313H6.25781C6.49219 9.45313 6.67969 9.26563 6.67969 9.03125C6.67969 8.79688 6.49219 8.60938 6.25781 8.60938Z" fill=""></path><path d="M11.3447 4.55466C10.8056 4.48435 10.3134 4.74216 10.0556 5.21091C9.9384 5.42185 10.0322 5.65622 10.2197 5.77341C10.4306 5.8906 10.665 5.79685 10.7822 5.60935C10.8759 5.44529 11.0634 5.35154 11.2509 5.37497C11.4618 5.39841 11.6259 5.56247 11.6493 5.74997C11.6728 5.93747 11.579 6.10154 11.415 6.17185C11.0634 6.33591 10.8056 6.75779 10.8056 7.15622V7.46091C10.8056 7.69529 10.9931 7.88279 11.2275 7.88279C11.4618 7.88279 11.6493 7.69529 11.6493 7.46091V7.15622C11.6493 7.08591 11.7431 6.94529 11.8134 6.92185C12.2822 6.68747 12.5634 6.19529 12.4931 5.65622C12.3993 5.07029 11.9306 4.62497 11.3447 4.55466Z" fill=""></path><path d="M11.2031 8.67969C10.8516 8.67969 10.5938 8.96094 10.5938 9.28906C10.5938 9.64062 10.875 9.89844 11.2031 9.89844C11.5547 9.89844 11.8125 9.61719 11.8125 9.28906C11.8359 8.96094 11.5547 8.67969 11.2031 8.67969Z" fill=""></path><path d="M12.9609 2.70312H2.03906C1.07813 2.70312 0.304688 3.47656 0.304688 4.4375V12.2422C0.304688 12.6172 0.492188 12.9453 0.820313 13.1328C0.984375 13.2266 1.14844 13.2734 1.33594 13.2734C1.52344 13.2734 1.6875 13.2266 1.85156 13.1328L4.57031 11.5625C4.59375 11.5391 4.64063 11.5391 4.66406 11.5391H12.9844C13.9453 11.5391 14.7188 10.7656 14.7188 9.80469V4.46094C14.7188 3.5 13.9219 2.70312 12.9609 2.70312ZM13.8984 9.82812C13.8984 10.3437 13.4766 10.7422 12.9844 10.7422H4.64063C4.45313 10.7422 4.28906 10.7891 4.125 10.8828L1.42969 12.4531C1.33594 12.5 1.24219 12.4766 1.21875 12.4531C1.19531 12.4297 1.125 12.3828 1.125 12.2656V4.46094C1.125 3.94531 1.54688 3.54688 2.03906 3.54688H12.9609C13.4766 3.54688 13.875 3.96875 13.875 4.46094V9.82812H13.8984Z" fill=""></path></svg>Support<link href="#" classname="inline-flex items-center gap-2.5 rounded-r-full border border-stroke px-2 py-1 font-medium text-black hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark dark:text-white dark:hover:border-primary sm:px-6 sm:py-3"><svg classname="fill-current" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clippath="url(#clip0_652_20634)"><path d="M12.5391 0.78125H11.3438C10.4063 0.78125 9.63281 1.55469 9.63281 2.49219V11.8906C9.63281 11.9609 9.65625 12.0313 9.70313 12.1016L11.4141 14.9141C11.5313 15.1016 11.7422 15.2188 11.9766 15.2188C12.2109 15.2188 12.4219 15.1016 12.5391 14.9141L14.25 12.1016C14.2969 12.0313 14.3203 11.9609 14.3203 11.8906V2.49219C14.25 1.55469 13.4766 0.78125 12.5391 0.78125ZM11.3438 1.60156H12.5391C13.0312 1.60156 13.4297 2 13.4297 2.49219V3.28906H10.4531V2.49219C10.4531 2 10.8516 1.60156 11.3438 1.60156ZM11.9297 14.2344L10.4297 11.7734V4.10938H13.4062V11.7734L11.9297 14.2344Z" fill=""></path><path d="M5.27344 0.804688H2.10938C1.35938 0.804688 0.75 1.41406 0.75 2.16406V13.8594C0.75 14.6094 1.35938 15.2188 2.10938 15.2188H5.27344C6.02344 15.2188 6.63281 14.6094 6.63281 13.8594V2.16406C6.60938 1.41406 6 0.804688 5.27344 0.804688ZM5.78906 13.8359C5.78906 14.1172 5.55469 14.375 5.25 14.375H2.10938C1.82813 14.375 1.57031 14.1406 1.57031 13.8359V12.8047C1.59375 12.8047 1.64062 12.8281 1.6875 12.8281H3.42188C3.65625 12.8281 3.84375 12.6406 3.84375 12.4063C3.84375 12.1719 3.65625 11.9844 3.42188 11.9844H1.6875C1.64062 11.9844 1.61719 11.9844 1.57031 12.0078V10.5078C1.59375 10.5078 1.64062 10.5313 1.6875 10.5313H2.20312C2.4375 10.5313 2.625 10.3438 2.625 10.1094C2.625 9.875 2.4375 9.6875 2.20312 9.6875H1.6875C1.64062 9.6875 1.61719 9.6875 1.57031 9.71094V8.23438C1.59375 8.23438 1.64062 8.25781 1.6875 8.25781H3.42188C3.65625 8.25781 3.84375 8.07031 3.84375 7.83594C3.84375 7.60156 3.65625 7.41406 3.42188 7.41406H1.6875C1.64062 7.41406 1.61719 7.41406 1.57031 7.4375V5.9375C1.59375 5.9375 1.64062 5.96094 1.6875 5.96094H2.20312C2.4375 5.96094 2.625 5.77344 2.625 5.53906C2.625 5.30469 2.4375 5.11719 2.20312 5.11719H1.6875C1.64062 5.11719 1.61719 5.11719 1.57031 5.14063V3.64063C1.59375 3.64063 1.64062 3.66406 1.6875 3.66406H3.42188C3.65625 3.66406 3.84375 3.47656 3.84375 3.24219C3.84375 3.00781 3.65625 2.84375 3.42188 2.84375H1.6875C1.64062 2.84375 1.61719 2.84375 1.57031 2.86719V2.16406C1.57031 1.88281 1.80469 1.625 2.10938 1.625H5.27344C5.55469 1.625 5.8125 1.85938 5.8125 2.16406V13.8359H5.78906Z" fill=""></path></g><defs><clipPath id="clip0_652_20634"><rect width="15" height="15" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>Services</div></div></div></div>);
};

export default ButtonsGroupTwo;</body></html>