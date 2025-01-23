<html><head></head><body>import Image from "next/image";
import { Product } from "@/types/product";

const productData: Product[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const TableTwo = () =&gt; {
  return (<div classname="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"><div classname="px-4 py-6 md:px-6 xl:px-7.5"><h4 classname="text-xl font-semibold text-black dark:text-white">Top Products</h4></div><div classname="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"><div classname="col-span-3 flex items-center"><p classname="font-medium">Product Name</p></div><div classname="col-span-2 hidden items-center sm:flex"><p classname="font-medium">Category</p></div><div classname="col-span-1 flex items-center"><p classname="font-medium">Price</p></div><div classname="col-span-1 flex items-center"><p classname="font-medium">Sold</p></div><div classname="col-span-1 flex items-center"><p classname="font-medium">Profit</p></div></div>{productData.map((product, key) =&gt; (<div classname="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5" key="{key}"><div classname="col-span-3 flex items-center"><div classname="flex flex-col gap-4 sm:flex-row sm:items-center"><div classname="h-12.5 w-15 rounded-md"><img src="{product.image}" width="{60}" height="{50}" alt="Product"></div><p classname="text-sm text-black dark:text-white">{product.name}</p></div></div><div classname="col-span-2 hidden items-center sm:flex"><p classname="text-sm text-black dark:text-white">{product.category}</p></div><div classname="col-span-1 flex items-center"><p classname="text-sm text-black dark:text-white">${product.price}</p></div><div classname="col-span-1 flex items-center"><p classname="text-sm text-black dark:text-white">{product.sold}</p></div><div classname="col-span-1 flex items-center"><p classname="text-sm text-meta-3">${product.profit}</p></div></div>))}</div>);
};

export default TableTwo;</body></html>