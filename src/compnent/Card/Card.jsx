import React from 'react';

const Card = ({ text, icon }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <p className="text-lg text-center">{text}</p>
      <img src={icon} alt="icon" className="w-6 h-6 mt-4" />
    </div>
  );
}

export default Card;
