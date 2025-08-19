import React, { use } from "react";
import useHideScroller from "../hooks/useHideScroller";
import DoctorSection from "../components/DoctorSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import CareModel from "../components/CareModel";
import Services from "../components/SpecialitySection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEO from "../components/SEO";

export const Landing = () => {
  return (
    <>
      <SEO title={"home"} description={"xyz"} keywords={"doctor"} />
      <div className=" bg-[url('/public/bg-100-vh.jpg')] bg-fixed   landing-page-div mt-18">
        {/* slider div */}
        <div className="bg-cyan-950 py-2 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee text-teal-300 font-bold">
            🚀 &nbsp;THOTA-approved Eye Hospital — Approved by Punjab Govt. |
            Regd No.: DPBECH(P)-CT(N)-PB-2025-5ME3/12737
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✅
            &nbsp; First Organ/Tissue Transplantation – Corneal Transplantation
            Center in Pathankot, Punjab
          </div>

          {/* Tailwind custom animation */}
          <style>
            {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
          </style>
        </div>
        <div className="bg-cyan-950 py-2 text-teal-300 font-bold max-w-80 mx-auto text-center rounded-b-4xl px-2.5 border-t-white border-2 shadow-2xl">
          Dr. Preeti's Bright Eye Care Hospital, Cornea and Phaco Center
        </div>
        <div className="welcome-msg-slide">
          <img src="/BN-2.jpg" alt="Welcome Massage" />
          <Services />
        </div>

        <div className=" py-30  m-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-black">
              Visionaries in Eye Care. Dedicated to You.
            </h1>
            <p className="text-xl font-medium text-black text-justify">
              At Dr. Preeti's Bright Eye Care Hospital, our highly trained eye
              specialists are committed to restoring and protecting your vision
              with precision and compassion. With expertise from top
              institutions and a full-time focus on patient care, our team works
              together to provide comprehensive, multi-specialty treatment. We
              believe in collaboration, innovation, and putting every patient at
              the center of everything we do.
            </p>
          </div>
        </div>
        <CareModel />
        <DoctorSection />

        {/* <TestimonialsSection /> */}
        <FaqSection />
        <ContactSection />
      </div>
    </>
  );
};
