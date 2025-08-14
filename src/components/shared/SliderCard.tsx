import React from "react";

function SliderCard({ title, description, url }) {
  return (
    <div className="card-slider">
      <div className="border rounded-2xl shadow-md bg-white w-72 h-100 mx-auto flex flex-col overflow-hidden">
        {/* Image container */}
        <div className="h-150 w-full overflow-hidden rounded-t-2xl">
          <img src={url} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Text content */}
        <div className="flex flex-col mt-3 p-4 h-full">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
