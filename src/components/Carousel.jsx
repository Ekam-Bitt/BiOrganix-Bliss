import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import image1 from "../assets/unnamed-3.jpg";
import image2 from "../assets/unnamed-4.jpg";
import image3 from "../assets/Bio.jpeg";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const w = window.innerWidth;

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay
        delay={3000}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div style={{ width: w, height: 600, background: "#000000" }}>
          <img src={image1} alt="Slide 1" className="w-full h-full" />
        </div>
        <div style={{ width: w, height: 600, background: "#000000" }}>
          <img src={image2} alt="Slide 2" className="w-full h-full" />
        </div>
        <div style={{ width: w, height: 600, background: "#000000" }}>
          <img src={image3} alt="Slide 3" className="w-full h-full" />
        </div>
        {/* <img src={image1} alt="Product" className="w-screen" /> */}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
