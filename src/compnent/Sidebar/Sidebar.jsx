import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

function Sidebar() {
  const [extended, setExtend] = useState(false);

  return (
    <div
      className={`h-screen bg-[#e5e7eb] flex flex-col p-2  ease-in-out duration-200 ${
        extended ? "translate-x w-60" : "-translate-x w-16"
      }`}
    >
      <div className={`w-full flex items-center ${extended ? "justify-start" : "justify-center" }`}>
        <spa>
          <IoIosMenu
            onClick={() => setExtend((prev) => !prev)}
            className="w-8 h-8  "
          />
        </spa>
      </div>
      <div className="middle flex flex-col  flex-grow mt-3 w-full">
        <div
          className={`new-chat flex items-center mb-4 cursor-pointer ${
            extended
              ? "bg-[#e6eaf1] rounded-full  justify-start "
              : "justify-center"
          }`}
        >
          <span className="bg-[#e6eaf1] p-2 rounded-full">
            <FaPlus className="w-4 h-4 " />
          </span>
          {extended ? <p className="text-sm">New chat</p> : null}
        </div>

        {extended ? (
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
        ) : null}
      </div>
      <div className="w-full flex flex-col space-y-3">
        <div
          className={`w-full flex  gap-2 items-center cursor-pointer ${
            extended ? "justify-start" : "justify-center"
          }`}
        >
          <img
            className="w-6 h-6 "
            src={assets.question_icon}
            alt="Help icon"
          />
          {extended ? <p className="text-sm">Help</p> : null}
        </div>
        <div
          className={`w-full flex  gap-2 items-center cursor-pointer ${
            extended ? "justify-start" : "justify-center"
          }`}
        >
          <img
            className="w-6 h-6"
            src={assets.history_icon}
            alt="Activity icon"
          />
          {extended ? <p className="text-sm">Activity</p> : null}
        </div>
        <div
          className={`w-full flex  gap-2 items-center cursor-pointer ${
            extended ? "justify-start" : "justify-center"
          }`}
        >
          <img
            className="w-6 h-6"
            src={assets.setting_icon}
            alt="Settings icon"
          />
          {extended ? <p className="text-sm">Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
