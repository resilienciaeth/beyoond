import React, { useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation, UseTranslation } from 'next-i18next';
import Q1 from './q1';
import Q2 from './q2';
import Q3 from './q3';
import Q4 from './q4';
import Q5 from './q5';
import Q6 from './q6';

export async function getStaticProps({locale}) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common']))
      }
    }
  }

function Faqfinal() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  const [i, setI] = useState(false)
  


  const {t} = useTranslation();

 
  

  return (
    <div className="mt-10 nm:mt-[6rem] flex flex-col items-center justify-center sm:justify-start nm:w-[50%]">
      <div className="flex ">
        <h1 className="text-[25px] nm:text-[40px] font-bold">{t('utilities_title')}</h1>
      </div>
      <div className="w-full mt-10 border-t-[1px] border-black ">
          <Q1 />
          <Q2 />
          <Q3 />
          <Q4 />
          <Q5 />
          <Q6 />
      </div>
      <button onClick={() => window.open('/mint')} className="mt-10 mb-10 border-[1px] rounded-[0.3rem] border-black font-bold bg-transparent text-black hover:bg-black hover:text-white hover:border-white py-2 px-10 text-[12px]">{t('button2')}</button>
    </div>
  );
}

export default Faqfinal;