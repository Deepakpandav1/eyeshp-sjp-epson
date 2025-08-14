import React from "react";
import { patientTestimonials } from "../utils/appUtils/constant";
import PatientTesimonials from "./shared/PatientTestimonials";
import useSliderDiv from "../hooks/useSliderDiv"; // ← import hook

function TestimonialsSection() {
  const total = patientTestimonials.length;
  const currentIndex = useSliderDiv(total, 3000); // Auto-slide every 3 seconds

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Patient Testimonials
      </h1>
      <div className="overflow-hidden max-w-[790px] w-full mx-auto rounded-3xl border-2 border-cyan-900 bg-white shadow-md">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${total * 100}%`,
          }}
        >
          {patientTestimonials.map(
            ({ url, name, description, treatment }, index) => (
              <div
                className="w-full flex-shrink-0 px-4 sm:px-6 md:px-8"
                key={index}
                style={{ width: "100%" }}
              >
                <PatientTesimonials
                  url={url}
                  name={name}
                  description={description}
                  treatment={treatment}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
