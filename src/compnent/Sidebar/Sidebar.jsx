import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { FaPlus } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Context } from "../../Context/ContextProvider";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { previousPrompt } = useContext(Context);

  return (
    <div className="flex">
      {/* Menu icon for small screens */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <IoIosMenu
          onClick={() => setExtended((prev) => !prev)}
          className="cursor-pointer w-8 h-8"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen transition-transform transform ${
          extended ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:flex lg:flex-col transition-all duration-300 ease-in-out ${
          extended ? "lg:w-60  sm:w-80" : "lg:w-16"
        } bg-gray-200 z-40`}
      >
        {/* Menu icon for large screens */}
        <div className="hidden lg:flex items-center mb-2 p-4">
          <IoIosMenu
            onClick={() => setExtended((prev) => !prev)}
            className={`cursor-pointer w-8 h-8  ${extended ? "ml-0" : "ml-1.5"}`}
          />
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col px-3 pt-16 lg:pt-0 h-screen">
          <div className="flex-grow mb-4">
            <div className="flex items-center cursor-pointer mb-2 rounded-full gap-2 bg-gray-100 p-2">
              <FaPlus className={`w-4 h-4 ${extended ? "ml-0" : "ml-1.5"}`} />
              {extended && <p className="text-sm">New chat</p>}
            </div>

            {extended && (
              <div className="mb-4">
                <p className="text-xs mb-2">Recent</p>
                <div className="flex flex-col mb-2">
                  {previousPrompt && previousPrompt.length > 0 ? (
                    previousPrompt.map((item, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <img
                          className="w-5 h-5 mr-2"
                          src={assets.message_icon}
                          alt="Message icon"
                        />
                        <p className="text-xs">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs">No recent prompts</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={`flex flex-col space-y-3 ${extended ? "pl-0" : "pl-3"}`}>
            <div className="flex items-center cursor-pointer">
              <img className="w-6 h-6" src={assets.question_icon} alt="Help icon" />
              {extended && <p className="text-sm ml-2">Help</p>}
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                className="w-6 h-6"
                src={assets.history_icon}
                alt="Activity icon"
              />
              {extended && <p className="text-sm ml-2">Activity</p>}
            </div>

            <div className="flex items-center cursor-pointer">
              <img
                className="w-6 h-6"
                src={assets.setting_icon}
                alt="Settings icon"
              />
              {extended && <p className="text-sm ml-2">Settings</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
