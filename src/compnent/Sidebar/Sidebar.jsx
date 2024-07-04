import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div
      className={`h-screen bg-[#e5e7eb] flex flex-col p-2 ease-in-out duration-200 ${
        extended ? "w-60" : "w-16"
      }`}
    >
      <div className="w-full flex items-center justify-between mb-2">
        <IoIosMenu
          onClick={() => setExtended((prev) => !prev)}
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      <div className="middle flex flex-col flex-grow mb-4">
        {extended && (
          <div className="new-chat flex items-center cursor-pointer mb-2 rounded-full bg-[#e6eaf1] p-2">
            <FaPlus className="w-4 h-4 mr-2" />
            <p className="text-sm">New chat</p>
          </div>
        )}

        {extended && (
          <div className="recent mb-4">
            <p className="text-xs mb-2">Recent</p>
            <div className="recent-entry flex items-center mb-2">
              <img
                className="w-5 h-5 mr-2"
                src={assets.message_icon}
                alt="Message icon"
              />
              <p className="text-xs">CSS Unit Conversion</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom flex flex-col space-y-3">
        {extended && (
          <div className="w-full flex items-center cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.question_icon}
              alt="Help icon"
            />
            <p className="text-sm ml-2">Help</p>
          </div>
        )}

        {extended && (
          <div className="w-full flex items-center cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.history_icon}
              alt="Activity icon"
            />
            <p className="text-sm ml-2">Activity</p>
          </div>
        )}

        {extended && (
          <div className="w-full flex items-center cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.setting_icon}
              alt="Settings icon"
            />
            <p className="text-sm ml-2">Settings</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
