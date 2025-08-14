import React from "react";
import { servicesData } from "../utils/appUtils/servicesConstants";
import SliderCard from "../components/shared/SliderCard";
import useHideScroller from "../hooks/useHideScroller";

function Services() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useHideScroller(scrollRef as React.RefObject<HTMLElement>);

  return (
    <div className="text-center pt-10 pb-20 px-4 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Center of Excellence</h1>
      <div className="px-10">
        <div
          ref={scrollRef}
          className="flex justify-start items-center gap-9 overflow-x-scroll rounded-3xl p-2.5 no-scrollbar"
        >
          {servicesData.map(({ image, title, description }, index) => (
            <SliderCard
              key={index}
              url={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
