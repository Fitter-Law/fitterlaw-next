<html><head></head><body>import noUiSlider from "nouislider";
import { useEffect } from "react";

const RangeSliderTwo = () =&gt; {
  useEffect(() =&gt; {
    const sliderTwo = document.getElementById("rangeSliderTwo") as any;

    noUiSlider.create(sliderTwo, {
      start: [20],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
    return () =&gt; {
      (sliderTwo.noUiSlider as any).destroy();
    };
  }, []);

  return (<div classname="rangeSliderCommon rangeSliderTwo"><div id="rangeSliderTwo"></div></div>);
};

export default RangeSliderTwo;</body></html>