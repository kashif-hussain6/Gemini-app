import React from "react";

const Card = ({ text, icon }) => {
  return (
    <div className="relative p-4 flex flex-col justify-between bg-[#e6eaf1] hover:bg-gray-300 duration-100 rounded-2xl h-[200px] sm:h-[220px] w-48 flex-shrink-0">
      <div className="flex-grow">
        <p className="text-lg mb-2 text-black opacity-80">{text}</p>
      </div>
      <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
        <img src={icon} alt="Icon" className="w-6 h-6 text-gray-500" />
      </div>
    </div>
  );
};

export default Card;
