import React from "react";
import ProfileCard from "./shared/ProfileCard";
import { doctorData } from "../utils/appUtils/constant";
import useHideScroller from "../hooks/useHideScroller";

export default function DoctorSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  useHideScroller(scrollRef as React.RefObject<HTMLElement>);
  return (
    <div className="text-center pt-10 pb-20 px-4 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
      <div className="  items-center px-10">
        <div
          ref={scrollRef}
          className=" flex  items-center gap-9 overflow-x-scroll rounded-3xl p-6 no-scrollbar"
        >
          {doctorData.map(({ name, url, description, description1 }, index) => {
            return (
              <ProfileCard
                url={url}
                name={name}
                description={description}
                description1={description1}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
