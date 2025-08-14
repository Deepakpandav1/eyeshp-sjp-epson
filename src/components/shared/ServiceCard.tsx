import React from "react";
import { Link } from "@tanstack/react-router";

const ServiceCard = ({ item }: { item: any }) => {
  return (
    <Link to="/services/$service" params={{ service: item.id }}>
      <div className="cursor-pointer bg-white shadow hover:shadow-xl transition rounded-e-3xl overflow-hidden hover:-translate-y-2 hover:border-cyan-700 hover:border-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-70 h-70 rounded-full object-cover border-2 p-5 border-gray-300 shadow-xl bg-white mx-auto mt-4"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-cyan-900 text-center">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
