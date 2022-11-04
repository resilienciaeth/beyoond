import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from 'next-i18next';
import Image from 'next/image'


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
  )
}

export default FAQ