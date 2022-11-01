/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import images from '../public/assets';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Faq from '../components/Faq';
import Main from '../components/Main';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
    {/* navbar */}
    <nav className="flex justify-between items-center nm:h-24 h-14 max-w-[1240px] mx-auto px-4  text-black">
        <div className='max-w-[100px] nm:max-w-[205px]'>
        <Image src={images.logo} width={205} height={95} />
        </div>
        <ul className="hidden nm:flex space-x-8 uppercase text-[15px]">
          <li className="p-4">FAQ</li>
          <li className="p-4">Twitter</li>
          <button className="uppercase text-[15px] border-black border-2 rounded-[6px] px-4 py-1 hover:bg-black hover:text-white hover:border-white">Join Pre-List</button>
        </ul>
        <div className='cursor-pointer z-20 block nm:hidden' onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-full border-r border-r-gray-700 z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-100%]' }>
          <div className='mt-10 px-6'>
          <Image src={images.logo} width={200} height={100} />
          </div>
          <ul className="pt-24 px-10 uppercase font-bold">
            <li className="p-4 text-[30px]">FAQ</li>
            <li className="p-4 text-[30px]">Twitter</li>
            <li className="p-4 text-[30px]">Resources</li>
            <button className="uppercase text-[30px] border-black border-2 rounded-[6px] ml-2 mt-4 px-4 py-1 hover:bg-black hover:text-white hover:border-white">Join Pre-List</button>
          </ul>
        </div>
        </nav>
    <div className="font-sfpro overflow-x-hidden text-black bg-beyond-1 ">
      <Main />
      {/* Hero */}
      {/* Arquitectura */}
      <div className=" nm:h-[60vh]">
        <div className="flex bg-green bg-contain bg-center nm:bg-bottom bg-no-repeat nm: items-center nm:justify-center flex-col nm:flex-row h-full nm:px-[10rem]">
          <div className="flex flex-col justify-center items-center nm:px-10 nm:justify-center nm:items-start mt-20 nm:w-[40%]">
            <h1 className="text-[#303030] font-sfpro font-bold text-[24px] nm:text-[24px] text-center nm:leading-[32px] nm:text-left">Una propuesta arquitectónica, tecnológica y colectiva.</h1>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">
            Beyoond será el punto de partida para el nacimiento de una {' '}
              <span className="font-bold">comunidad de amantes</span>
              {' '}  de la arquitectura que experimentarán aprendizaje en tiempo real.
              
            </p>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">
            {' '}
              <span className="font-bold">Cada Comprador</span>
              {' '} recibirá un espacio diseñado por Rojkind Arquitectos que invita a transitar una experiencia emocional. Estas construcciones inspiradas en estructuras antiguas funcionan como un portal de escape hacia otras realidades y temporalidades.
            </p>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">En este interesante ambiente {' '}
              <span className="font-bold">Michel Rojkind</span>
              {' '}  se encontrará con la comunidad para reflexionar sobre el ser y la arquitectura del futuro. </p>
            <button className="mt-6 border-[1px] rounded-[0.3rem] border-black font-bold bg-transparent text-black py-2 px-10 text-[12px]">Discover</button>
          </div>
          <div className="flex nm:hidden flex-col items-center justify-center mt-[2rem] nm:w-[50%]">
            <Image src={images.section2mb} objectFit="contain" className='rounded-2xl' />
          </div>
          <div className="nm:flex hidden flex-col items-center rounded-md justify-center mt-[2rem] nm:w-[40%]">
            <Image src={images.section2} objectFit="contain" className="rounded-2xl" />
          </div>
        </div>
      </div>
      {/* Tarjeta */}
      <div className=" nm:h-auto flex mt-10 flex-col nm:flex-row-reverse">
        <div className=" nm:h-auto nm:w-[50%]  flex items-center nm:justify-center flex-col">
          <div className="font-bold text-[35px] nm:text-[70px] text-black">AXKAN.</div>
          <div className="flex flex-row mt-4 space-x-4">
            <div className="flex flex-row">
              <div>
                <Image src={images.creator} />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-[11px] text-gray-600 ">Creator</p>
                <p className="text-[12px]">Michel Rojkind</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <Image src={images.creator2} />
              </div>
              <div className="flex flex-col px-2">
                <div className="text-[11px] nm:text-[12px] text-gray-600 ">Limited Supply</div>
                <p className="text-[12px]">1000 NFTs</p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#CBCBCB] mt-4 nm:mt-10 w-[80%] nm:w-[40%] rounded-3xl flex flex-col items-center">
            <p className="text-[10px] nm:text-[15px] mt-4 nm:mt-10">Precio de lanzamiento</p>
            <p className="text-[35px] nm:text-[50px] font-bold">$100 USD</p>
            <div className="flex flex-col mt-4 mb-6 nm:mb-10">
              <p className="text-[8px] text-center">Public Sale Starts on:</p>
              <div className="flex flex-row items-center justify-between space-x-16 mt-4 nm:mt-10">
                <div className="text-center">
                  <h1 className="text-[25px] nm:text-[30px] font-bold">15</h1>
                  <p className="text-[10px] nm:text-[15px] text-gray-600">Days</p>
                </div>
                <div className="text-center">
                  <h1 className="text-[25px] nm:text-[30px] font-bold">15</h1>
                  <p className="text-[10px] nm:text-[15px] text-gray-600">Hours</p>
                </div>
                <div className="text-center">
                  <h1 className="text-[25px] nm:text-[30px] font-bold">15</h1>
                  <p className="text-[10px] nm:text-[15px] text-gray-600">Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-[80%] nm:w-[40%] flex flex-col space-y-4">
            <button className="bg-[#2373EA] text-white text-bold text-[10px] py-2 rounded-3xl">Enter the Pre-Sale</button>
            <button className="border-2 border-[#CBCBCB] text-gray-600 text-bold text-[10px] py-2 rounded-3xl">View Space in 3D</button>
          </div>
        </div>
        <div className="nm:hidden nm:h-auto nm:w-[50%] mt-12 flex justify-center mb-10">
          <Image src={images.gallerymb} />
        </div>
        <div className="hidden nm:h-auto nm:w-[50%] mt-12 nm:flex justify-end">
          <Image src={images.gallery} objectFit="cover" />
        </div>
      </div>
      {/* Utilidades mobile */}
      <div className="nm:hidden mt-10 flex flex-col items-center justify-center sm:justify-start w-full">
        <Faq />
      </div>
      {/* Metaverse Compatibility */}
      <div className="mt-10 nm:hidden">
        <div className="px-8">
          <Image src={images.render3} className="rounded-3xl" />
        </div>
        <div className="flex w-full flex-col justify-center ">
          <div className="flex flex-col mt-10">
            <h1 className="text-center">Metaverse Compatibility</h1>
            <div className="flex flex-row items-center justify-center space-x-10 mt-5 ">
              <div className="flex flex-col">
                <p className="text-[10px] underline text-center ">Unity</p>
                <p className="text-[10px] underline text-center ">Decentraland</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] underline text-center ">VR Chat</p>
                <p className="text-[10px] underline text-center ">Unreal Engine 5</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] underline text-center ">Spatial.io</p>
                <p className="text-[10px] underline text-center ">Nvidia Omniverse</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-row flex mt-10 px-10">
              <div className="flex flex-col items-start w-[50%]">
                <div className="flex items-start">
                  <h1 className="text-[14px] font-bold text-left">FBX</h1>
                </div>
                <div className="space-y-2 w-[80%] mt-2">
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-[50%] ml-5">
                <div className="flex items-start">
                  <h1 className="text-[14px] font-bold text-left">FBX</h1>
                </div>
                <div className="space-y-2 w-[80%] mt-2">
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row flex mt-10 px-10">
              <div className="flex flex-col items-start w-[50%]">
                <div className="flex items-start">
                  <h1 className="text-[14px] font-bold text-left">USD</h1>
                </div>
                <div className="space-y-2 w-[80%] mt-2">
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-[50%] ml-5">
                <div className="flex items-start">
                  <h1 className="text-[14px] font-bold text-left">VOX</h1>
                </div>
                <div className="space-y-2 w-[80%] mt-2">
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                      Highest Fidelity | 378MB
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Utilidades desktop */}
      <div className="h-auto mt-[12rem] hidden  nm:flex border-t-2 border-b-2 border-black">
        <div className="w-full flex flex-row">
          {/* Compatibilities desktop */}
          <div className="w-[50%] px-[4rem] flex flex-col border-r-2 border-black">
            <div className="flex flex-col space-y-10 ">
              <div className="mt-10">
                <Image src={images.utilities1} width={714} height={415} />
              </div>
              <div className="">
                <div className="space-y-6">
                  <p className="text-[15px]">Metaverse Compatibility</p>
                  <div className="flex mt-6 flex-row justify-between text-[17px] underline font-bold">
                    <div className="flex  flex-col">
                      <p>Decentraland</p>
                      <p>Spatial.io</p>
                    </div>
                    <div className="flex flex-col">
                      <p>VR Chat</p>
                      <p>Unity</p>
                    </div>
                    <div className="flex flex-col">
                      <p>Unreal Engine 5</p>
                      <p>Nvidia Omniverse</p>
                    </div>
                  </div>
                  <div>
                    <p>
                      Files Formats Included
                    </p>
                    <div className="flex flex-row space-x-20 w-full">
                      <div className="mt-10 w-[25%] space-y-4">
                        <h1 className="font-bold text-[17px]">FBX</h1>
                        <div className=" space-y-2 flex flex-col">
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                              Highest Fidelity | 378MB
                            </h1>
                          </div>
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                              Highest Fidelity | 378MB
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 space-y-4 w-[25%]">
                        <h1 className="font-bold text-[17px]">GLB</h1>
                        <div className=" space-y-2">
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                              Highest Fidelity | 378MB
                            </h1>
                          </div>
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                              Lowest Fidelity | 37MB
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 space-y-4 w-[25%]">
                        <h1 className="font-bold text-[17px]">VOX</h1>
                        <div className=" space-y-2">
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                              Highest Fidelity | 378MB
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 mb-10 space-y-4 w-[25%]">
                      <h1 className="font-bold text-[17px]">USD</h1>
                      <div className=" space-y-2 mb-10">
                        <div className="bg-[#D9D9D9] py-1">
                          <h1 className="text-[#5A5A5A] text-center text-[12px]">
                            Highest Fidelity | 378MB
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Utilities desktop */}
          <Faq />
        </div>
      </div>
      {/* diseña tu interior */}
      <div className="h-screen bg-green2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            Explora el espacio
          </div>
          <div className="md:text-[80px] text-[25px] uppercase">
            Contempla tu interior.
          </div>
          <div>
            <button className="md:mt-6 border-[1px] rounded-[0.3rem] bg-white text-black md:py-2 py-1 md:px-10 px-6 text-[12px]">Descúbrelo</button>
          </div>
        </div>
      </div>
      {/* conoce el team */}
      <div className="h-auto mt-20  nm:w-full">
        <div className="nm:flex nm:flex-col justify-center nm:justify-center items-center">
          <p className="text-center text-[10px] nm:text-[18px]">About The Creators</p>
          <h1 className=" text-[40px] text-center nm:text-[90px]">Conoce al<br />Equipo Creativo</h1>
          <p className="text-[12px] nm:text-[15px] text-center px-10 nm:px-[25rem]">
            Michel Rojkind junto a su equipo de Rojkind Arquitectos une fuerzas con Naked Meta para lanzar Beyoond, un proyecto que quiere ayudar a miles de arquitectos alrededor del mundo a descubrir el apasionante mundo de diseñar espacios que desafian las leyes de la fisica. 
          </p>
          {/*meet the team desktop */}
          <div className="hidden nm:flex flex-row nm:space-x-12 space-x-0 px-8  mt-[5rem] ">
            <div className='min-w-[180px]'>
              <Image src={images.rojkind} />
            </div>
            <div className='min-w-[180px]'>
              <Image src={images.diego} />
            </div>
            <div className='min-w-[180px]'>
              <Image src={images.nico} />
            </div>
            <div className='min-w-[180px]'>
              <Image src={images.dani} />
            </div>
            <div className='min-w-[180px]'>
              <Image src={images.mati} />
            </div>
          </div>
          <div className="hidden nm:flex flex-row space-x-12 mt-[5rem]">
            <div>
              <Image src={images.mike} />
            </div>
            <div>
              <Image src={images.tomi} />
            </div>
            <div>
              <Image src={images.jose} />
            </div>
            <div>
              <Image src={images.kevin} />
            </div>
          </div>
          {/*meet the team mobile */}
          <div className='flex px-4 flex-col nm:hidden overflow-x-hidden space-y-6'>
          <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image src={images.rojkind} />
              </div>
              <div>
              <Image src={images.diego} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image src={images.nico} />
              </div>
              <div>
              <Image src={images.dani} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image src={images.mati} />
              </div>
              <div>
              <Image src={images.mike} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image src={images.tomi} />
              </div>
              <div>
              <Image src={images.jose} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image src={images.kevin} />
              </div>
              <div className='min-w-[160px]'>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* unique places mobile */}
      <div className="h-auto mt-20 flex nm:hidden flex-col items-center justify-center">
        <div className="flex w-[80%] flex-col items-center justify-center rounded-xl border-[1px] border-black">
          <div className="flex flex-col px-6">
            <div className="flex flex-row items-center justify-center w-full mt-2 space-x-2">
              <div className="">
                <p className="text-[26px] text-left">
                  Unique
                </p>
              </div>
              <div className="">
                <Image src={images.lugares} objectFit="contain" />
              </div>
            </div>
            <div className="flex items-center flex-col justify-center">
              <p className="text-[100px] leading-[6rem]">places</p>
              <div className="mt-4 px-1 ">
                <Image src={images.meditar} />
              </div>
              <p className="text-[55px]">to meditate</p>
              <div className="mt-1 px-1">
                <Image src={images.consciente} />
              </div>
              <p className="text-[55px]">consciously</p>
            </div>
          </div>
        </div>
      </div>
      {/* unique places desktop */}
      <div className="h-auto mt-20 nm:flex hidden flex-col items-center justify-center">
        <div className="flex w-[80%] flex-col px-6  rounded-xl border-[1px] border-black">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center w-full mt-2 space-x-10">
              <div>
                <p className="text-[100px] text-left">
                  Ambientes
                </p>
              </div>
              <div>
                <Image src={images.unique} objectFit="contain" />
              </div>
              <p className="text-[100px] leading-[6rem]">únicos</p>
            </div>
            <div className="flex items-center flex-col justify-center">
              <div className="flex flex-row items-center  space-x-8">
                <p className="text-[100px]">para</p>
                <div className="mt-4 px-1 ">
                  <Image src={images.meditate} />
                </div>
                <p className="text-[100px]">meditar</p>
              </div>
              <div className="flex flex-row items-center  space-x-8">
                <div className="mt-1 px-1">
                  <Image src={images.consciosuly} />
                </div>
                <p className="text-[100px]">conscientemente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="h-[60vh] mt-20 bg-black flex flex-col items-center justify-between">
        <div className="mt-20">
          <div className="flex items-center justify-center">
            <Image src={images.logofooter} />
          </div>
          <div className="flex flex-row mt-10 justify-between w-full space-x-16">
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px]">Learn</p>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-white text-left text-[12px] font-bold">Create</p>
                <p className="text-white text-[12px] font-bold">Collect</p>
                <p className="text-white text-[12px] font-bold">Sell</p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px]">Company</p>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-white text-[12px] font-bold">Careers</p>
                <p className="text-white text-[12px] font-bold">Help Center</p>
                <p className="text-white text-[12px] font-bold">Subscribe</p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px]">Connect</p>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-white text-[12px] font-bold">Twitter</p>
                <p className="text-white text-[12px] font-bold">Instagram</p>
                <p className="text-white text-[12px] font-bold">Discord</p>
              </div>
            </div>
          </div>
          <div className="flex text-white mt-20 text-[8px] text-center items-center justify-center">
            <p>Powered by Naked Meta & Rojkind Arquitectos.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;
