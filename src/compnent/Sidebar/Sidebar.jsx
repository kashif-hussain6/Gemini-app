import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FaPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";


function Sidebar() {
  const [extended, setExtend] = useState(false);
  
  return (
    <div onClick={()=>setExtend(prev=> !prev)}  className={`sidebar h-screen  bg-[#f0f4f9] flex flex-col p-4 ${extended ? "w-60" : "w-20"}`}>
      <div className="top flex items-center mb-4">
       
        <IoIosMenu className="w-6 h-6 "/>
      </div>
      <div className="middle flex flex-col flex-grow">
        <div
          className={`new-chat flex items-center  mb-4 cursor-pointer ${
            extended ? "bg-[#e6eaf1] p-2 rounded-full" : ""
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
                className="w-5 mr-2"
                src={assets.message_icon}
                alt="Message icon"
              />
              <p className="text-xs">CSS Unit Conversion</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col space-y-2">
        <div className="bottom-item flex items-center cursor-pointer">
          <img
            className="w-5 mr-2"
            src={assets.question_icon}
            alt="Help icon"
          />
          {extended ? <p className="text-xs">Settings</p> : null}
        </div>
        <div className="bottom-item flex items-center cursor-pointer">
          <img
            className="w-5 mr-2"
            src={assets.history_icon}
            alt="Activity icon"
          />
          {extended ? <p className="text-xs">Activity</p> : null}
        </div>
        <div className="bottom-item flex items-center cursor-pointer">
          <img
            className="w-5 mr-2"
            src={assets.setting_icon}
            alt="Settings icon"
          />
          {extended ? <p className="text-xs">Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
