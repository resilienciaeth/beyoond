import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
 

const Nav = () => {
    const [nav, setNav] = useState(true);

  
    return (
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-black">
        <h1 className="w-full">BEYOOND</h1>
        <ul className="hidden">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
          <button className="uppercase text-[15px] border-black border-2 rounded-[6px] px-6 py-3 hover:bg-black hover:text-white hover:border-white">Join Pre-List</button>
        </ul>
        <div className='cursor-pointer' onClick={() => setNav(!nav)}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
      </nav>
  )
}

export default Nav
