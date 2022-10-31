import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import images from '../public/assets';

function MenuItems({ isMobile, active, setActive }) {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/nakedmeta';
      case 2: return '/';
      case 3: return '/';
      default: return '/';
    }
  };

  return (
    <ul className={`list-none flexCenter  flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Instagram', 'Contáctanos', 'Proyectos', 'Carreras'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row font-sfpro text-lg items-center font-semibold text-base text-black hover:text-slate-600 mx-3 ${active === item ? 'text-nft-black' : 'text-black'}`}
        >
          <Link href={generateLink(i)}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [active, setActive] = useState('Home');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flexBetween bg-beyond-1 w-full fixed z-10  flex-row ">
      <div className="flex mt-2 mb-4 px-4 flex-1 flex-row justify-start items-center ">
        <Link href="/">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo} width={127} height={61} />
          </div>
        </Link>
      </div>
      <div className="flex mt-4 mb-4 px-4 flex-initial flex-row justify-end ">
        <div className="hidden">
          <ul className="list-none flexCenter flex-row ">
            <MenuItems active={active} setActive={setActive} router={router} />
          </ul>
        </div>
        <div className="flex">
          {isOpen
            ? (
              <Image
                src={images.cross}
                objectFit="contain"
                width={20}
                height={20}
                alt="close"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Image
                src={images.menu}
                objectFit="contain"
                width={25}
                height={25}
                alt="close"
                onClick={() => setIsOpen(true)}

              />
            )}

          {isOpen && (
          <div className="fixed bg-beyond-1 h-screen z-10 inset-0 overflow-y-hidden top-10 md:top-12 nav-h flex justify-center items-center flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile className="items-center" />
            </div>
            <div className="p-4 border-t" />
          </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
