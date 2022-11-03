import React, { useState } from 'react';

function Faq1() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="mt-5 nm:mt-[8rem] flex flex-col items-center justify-center sm:justify-start ">
      <div className="flex">
        <h1 className="text-[25px] nm:text-[40px] font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="nm:w-[70%] w-full mt-10 space-y-5  border-black ">
        {data.map((item, i) => (
          <div className="border-b-[1px] rounded-lg bg-white border-t-[1px] nm:border-[1px] w-full py-3 mt-2 space-x-4">
            <div className="flex text-center justify-between ml-4 w-[85%]" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span className="">{selected === i ? <img src="/assets/utilitymenu2.png" width={20} height={20} alt="arrow" /> : <img src="/assets/utilitymenu.png" width={20} height={20} />}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        )) }
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
