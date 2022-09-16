/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import images from '../public/assets';
import 'aos/dist/aos.css';
import Aos from 'aos';
import faq from '../components/Faq';
import Faq from '../components/Faq';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sfpro text-black bg-beyond-1">
      {/* Hero */}
      <div className="relative bg-render nm:bg-renderdesktop bg-cover bg-no-repeat h-screen">
        <div className="flex h-full flex-col ml-5 nm:ml-16 justify-center items-start">
          <h1 className="text-white mt-[25rem] text-[4vh] nm:text-[5vh]  nm:mt-0 mr-10 font-sfpro font-bold leading-[5vh] nm:leading-[70px] nm:w-[50vh]">
            Tu espacio virtual diseñado por Rojkind.
          </h1>
          <p className="text-[1.5vh] underline cursor-pointer font-sfpro text-white">
            Conocer más.
          </p>
        </div>
      </div>
      {/* Arquitectura */}
      <div className=" nm:h-[60vh]">
        <div className="flex bg-green bg-contain bg-center nm:bg-bottom bg-no-repeat nm: items-center nm:justify-center flex-col nm:flex-row h-full nm:px-[10rem]">
          <div className="flex flex-col justify-center items-center nm:px-10 nm:justify-center nm:items-start mt-20 nm:w-[40%]">
            <h1 className="text-[#303030] font-sfpro font-bold text-[27px] nm:text-[32px] text-center nm:leading-[32px] nm:text-left">Arquitectura y tecnología intangible.</h1>
            <p className="text-[15px] nm:text-[16px] mt-2 text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] ">Desafiando lo establecido y olvidando las leyes de la física, Michel Rojkind se traslada hacia el metaverso para construir allí espacios NFT que podrán ser transferidos dentro de la Web 3.0.</p>
            <p className="text-[15px] nm:text-[16px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">
              En este mundo virtual se encontrará con su comunidad para
              {' '}
              <span className="font-bold">reflexionar</span>
              {' '}
              sobre la sociedad y arquitectura del futuro.
            </p>
            <p className="text-[15px] nm:text-[16px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">Beyoond toma aquello que es inalcanzable en el campo tangible para hacerlo realidad.</p>
            <button className="mt-6 border-[1px] rounded-[0.3rem] border-black font-bold bg-transparent text-black py-2 px-10 text-[12px]">Discover</button>
          </div>
          <div className="flex nm:hidden flex-col items-center justify-center mt-[2rem] nm:w-[50%]">
            <Image src={images.render2} objectFit="contain" />
          </div>
          <div className="nm:flex hidden flex-col items-center rounded-md justify-center mt-[2rem] nm:w-[40%]">
            <Image src={images.render3} objectFit="contain" className="rounded-2xl" />
          </div>
        </div>
      </div>
      {/* Tarjeta */}
      <div className=" nm:h-auto flex mt-10 flex-col nm:flex-row-reverse">
        <div className=" nm:h-auto nm:w-[50%]  flex items-center nm:justify-center flex-col">
          <div className="font-bold text-[35px] nm:text-[70px] text-black">The Oasis.</div>
          <div className="flex flex-row mt-4 space-x-4">
            <div className="flex flex-row">
              <div>
                <Image src={images.creator} />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-[11px] text-gray-600 ">Creator</p>
                <p className="text-[12px]">Michael Rojkind</p>
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
            <p className="text-[35px] nm:text-[50px] font-bold">$300 USD</p>
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
          <Image src={images.nftcard} />
        </div>
        <div className="hidden nm:h-auto nm:w-[50%] mt-12 nm:flex justify-end">
          <Image src={images.nftcard2} objectFit="cover" />
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
      <div className="h-auto mt-[4rem] hidden  nm:flex border-t-2 border-b-2 border-black">
        <div className="w-full flex flex-row">
          {/* Compatibilities desktop */}
          <div className="w-[50%] px-[4rem] flex flex-col border-r-2 border-black">
            <div className="flex flex-col space-y-10 ">
              <div className="mt-10">
                <Image src={images.renderdesktop1} />
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
          <div className="w-[50%]">
            <Faq />
          </div>
        </div>
      </div>
      {/* conoce el team */}
      <div className="h-auto mt-20  nm:w-full">
        <div className="px-8 nm:flex nm:flex-row">
          <div className="nm:flex nm:flex-col nm:px-20 nm:justify-center nm:w-[40%]">
            <p className="text-[8px]">About The Creators</p>
            <h1 className="text-[36px]">BEYOOND TEAM</h1>
          </div>
          <div className="mt-6 space-y-5 nm:px-20 nm:w-[60%]">
            <div className="nm:flex nm:w-full nm:flex-col">
              <p className="text-[11px] nm:text-[15px]">
                Michel Rojkind Halpert nació en México y estudió en la Universidad Iberoamericana ubicada en la Ciudad de México.
              </p>
              <p className="text-[11px] nm:text-[15px]">
                Es reconocido como un emblema de la arquitectura internacional por haber participado en la construcción de numerosos proyectos exitosos alrededor del mundo.
              </p>

              <p className="text-[11px] nm:text-[15px]">
                Hoy se encuentra profundamente conectado a la introspección del ser y ha dado nacimiento a este proyecto para reflexionar sobre cómo la realidad virtual cambiará nuestra vida profesional y espiritual.
              </p>
              <p className="text-[11px] nm:text-[15px]">
                Bienvenidos a Beyoond.
              </p>
            </div>
          </div>
        </div>
        {/* mobile gallery */}
        <div className="flex nm:hidden flex-row w-full overflow-scroll no-scrollbar select-none items-start justify-start mt-10 space-x-4">
          <div className="min-w-[80%] flex ml-8">
            <Image src={images.rojkind} className="" />
          </div>
          <div className="min-w-[80%] flex">
            <Image src={images.rojkind} />
          </div>
        </div>
        {/* desktop gallery */}
        <div className="hidden nm:flex flex-row w-full overflow-scroll no-scrollbar select-none items-start justify-start mt-10 space-x-4 ">
          <div className="min-w-[80%] ml-[6rem] flex">
            <Image src={images.rojkinddesktop} className="" />
          </div>
          <div className="min-w-[80%] flex">
            <Image src={images.rojkinddesktop} />
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
                  Unique
                </p>
              </div>
              <div>
                <Image src={images.unique} objectFit="contain" />
              </div>
              <p className="text-[100px] leading-[6rem]">places</p>
            </div>
            <div className="flex items-center flex-col justify-center">
              <div className="flex flex-row items-center  space-x-8">
                <p className="text-[100px]">to</p>
                <div className="mt-4 px-1 ">
                  <Image src={images.meditate} />
                </div>
                <p className="text-[100px]">meditate</p>
              </div>
              <div className="flex flex-row items-center  space-x-8">
                <div className="mt-1 px-1">
                  <Image src={images.consciosuly} />
                </div>
                <p className="text-[100px]">consciously</p>
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
  );
}
export default Home;
