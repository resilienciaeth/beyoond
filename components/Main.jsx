
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation, UseTranslation } from 'next-i18next';

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

function Main() {
  const {t} = useTranslation();
  return (
    <div className="main font-sfpro overflow-x-auto">
      <video preload="true" autoPlay muted loop playsInline>
        <source src="/assets/videobanner.mp4.mp4" typeof="video/mp4" />
      </video>
      <div className=" absolute
        h-full top-0 flex flex-col justify-center mt-[13rem] nm:mt-[12rem] nm:ml-[3rem] nm:justify-center items-start text-white">
        <h1 className="font-bold  ml-10 text-[32px] nm:text-[6vh]">
        {t('title')}
          {' '}
          <br />
          que une amantes
          <br />
          {' '}
          de la arquitectura.
        </h1>
        <p className="font-bold underline ml-10 cursor-pointer text-[20px] hover:text-black">
          Conocer más.
        </p>
      </div>
    </div>
  );
}

export default (Main);
