import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const CarouselTwo: React.FC = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="border-b border-stroke px-4 py-4 dark:border-strokedark sm:px-6 xl:px-7.5"><h3 classname="font-medium text-black dark:text-white">Slider With Indicators</h3></div><div classname="p-4 sm:p-6 xl:p-10"><swiper classname="carouselTwo" modules="{[Pagination," autoplay]}="" pagination="{{" clickable:="" true="" }}="" autoplay="{{" delay:="" 2500,="" disableoninteraction:="" false,=""><swiperslide><img width="{1374}" height="{520}" priority="" src="{&quot;/images/carousel/carousel-02.jpg&quot;}" alt="carousel"></swiperslide><swiperslide><img width="{1374}" height="{520}" priority="" src="{&quot;/images/carousel/carousel-03.jpg&quot;}" alt="carousel"></swiperslide><swiperslide><img width="{1374}" height="{520}" priority="" src="{&quot;/images/carousel/carousel-01.jpg&quot;}" alt="carousel"></swiperslide></swiper></div></div>);
};

export default CarouselTwo;