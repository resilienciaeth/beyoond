/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import Aos from 'aos';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation, UseTranslation } from 'next-i18next';

import images from '../public/assets';
import Main from '../components/Main';
import Gallery from '../components/Gallery';
import Card from '../components/Card';
import Faqfinal from '../components/faqfinal';


export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const arc = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav)
  }

  const {t} = useTranslation();

  return (
    <div>
     <Head>
        <title>Beyoond - Home</title>
        <meta name="description" content="Beyoond - live now" />
      </Head>
    {/* navbar */}
    <nav className="flex font-sfpro justify-between items-center nm:h-24 h-14  px-4  text-black">
        <div className='max-w-[100px] nm:max-w-[205px]'>
        <Image src={images.logo} width={205} height={95} />
        </div>
        <ul className="hidden font-bold nm:flex nm:mr-10 space-x-[5rem] uppercase text-[15px]">
          <li onClick={() => window.open('/FAQ', '_self')} className="p-4 cursor-pointer">FAQ</li>
          <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="uppercase text-[15px] border-black border-2 rounded-[6px] px-4 py-1 hover:bg-black hover:text-white hover:border-white">{t('navbar_button')}</button>
        </ul>
        <div className='cursor-pointer z-20 block nm:hidden' onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-full border-r border-r-gray-700 z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-100%]' }>
          <div className='mt-10 px-6'>
          <Image src={images.logo} width={200} height={100} />
          </div>
          <ul className="pt-24 px-10 uppercase font-bold">
            <li onClick={() => window.open('/FAQ', '_self')} className="p-4 text-[30px]">FAQ</li>
            <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="uppercase text-[12px] nm:text-[30px] border-black border-2 rounded-[6px] ml-2 mt-4 px-4 py-1 hover:bg-black hover:text-white hover:border-white">{t('navbar_button')}</button>
          </ul>
        </div>
        </nav>
    <div className="font-sfpro overflow-x-hidden text-black bg-beyond-1 ">
    <div className="main font-sfpro overflow-x-auto">
      <video preload="true" autoPlay muted loop playsInline >
        <source src="/assets/videobanner.mp4.mp4" typeof="video/mp4" />
      </video>
      <div className=" absolute
        h-full top-0 flex flex-col justify-center mt-[13rem] nm:mt-[12rem] nm:ml-[3rem] nm:justify-center items-start text-white">
        <h1 className="font-bold  ml-10 text-[32px] nm:text-[6vh]">
        {t('common:title_1')}
          {' '}
          <br />
          {t('common:title_2')}
          <br />
          {' '}
          {t('common:title_3')}
        </h1>
        <Link to='test-1' spy={true} smooth={true} offset={50} duration={500} className="font-bold underline ml-10 cursor-pointer text-[20px] hover:text-black">
        {t('common:button1')}
        </Link>
      </div>
    </div>
      {/* Arquitectura */}
        <div id='test-1'  className="flex bg-green nm:h-[60vh] bg-contain bg-center nm:bg-bottom bg-no-repeat nm: items-center nm:justify-start nm:space-x-10 flex-col nm:flex-row h-full nm:px-[10rem]">
          <div className="flex flex-col justify-center items-center nm:px-10 nm:justify-center nm:items-start mt-10 nm:w-[50%]">
            <h1 className="text-[#303030] font-sfpro font-bold text-[24px] nm:text-[30px] text-center nm:leading-[32px] nm:text-left">{t('section2_title')}</h1>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">{t('section2_p1')}
            {' '}
              <span className="font-bold">{t('section2_p1bold')}</span>
              {' '}  {t('section2_p1cont')}
            </p>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">
            {' '}
              <span className="font-bold">{t('section2_p2bold')}</span>
              {' '} {t('section2_p2')}
            </p>
            <p className="text-[15px] nm:text-[15px] text-black font-sfpro text-center nm:text-left nm:px-0 px-6 leading-[18px] mt-4">{t('section2_p3')}{' '}
              <span className="font-bold">{t('section2_p3bold')}</span>
              {' '}  {t('section2_p3cont')} </p>
            <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="mt-6 border-[1px] rounded-[0.3rem] border-black font-bold bg-transparent text-black hover:bg-black hover:text-white hover:border-white py-2 px-10 text-[12px]">{t('button2')}</button>
          </div>
          <div className="flex nm:hidden flex-col items-center justify-center mt-[2rem] nm:w-[50%]">
            <Image src={images.section2mb} objectFit="contain" className='rounded-2xl' />
          </div>
          <div className="nm:flex hidden flex-col items-center rounded-md justify-center mt-[2rem] nm:w-[40%]">
            <Image src={images.section2} objectFit="contain" className="rounded-2xl" />
          </div>
        </div>
      {/* Tarjeta */}
      <div className="w-full flex mt-10 flex-col nm:flex-row-reverse">
        <div className="nm:h-auto nm:w-[40%] flex items-center nm:items-start nm:justify-center flex-col">
          <div className="font-bold text-center text-[35px] nm:text-[70px] nm:ml-6 text-black">
            <h1 className='text-center'>AXK4N</h1>
          </div>
          <div className="flex nm:ml-4 flex-row mt-4 space-x-4">
            <div className="flex flex-row">
              <div>
                <Image src={images.creator} />
              </div>
              <div className="flex flex-col px-2">
                <p className="text-[11px] text-gray-600 ">{t('creator')}</p>
                <p className="text-[12px]">Michel Rojkind</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <Image src={images.rock} width={45} height={45} />
              </div>
              <div className="flex flex-col px-2">
                <div className="text-[11px] nm:text-[12px] text-gray-600 ">{t('supply')}</div>
                <p className="text-[12px]">1000</p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#CBCBCB] mt-4 nm:mt-10 w-[80%] nm:w-[40%] nm:min-w-[300px] rounded-3xl flex flex-col items-center">
            <p className="text-[10px] nm:text-[15px] mt-4 nm:mt-10">{t('price')}</p>
            <p className="text-[35px] nm:text-[50px] font-bold">$100 USD</p>
            <div className="flex flex-col mt-4 mb-6 nm:mb-10">
              <p className="text-[8px] nm:text-[15px] text-center">{t('presale')}</p>
              <div className="flex flex-row items-center justify-between space-x-16 mt-4 nm:mt-10">
              <h1 className='text-[30px] font-bold'>
                COMING SOON
              </h1>
              </div>
            </div>
          </div>
          <div className="mt-5 w-[80%] nm:w-[40%] nm:min-w-[300px] flex flex-col space-y-4">
            <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="bg-[#2373EA] hover:bg-beyond-1 hover:border-2 hover:border-[#CBCBCB] hover:text-gray-600 text-white text-bold text-[12px] py-2 rounded-3xl">{t('button3')}</button>
            <button onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="border-2 border-[#CBCBCB] text-gray-600 bg-beyond-1 hover:bg-[#2373EA] hover:text-white text-bold text-[12px] py-2 rounded-3xl">{t('button4')}</button>
          </div>
        </div>
        {/*gallery */}
       <Gallery />
      </div>
      {/* Utilidades mobile */}
      <div className="nm:hidden mt-10 flex flex-col items-center justify-center sm:justify-start w-full">
      <Faqfinal />
      </div>
      {/* Metaverse Compatibility */}
      <div className="mt-10 nm:hidden">
        <div className="px-8">
          <Image src={images.render3} className="rounded-3xl" />
        </div>
        <div className="flex w-full flex-col justify-center ">
          <div className="flex flex-col mt-10">
            <h1 className="text-center">{t('Compatibility')}</h1>
            <div className="flex flex-row items-center justify-center space-x-10 mt-5 ">
              <div className="flex flex-col">
              <p onClick={() => window.open('https://www.spatial.io/')} className="text-[10px] underline text-center ">Spatial.io</p>
                <p onClick={() => window.open('https://decentraland.org/')} className="text-[10px] underline text-center ">Decentraland</p>
              </div>
              <div className="flex flex-col">
                <p onClick={() => window.open('https://hello.vrchat.com/')} className="text-[10px] underline text-center ">VR Chat</p>
                <p onClick={() => window.open('https://www.unrealengine.com/en-US/unreal-engine-5')} className="text-[10px] underline text-center ">Unreal Engine 5</p>
              </div>
              <div className="flex flex-col">
              <p onClick={() => window.open('https://unity.com/')} className="text-[10px] underline text-center ">Unity</p>
                <p onClick={() => window.open('https://www.nvidia.com/en-us/omniverse/')} className="text-[10px] underline text-center ">Nvidia Omniverse</p>
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
                      {t('File_size')} | 2.5MB
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-[50%] ml-5">
                <div className="flex items-start">
                  <h1 className="text-[14px] font-bold text-left">GLB</h1>
                </div>
                <div className="space-y-2 w-[80%] mt-2">
                  <div className="bg-[#D9D9D9] py-1">
                    <h1 className="text-[#5A5A5A] text-center text-[8px]">
                    {t('File_size')} | 30MB
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
                    {t('File_size')} | 4MB
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
                  <p className="text-[15px]">{t('Compatibility')}</p>
                  <div className="flex mt-6 flex-row justify-between text-[17px] underline font-bold">
                    <div className="flex  flex-col">
                      <p onClick={() => window.open('https://www.spatial.io/')}>Spatial.io</p>
                      <p onClick={() => window.open('https://decentraland.org/')}>Decentraland</p>
                      
                    </div>
                    <div className="flex flex-col">
                      <p onClick={() => window.open('https://hello.vrchat.com/')}>VR Chat</p>
                      <p onClick={() => window.open('https://unity.com/')}>Unity</p>
                    </div>
                    <div className="flex flex-col">
                      <p onClick={() => window.open('https://www.unrealengine.com/en-US/unreal-engine-5')}>Unreal Engine 5</p>
                      <p onClick={() => window.open('https://www.nvidia.com/en-us/omniverse/')}>Nvidia Omniverse</p>
                    </div>
                  </div>
                  <div>
                    <p>
                    {t('File_format')}
                    </p>
                    <div className="flex flex-row space-x-20 w-full">
                      <div className="mt-10 w-[25%] space-y-4">
                        <h1 className="font-bold text-[17px]">FBX</h1>
                        <div className=" space-y-2 flex flex-col">
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                            {t('File_size')} | 2.5MB
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 space-y-4 w-[25%]">
                        <h1 className="font-bold text-[17px]">GLB</h1>
                        <div className=" space-y-2">
                          <div className="bg-[#D9D9D9] py-1">
                            <h1 className="text-[#5A5A5A] text-center text-[12px]">
                            {t('File_size')} | 30MB
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 mb-14 space-y-4 w-[25%]">
                      <h1 className="font-bold text-[17px]">USD</h1>
                      <div className=" space-y-2 mb-10">
                        <div className="bg-[#D9D9D9] py-1">
                          <h1 className="text-[#5A5A5A] text-center text-[12px]">
                          {t('File_size')} | 4MB
                          </h1>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Utilities desktop */}
          <Faqfinal />
        </div>
      </div>
      {/* diseña tu interior */}
      <div className="h-[500px] nm:h-screen bg-green2 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
          {t('design_p1')}
          </div>
          <div className="md:text-[80px] text-[25px] uppercase">
          {t('design_t1')}
          </div>
          <div>
            <button onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')}  className="md:mt-6 border-[1px] rounded-[0.3rem] bg-white text-black md:py-2 py-1 md:px-10 hover:bg-black hover:text-white hover:border-white px-6 text-[12px]">{t('design_button5')}</button>
          </div>
        </div>
      </div>
      {/* conoce el team */}
      <div className="h-auto mt-10  nm:w-full">
        <div className="nm:flex nm:flex-col justify-center nm:justify-center items-center">
          <p className="text-center text-[10px] nm:text-[18px]">{t('team_p1')}</p>
          <h1 className="text-[40px] leading-none text-center nm:text-[90px]">{t('team_t1')}<br />{t('team_t2')}</h1>
          <p className="text-[12px] nm:w-[90%] mt-2 nm:text-[15px] text-center px-10 nm:px-[25rem]">{t('team_p2')}
          </p>
          {/*meet the team desktop */}
          <div className="hidden nm:flex flex-row nm:space-x-12 space-x-0 px-8  mt-[5rem] ">
            <div className='min-w-[180px] cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/rojkind/')}  src={images.rojkind} />
            </div>
            <div className='min-w-[180px] cursor-pointer'>
              <Image onClick={() => window.open('https://instagram.com/diegolezama/')} src={images.diego} />
            </div>
            <div className='min-w-[180px] cursor-pointer'>
              <Image onClick={() => window.open('https://instagram.com/nickinthematrix/')} src={images.nico} />
            </div>
            <div className='min-w-[180px] cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/danielhuertasl/')} src={images.dani} />
            </div>
            <div className='min-w-[180px] cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/sabelmatias/')} src={images.mati} />
            </div>
          </div>
          <div className="hidden nm:flex flex-row space-x-12 mt-[5rem]">
            <div className='cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/mikedecenzo/')} src={images.mike} />
            </div>
            <div className='cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/tomicmar_/')} src={images.tomi} />
            </div>
            <div className='cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/kamuleon/')} src={images.jose} />
            </div>
            <div className='cursor-pointer'>
              <Image onClick={() => window.open('https://www.instagram.com/kev_prada/ ')} src={images.kevin} />
            </div>
          </div>
          {/*meet the team mobile */}
          <div className='flex px-4 flex-col nm:hidden overflow-x-hidden space-y-6'>
          <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image onClick={() => window.open('https://www.instagram.com/rojkind/')} src={images.rojkind} />
              </div>
              <div>
              <Image onClick={() => window.open('https://instagram.com/diegolezama/')} src={images.diego} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image onClick={() => window.open('https://instagram.com/nickinthematrix/')} src={images.nico} />
              </div>
              <div>
              <Image onClick={() => window.open('https://www.instagram.com/danielhuertasl/')} src={images.dani} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image onClick={() => window.open('https://www.instagram.com/sabelmatias/')} src={images.mati} />
              </div>
              <div>
              <Image onClick={() => window.open('https://www.instagram.com/mikedecenzo/')} src={images.mike} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image onClick={() => window.open('https://www.instagram.com/tomicmar_/')} src={images.tomi} />
              </div>
              <div>
              <Image onClick={() => window.open('https://www.instagram.com/kamuleon/')} src={images.jose} />
              </div>
            </div>
            <div className='min-w-[160px] space-x-4 flex mt-8 flex-row'>
            <div>
              <Image onClick={() => window.open('https://www.instagram.com/kev_prada/ ')} src={images.kevin} />
              </div>
              <div>
              <Image src={images.kevin1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* unique places mobile */}
      <div className="h-auto mt-20 hidden flex-col items-center justify-center">
        <div className="flex w-[80%] flex-col items-center justify-center rounded-xl border-[1px] border-black">
          <div className="flex flex-col px-6">
            <div className="flex flex-row items-center justify-center w-full mt-2 space-x-2">
              <div className="">
                <p className="text-[26px] text-left">
                {t('final_w1')}
                </p>
              </div>
              <div className="">
                <Image src={images.lugares} objectFit="contain" />
              </div>
            </div>
            <div className="flex items-center flex-col justify-center">
              <p className="text-[100px] leading-[6rem]">{t('final_w2')}</p>
              <div className="mt-4 px-1 ">
                <Image src={images.meditar} />
              </div>
              <p className="text-[55px]">{t('final_w3')}</p>
              <div className="mt-1 px-1">
                <Image src={images.consciente} />
              </div>
              <p className="text-[55px]">{t('final_w4')}</p>
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
                {t('final_w1')}
                </p>
              </div>
              <div>
                <Image src={images.unique} objectFit="contain" />
              </div>
              <p className="text-[100px] leading-[6rem]">{t('final_w2')}</p>
            </div>
            <div className="flex items-center flex-col justify-center">
              <div className="flex flex-row items-center  space-x-8">
                <p className="text-[100px]">{t('final_w5mb')}</p>
                <div className="mt-4 px-1 ">
                  <Image src={images.meditate} />
                </div>
                <p className="text-[100px]">{t('final_w6mb')}</p>
              </div>
              <div className="flex flex-row items-center  space-x-8">
                <div className="mt-1 px-1">
                  <Image src={images.consciosuly} />
                </div>
                <p className="text-[100px]">{t('final_w7mb')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className=" mt-20 bg-black flex flex-col items-center justify-between">
        <div className="mt-20">
          <div className="flex items-center justify-center">
            <Image src={images.logofooter} />
          </div>
          <div className="flex flex-row mt-10 justify-between w-full space-x-16">
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px] nm:text-[20px]">{t('Join_')}</p>
              </div>
              <div className="space-y-2 mt-4">
                <Link to='test-1' spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-600 text-left text-[12px] nm:text-[20px] font-bold cursor-pointer">{t('Learn')}</Link>
                <p onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="text-white hover:text-gray-600 text-[12px] nm:text-[20px] font-bold cursor-pointer">{t('navbar_button')}</p>
                <p onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="text-white text-[12px] nm:text-[20px] font-bold hover:text-gray-600 cursor-pointer">{t('button4')}</p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px] nm:text-[20px]">{t('Connect_')}</p>
              </div>
              <div className="space-y-2 mt-4">
                <Link onClick={() => window.open('https://www.instagram.com/beyoond_io/')} className="text-white text-left text-[12px] nm:text-[20px] font-bold hover:text-gray-600 cursor-pointer">Twitter</Link>
                <p onClick={() => window.open('https://www.instagram.com/beyoond_io/')}  className="text-white text-[12px] hover:text-gray-600 nm:text-[20px] font-bold cursor-pointer">Instagram</p>
                <p onClick={() => window.open('https://discord.gg/k37Z8AvCFk')}  className="text-white text-[12px] nm:text-[20px] hover:text-gray-600 font-bold cursor-pointer">Discord</p>
              </div>
            </div>
          </div>
          <div className="flex text-white mt-20 mb-20 text-[8px] nm:text-[20px] text-center items-center justify-center">
            <p>Powered by <span className='cursor-pointer hover:text-gray-600 font-bold' onClick={() => window.open('https://nakedmeta.io')}>Naked Meta</span> & <span className='cursor-pointer font-bold hover:text-gray-600' onClick={() => window.open('https://rojkindarquitectos.com/')}>Rojkind Arquitectos.</span> </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default (Home);
