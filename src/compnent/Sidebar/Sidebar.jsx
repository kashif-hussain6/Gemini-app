import React from 'react';
import { assets } from '../../assets/assets';

function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="top">
        <img src={assets.menu_icon} alt="Menu Icon" />
      </div>
      <div className="bottom">
        {/* Add other content for the bottom section if needed */}
      </div>
    </div>
  );
}

export default Sidebar;
