import React, { useState } from 'react';

import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

import images from '../public/assets';

function Navbar() {
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'SERVICE', link: '/' },
    { name: 'INSTAGRAM', link: '/' },
    { name: 'SPACE', link: '/' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="z-10 font-sfpro shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center text-black">
          BEYOOND
        </div>
        <div role="presentation" onClick={() => setOpen(!false)} onKeyDown={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden" />
        <ul className="md:flex text-[15px] text-black md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {
          Links.map((Link) => (
            <li key={Link.name} className="cursor-pointer text-[15px] md:ml-8 text-xl">
              <a href={Link.link} className="text-black text-[15px] hover:text-gray-700 cursor-pointer">{Link.name}</a>
            </li>
          ))
          }
          <div className="md:ml-6">
            <button className="uppercase text-[15px] border-black border-2 rounded-[6px] px-6 py-3 hover:bg-black hover:text-white hover:border-white">Join Pre-List</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
