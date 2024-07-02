import React from "react";
import { assets } from "../../assets/assets";
import Card from "../Card/Card";
import icon1 from "../../assets/bulb_icon.png";
import icon2 from "../../assets/bulb_icon.png";
import icon3 from "../../assets/bulb_icon.png";
import icon4 from "../../assets/bulb_icon.png";

function Main() {
  return (
    <div className="min-h-screen w-full">
      <div className="p-3 flex justify-between items-center w-full">
        <div className="w-full">
          <p className="ml-2 font-normal text-xl">Gemini</p>
        </div>
        <div className="flex items-center rounded-full w-auto">
          <img
            className="w-8 h-8 rounded-full"
            src={assets.user_icon}
            alt="User Icon"
          />
        </div>
      </div>
      <div className=" bg-white flex flex-col w-full ">
        <div className="flex flex-col text-center ">
          <div className="mx-auto w-[64%] flex flex-col justify-start ">
            <span className="w-full flex justify-start">
              <h1 className="text-6xl  font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                Hello, Kashif
              </h1>
            </span>
            <span className="flex justify-start">
              <p className="text-6xl text-gray-400 mt-4">
                How can I help you today?
              </p>
            </span>
          </div>
        </div>
        <div className="flex justify-center">

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 h-[200px] w-[66%] px-4 absolute">
          <Card text="As a social trend expert, explain a term" icon={icon1} />
          <Card text="Create a futuristic image of a car" icon={icon2} />
          <Card
            text="Find hotels for a New Year’s trip to San Francisco"
            icon={icon3}
          />
          <Card
            text="Suggest a Python library to solve a problem"
            icon={icon4}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
