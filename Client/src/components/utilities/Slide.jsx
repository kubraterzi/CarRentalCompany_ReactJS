import React from "react";
import { Fade } from "react-slideshow-image";

const Slide = () => {
  const properties = {
    autoplay: false,
    indicators: true,
  };

  return (
    <div style={{ width: "100%" }}>
      <Fade {...properties}>
        <div>
          {/* <img src={volvo} style={{ width: "100%", height: "100%" }} /> */}
          First Slide
        </div>
        <div>
          {/* <img src={mercedes} style={{ width: "100%", height: "100%" }} /> */}
          Second Slide
        </div>
        <div>Third Slide</div>
        <div>Fourth Slide</div>
      </Fade>
    </div>
  );
};

export default Slide;
