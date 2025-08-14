import React, { useState } from "react";
import Slider from "react-slick";
import { galleryItems, departments } from "../utils/appUtils/galleryData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FacilityTour = () => {
  const [selectedDept, setSelectedDept] = useState<string>("");

  const mainSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    speed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const departmentSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const filteredItems = selectedDept
    ? galleryItems.filter((item) => item.dept === selectedDept)
    : galleryItems;

  return (
    <div className="bg-[url('/bg-100-vh.jpg')] bg-fixed py-12 px-4 sm:px-6 lg:px-16  mt-10">
      <h2 className="text-3xl font-bold text-center text-teal-950 mb-10">
        Explore Our Hospital
      </h2>

      <div className="mb-8 relative">
        <Slider {...mainSliderSettings}>
          {galleryItems.map((item, index) => (
            <div key={index} className="px-2 ">
              <div className="relative overflow-hidden  rounded-lg flex items-center justify-center h-[600px]">
                <div
                  className="absolute inset-0 z-0 blur-xl scale-110 bg-center bg-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 object-contain max-h-full max-w-full"
                />
                <div className="absolute bottom-0 bg-teal-950 bg-opacity-60 text-cyan-500  text-center text-sm px-4 py-2 w-full z-20">
                  <div className="font-bold">{item.title}</div>
                  <div className="text-xs">{item.dept}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {departments.map((dept) => (
          <div
            key={dept}
            className={`p-3 text-center rounded cursor-pointer font-semibold border transition-all duration-300 ${
              selectedDept === dept
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-white text-blue-900 border-blue-300 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </div>
        ))}
        <div
          className={`p-3 text-center rounded cursor-pointer font-semibold border transition-all duration-300 ${
            selectedDept === ""
              ? "bg-teal-500 text-white border-teal-500"
              : "bg-white text-blue-900 border-blue-300 hover:bg-blue-100"
          }`}
          onClick={() => setSelectedDept("")}
        >
          All
        </div>
      </div>

      {selectedDept && (
        <div className="relative">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">
            {selectedDept} Images
          </h3>
          <Slider {...departmentSliderSettings}>
            {filteredItems.map((item, index) => (
              <div key={index} className="px-2">
                <div className="relative overflow-hidden rounded-lg flex items-center justify-center h-[400px]">
                  <div
                    className="absolute inset-0 z-0 blur-xl scale-110 bg-center bg-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 object-contain max-h-full max-w-full"
                  />
                  <div className="absolute bottom-0 bg-teal-950 bg-opacity-60 text-cyan-500 text-center text-sm px-4 py-2 w-full z-20">
                    <div className="font-bold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

const SampleNextArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-teal-950 text-justify justify-center items-center text-cyan-500 text-3xl rounded-full p-2 shadow-md focus:outline-none"
    >
      ›
    </button>
  );
};

const SamplePrevArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30  bg-teal-950 text-justify justify-center items-center text-cyan-500 text-3xl rounded-full p-2 shadow-md focus:outline-none"
    >
      ‹
    </button>
  );
};

export default FacilityTour;
