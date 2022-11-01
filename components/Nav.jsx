import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black">
      <h1 className="w-full">BEYOOND</h1>
      <ul className="hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} onKeyDown={handleNav} role="presentation">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }

      </div>
      <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-700 z-10 h-full bg-beyond-1">
        <ul className="pt-24 uppercase">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
