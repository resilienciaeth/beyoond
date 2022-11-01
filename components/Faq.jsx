import React, { useState } from 'react';

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="mt-10 nm:mt-[6rem] flex flex-col items-center justify-center sm:justify-start nm:w-[50%]">
      <div className="flex ">
        <h1 className="text-[25px] nm:text-[40px] font-bold">Conoce las utilidades</h1>
      </div>
      <div className="w-full mt-10 border-t-[1px] border-black ">
        {data.map((item, i) => (
          <div className="border-b-[1px] border-t-black border-black w-full py-3 mt-2 space-x-4">
            <div className="flex justify-between ml-4 w-[85%]" onClick={() => toggle(i)}>
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
    question: '01. Tu espacio privado en el Metaverso.',
    answer: 'Obtendrás un espacio coleccionable y utilizable en el metaverso, es un sitio virtual en el que podrás reunirte con quien lo desees. Allí es donde Rojkind se reunirá con la comunidad.',
  },
  {
    question: '02.Obtén tu colecionable digital.',
    answer: 'Tu espacio virtual es un colecionable digital. Al solo haber 1000, los miembros tendrán la oportunidad de revenderlo en el futuro si así lo desean.',
  },
  {
    question: '03. Acceso a una comunidad privada.',
    answer: 'Serás parte de una comunidad de amantes de la arquitectura. Conocerás un entorno ideal para compartir información y conocimiento. Podrás hacer networking con otros amantes de la arquitectura y con Michel Rojkind.',
  },
  {
    question: '04. Eventos virtuales.',
    answer: 'Acceso a un evento mensual en vivo dentro del Metaverso junto a Michel Rojkind y toda la comunidad.',
  },
  {
    question: '05. Modifica tu espacio y concursa.',
    answer: 'Cada comprador tendrá la posibilidad de modificar su espacio y participar de un concurso creativo, el ganador lo podrá lanzar como coleccionable a través de Beyoond.',
  },
  {
    question: '05. Acceso Prioritario.',
    answer: 'Cada miembro tendrá acceso prioritario a todos los futuros eventos y lanzamientos de Beyoond.',
  },
];
export default Faq;
