import React from "react";

function MeetOurTeamCard({
  url,
  name,
  description,
  description2,
  description3,
}) {
  return (
    <div className="relative group w-full max-w-xl border-2 border-cyan-800 rounded-3xl overflow-hidden flex flex-col items-center justify-start bg-white transition-all duration-500">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-teal-700 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start p-4 gap-4 text-cyan-900 group-hover:text-white transition-colors duration-500 w-full">
        {/* Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-2 overflow-hidden rounded-full flex-shrink-0">
          <img className="w-full h-full object-cover" src={url} alt={name} />
        </div>

        {/* Name */}
        <h2 className="font-bold text-center text-[clamp(1rem,2vw,2rem)]">
          {name}
        </h2>

        {/* Short Description */}
        <p className="font-medium text-center text-[clamp(0.8rem,1.5vw,1.2rem)] px-2">
          {description}
        </p>

        {/* Long Description */}
        <div className="w-full flex justify-center px-4">
          <p className="font-medium text-justify text-[clamp(0.75rem,1.2vw,1rem)]">
            {description2}
          </p>
        </div>

        {/* Highlight/Badge */}
        <div className="w-full flex justify-center mt-2">
          <h3 className="font-extrabold bg-teal-800 rounded-3xl text-white text-[clamp(0.75rem,1.2vw,1rem)] px-4 py-1">
            {description3}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeamCard;
