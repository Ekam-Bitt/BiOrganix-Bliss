import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

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
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: w, height: 600, background: "#ff80ed" }}>
          slide 0
        </div>
        <div style={{ width: w, height: 600, background: "#065535" }}>
          slide 1
        </div>
        <div style={{ width: w, height: 600, background: "#000000" }}>
          slide 2
        </div>
        <div style={{ width: w, height: 600, background: "#133337" }}>
          slide 3
        </div>
        <div style={{ width: w, height: 600, background: "#ffc0cb" }}>
          slide 4
        </div>
        <div style={{ width: w, height: 600, background: "#ffffff" }}>
          slide 5
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
