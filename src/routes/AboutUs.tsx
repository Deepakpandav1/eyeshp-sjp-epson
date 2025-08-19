import React from "react";
import { aboutUsContent } from "../utils/appUtils/aboutUs";

const AboutUs = () => {
  return (
    <section className="bg-[url('/bg-100-vh.jpg')] bg-fixed mt-10 py-16 px-6 bg-gradient-to-br from-white to-teal-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-950 mb-4 text-center">
          {aboutUsContent.title}
        </h2>
        <h3 className="text-xl font-semibold text-teal-600 mb-6 text-center">
          {aboutUsContent.subtitle}
        </h3>

        <div className="prose max-w-none text-justify text-black">
          {aboutUsContent.description.split("\n").map((para, idx) =>
            para.trim().startsWith("###") ? (
              <h4
                key={idx}
                className="text-lg font-semibold text-teal-800 mt-6 mb-2"
              >
                {para.replace("### ", "")}
              </h4>
            ) : para.trim().startsWith("-") ? (
              <ul key={idx} className="list-disc pl-5 text-black">
                {para
                  .trim()
                  .split(" - ")
                  .filter(Boolean)
                  .map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
              </ul>
            ) : (
              <p key={idx} className="mb-4">
                {para.trim()}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
