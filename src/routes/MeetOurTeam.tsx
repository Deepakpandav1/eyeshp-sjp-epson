import React from "react";
import MeetOurTeamCard from "../components/shared/MeetOurTeamCard";
import { doctorData } from "../utils/appUtils/constant";

const MeetOurTeam = () => {
  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed text-center pt-10 pb-15 mt-15 px-4 rounded-2xl">
      <h1 className="text-3xl font-bold mb-2 text-cyan-900">Meet Our Team</h1>

      {/* Grid Container */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center p-10 ">
        {doctorData.map(({ name, url, description, description2 }, index) => (
          <MeetOurTeamCard
            key={index}
            url={url}
            name={name}
            description={description}
            description2={description2}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
