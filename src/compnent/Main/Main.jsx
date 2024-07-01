import React from 'react';
import { assets } from '../../assets/assets';

function Main() {
  return (
    <div className='pt-6 flex justify-between w-full'>
      <p className='ml-2'>Gemini</p>
      <div className=''>
        <img className='w-[40px] rounded-[50%]' src={assets.user_icon} alt="" />
      </div>
    </div>
  );
}

export default Main;
