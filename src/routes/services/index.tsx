// src/pages/Services.jsx
import { Outlet } from "@tanstack/react-router";

import React from "react";
import { servicesData } from "../../utils/appUtils/servicesConstants";
import ServiceCard from "../../components/shared/ServiceCard";
import { useNavigate, useSearch } from "@tanstack/react-router";

function Services() {
  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed">
      <h2 className="mt-22 font-bold text-4xl text-center blink-color">
        Services @ Dr Preeti's Bright Eye Care Hospital
      </h2>

      <style>
        {`
        @keyframes blinkColor {
          0%, 100% { color: #006064; }
          33% { color: #1bb1b1; }
          66% { color: #212121; }
        }
        .blink-color {
          animation: blinkColor 2s infinite;
        }
      `}
      </style>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {servicesData.map((item, index) => (
          <React.Fragment key={index}>
            <ServiceCard item={item} />
          </React.Fragment>
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
