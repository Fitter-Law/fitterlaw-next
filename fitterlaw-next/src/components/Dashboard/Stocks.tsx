"use client";
import React from "react";
import ChartTwelve from "@/components/Charts/ChartTwelve";
import DataStatsFour from "@/components/DataStats/DataStatsFour";
import MyStocks from "@/components/Stocks/MyStocks";
import TrendingStocks from "@/components/Stocks/TrendingStocks";
import LatestTransaction from "@/components/Stocks/LatestTransaction";

const Stocks: React.FC = () =&gt; {
  return (&lt;&gt;<div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-9">{/**/}<datastatsfour>{/**/} {/**/}<charttwelve>{/**/} {/**/}<mystocks>{/**/} {/**/}<trendingstocks>{/**/} {/**/}<latesttransaction>{/**/}</latesttransaction></trendingstocks></mystocks></charttwelve></datastatsfour></div>);
};

export default Stocks;