"use client";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/us-aea-en";

const MapOne: React.FC = () =&gt; {
  useEffect(() =&gt; {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "us_aea_en",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    return () =&gt; { const map = document.getElementById("mapOne"); console.log(map) if (map) { map.innerHTML = ""; } }; }, []); return (<div classname="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7"><h4 classname="mb-2 text-xl font-semibold text-black dark:text-white">Region labels</h4><div classname="h-90"><div id="mapOne" classname="mapOne map-btn"></div></div></div>);
};

export default MapOne;