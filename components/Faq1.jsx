import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation, UseTranslation } from 'next-i18next';
import FAQP1 from './faqp1';
import FAQP2 from './faqp2';
import FAQP3 from './faqp3';
import FAQP4 from './faqp4';
import FAQP5 from './faqp5';
import FAQP6 from './faqp6';

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['faq']))
    }
  }
}

function Faq1() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const {t} = useTranslation();

  return (
    <div className="mt-5 nm:mt-[8rem] flex flex-col items-center justify-center sm:justify-start ">
      <div className="flex">
        <h1 className="text-[25px] nm:text-[40px] font-bold">{t('faq:title')}</h1>
      </div>
      <div className="nm:w-[70%] w-full mt-10 space-y-5  border-black ">
          <FAQP1 />
          <FAQP2 />
          <FAQP3 />
          <FAQP4 />
          <FAQP5 />
          <FAQP6 />
      
      </div>
    </div>
  );
}
const data = [
  {
    question: '¿Qué es lo que recibo comprando el espacio?',
    answer: 'Comprando el espacio recibirás el archivo propio para poder acceder a AXK4N mediante celular, computadora u Oculus. Además del acceso al grupo privado de discord entre toda la comunidad y las demás utilidades.',
  },
  {
    question: '¿Cómo ingreso a AXK4N?',
    answer: 'El espacio se puede subir a Spatial.io o el resto de los metaversos compatibles para luego ingresar mediante la página web. En este link se encuentra un tutorial sobre cómo hacerlo https://www.youtube.com/watch?v=VymZkUd9eO8',
  },
  {
    question: '¿Cómo invito a mis amigos a AXK4N?',
    answer: 'Una vez dentro del espacio se puede copiar el link para invitados al igual que en Google Meet o zoom. Es muy fácil reunirse dentro del metaverso con quién vos quieras.',
  },
  {
    question: '¿Cómo puedo pagar?',
    answer: 'El espacio se puede comprar con tarjeta de débito o crédito, así como también en crypto (usdc o ETH).',
  },
  {
    question: '¿Con qué metaversos es compatible?',
    answer: 'El espacio es compatible con: Decentraland,  Spatial.io, VR Chat, Unity, Unreal Engine 5, Nvidia Omniverse',
  },
  {
    question: '¿Puedo revender mi espacio virtual?',
    answer: 'Por supuesto. Una vez se hayan vendido todos los espacios, podrás listearlo a la venta si lo deseas en Marketplaces como Opensea. ',
  },
];
export default Faq1;
