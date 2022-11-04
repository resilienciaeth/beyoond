import React, { useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation, UseTranslation } from 'next-i18next';

export async function getStaticProps({locale}) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['faq']))
      }
    }
  }

const FAQP5 = () => {
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
    <div className="border-b-[1px] rounded-lg bg-white border-t-[1px] nm:border-[1px] w-full py-3 mt-2 space-x-4">
    <div className="flex text-center justify-between ml-4 w-[85%]" onClick={() => toggle(i)}>
      <h2>{t('faq:q5')}</h2>
      <span className="">{selected === i ? <img src="/assets/utilitymenu2.png" width={20} height={20} alt="arrow" /> : <img src="/assets/utilitymenu.png" width={20} height={20} />}</span>
    </div>
    <div className={selected === i ? 'content show' : 'content'}>{t('faq:a5')}</div>
  </div>
  )
}

export default FAQP5;