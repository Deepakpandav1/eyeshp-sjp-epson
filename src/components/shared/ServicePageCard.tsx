import React from "react";
import { useNavigate } from "@tanstack/react-router";

const ServicePageCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed bg-cover bg-center py-20 px-4 sm:px-8">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
        {/* Main Card with image and description */}
        <div className="cursor-pointer bg-white p-6 md:p-10 w-full rounded-3xl shadow-xl transition hover:shadow-2xl duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 p-2 border-gray-200 shadow-lg bg-gray-50 flex-shrink-0"
            />
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-cyan-900">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 text-justify">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* This div renders the rest of the content from the data file */}
        <div className="text-base text-gray-700 w-full mt-10 p-6 bg-white rounded-3xl shadow-xl">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default ServicePageCard;
