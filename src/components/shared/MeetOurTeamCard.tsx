import React from "react";

function MeetOurTeamCard({ url, name, description, description2 }) {
  return (
    <div className="relative group w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-[5/6] border-2 border-cyan-800 rounded-3xl overflow-hidden flex items-center justify-center bg-white transition-all duration-500">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-teal-700 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 gap-2 text-cyan-900 group-hover:text-white transition-colors duration-500">
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-2 overflow-hidden rounded-full">
          <img className="w-full h-full object-cover" src={url} alt={name} />
        </div>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{name}</h2>
        <p className="font-medium text-sm sm:text-base md:text-lg">
          {description}
        </p>
        <div className="w-full flex items-center justify-center">
          <p className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-justify">
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeamCard;
