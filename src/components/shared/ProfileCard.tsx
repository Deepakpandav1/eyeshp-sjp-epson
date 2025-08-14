import { div } from "framer-motion/client";
import React from "react";

function ProfileCard({ url, name, description, description1 }) {
  return (
    <div className=" bg-[url('/bg-100-vh.jpg')] bg-fixed border rounded-2xl p-5 shadow-2xl min-w-[500px] items-center text-center flex min-h-80 gap-9 ">
      <div className="rounded-3xl w-60 h-72 border-2 overflow-hidden">
        <img className="w-full h-full" src={url} alt={name} />
      </div>
      <div className="">
        <h2 className="font-bold text-2xl">{name}</h2>
        <p className="font-medium text-[20px]">{description}</p>
        <p className="font-medium text-[20px]">{description1}</p>
      </div>
    </div>
    // <div className="border rounded-2xl p-4 shadow-md bg-white h-100 w-2xs">
    //   <div className="rounded-full w-50 h-50 border-2 overflow-hidden">
    //     <img className="w-full h-full" src={url} alt={name} />
    //   </div>
    //   <h2 className="font-bold text-2xl">{name}</h2>
    //   <p className="font-medium text-[20px]">{description}</p>
    //   <p className="font-medium text-[20px]">{description1}</p>
    // </div>
  );
}

export default ProfileCard;
