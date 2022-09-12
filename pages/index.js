/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import images from '../public/assets';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="font-sfpro text-black bg-beyond-1">
      {/* Header */}
      <div className="relative bg-render nm:bg-renderdesktop bg-cover bg-no-repeat h-screen">
        <div className="flex h-full flex-col ml-5 nm:ml-16 justify-center items-start">
          <h1 className="text-white mt-[25rem] text-[4vh] nm:text-[5vh]  nm:mt-0 mr-10 font-sfpro font-bold leading-[5vh] nm:leading-[95px] nm:w-[50vh]">
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
            <p className="text-[35px] nm:text-[60px] font-bold">$300 USD</p>
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
      {/* Utilidades */}
      <div className=" mt-10 flex flex-col items-center justify-center sm:justify-start ">
        <div className="flex">
          <h1 className="text-[25px] font-bold">What are the utilities?</h1>
        </div>
        <div className="mt-10  w-full">
          <div className="border-t-[1px] border-b-[1px] border-t-black border-black w-full">
            <div className="flex flex-row py-4 space-x-4">
              <div className="flex justify-start ml-4 w-[85%]">
                <p className="text-[16px]">01. A Private Space in the Metaverse.</p>
              </div>
              <div className="flex w-[15%] justify-center mr-2 items-center">
                <Image src={images.utilitymenu} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-t-black border-black w-full">
            <div className="flex flex-row py-4 space-x-4">
              <div className="flex justify-start ml-4 w-[85%]">
                <p className="text-[16px]">02. Private Virtual Events.</p>
              </div>
              <div className="flex w-[15%] justify-center mr-2 items-center">
                <Image src={images.utilitymenu} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-t-black border-black w-full">
            <div className="flex flex-row py-4 space-x-4">
              <div className="flex justify-start ml-4 w-[85%]">
                <p className="text-[16px]">03. Priority Access to Future Projects.</p>
              </div>
              <div className="flex w-[15%] justify-center mr-2 items-center">
                <Image src={images.utilitymenu} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-t-black border-black w-full">
            <div className="flex flex-row py-4 space-x-4">
              <div className="flex justify-start ml-4 w-[85%]">
                <p className="text-[16px]">04. Access to a Gated Community.</p>
              </div>
              <div className="flex w-[15%] justify-center mr-2 items-center">
                <Image src={images.utilitymenu} />
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-t-black border-black w-full">
            <div className="flex flex-row py-4 space-x-4">
              <div className="flex justify-start ml-4 w-[85%]">
                <p className="text-[16px]">05. Build the Future with us.</p>
              </div>
              <div className="flex w-[15%] justify-center mr-2 items-center">
                <Image src={images.utilitymenu} />
              </div>
            </div>
          </div>
        </div>
        {/* Metaverse Compatibility */}
        <div className="mt-10">
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
      </div>
      {/* Diseña tu mente */}
      <div className="h-screen flex flex-col bg-greend items-center justify-center bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-[7px] uppercase">View on Spatial</p>
          <h1 className="text-[35px]">DESIGN YOUR MIND</h1>
          <button className="bg-[#E6E6E6] text-[8px] px-5 py-1">Explore</button>
        </div>
      </div>
      {/* conoce el team */}
      <div className="h-auto">
        <div className="px-8">
          <p className="text-[8px]">About The Creators</p>
          <h1 className="text-[36px]">BEYOOND TEAM</h1>
          <div className="mt-6 space-y-5">
            <p className="text-[11px]">
              Michel Rojkind Halpert nació en México y estudió en la Universidad Iberoamericana ubicada en la Ciudad de México.
            </p>
            <p className="text-[11px]">
              Es reconocido como un emblema de la arquitectura internacional por haber participado en la construcción de numerosos proyectos exitosos alrededor del mundo.
            </p>

            <p className="text-[11px]">
              Hoy se encuentra profundamente conectado a la introspección del ser y ha dado nacimiento a este proyecto para reflexionar sobre cómo la realidad virtual cambiará nuestra vida profesional y espiritual.
            </p>
            <p className="text-[11px]">
              Bienvenidos a Beyoond.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full overflow-scroll no-scrollbar select-none items-start justify-start mt-10 space-x-4">
          <div className="min-w-[80%] flex ml-8">
            <Image src={images.rojkind} className="" />
          </div>
          <div className="min-w-[80%] flex">
            <Image src={images.rojkind} />
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
