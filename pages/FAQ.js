import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from 'next-i18next';
import Image from 'next/image'
import { Link } from 'react-scroll';


import images from '../public/assets'
import Faq1 from '../components/Faq1'

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['faq']))
    }
  }
}

const FAQ = () => {

  const {t} = useTranslation();
  return (
    <div className='text-black font-sfpro bg-beyond-1'>
        <div className=''>
            <Image src={images.faqbanner} objectFit='cover' />
        </div>
        <Faq1 />
        <div className=" mt-20 bg-black flex flex-col items-center justify-between">
        <div className="mt-20">
          <div className="flex items-center justify-center">
            <Image src={images.logofooter} />
          </div>
          <div className="flex flex-row mt-10 justify-between w-full space-x-16">
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px] nm:text-[20px]">{t('faq:Join_')}</p>
              </div>
              <div className="space-y-2 mt-4">
                <Link to='test-1' spy={true} smooth={true} offset={50} duration={500} className="text-white hover:text-gray-600 text-left text-[12px] nm:text-[20px] font-bold cursor-pointer">{t('faq:Learn')}</Link>
                <p onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="text-white hover:text-gray-600 text-[12px] nm:text-[20px] font-bold cursor-pointer">{t('faq:navbar_button')}</p>
                <p onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="text-white text-[12px] nm:text-[20px] font-bold hover:text-gray-600 cursor-pointer">{t('faq:button4')}</p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-beyond-1 text-[8px] nm:text-[20px]">{t('faq:Connect_')}</p>
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
  )
}

export default FAQ