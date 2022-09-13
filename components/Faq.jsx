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
    <div className="mt-10 flex flex-col items-center justify-center sm:justify-start w-full">
      <div className="flex">
        <h1 className="text-[25px] font-bold">What are the utilities?</h1>
      </div>
      <div className="w-full mt-10 border-t-[1px] border-black ">
        {data.map((item, i) => (
          <div className="border-b-[1px] border-t-black border-black w-full py-4 space-x-4">
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
    question: '01. A Private Space in the Metaverse',
    answer: 'Acceso a eventos virtuales en vivo dentro del Metaverso con Michel Rojkind y toda la comunidad. Allí se hablará de temas como meditación, crecimiento personal, espacios virtuales, metaversos y arquitectura.',
  },
  {
    question: '02. Private Virtual Events',
    answer: 'respuesta aqui',
  },
  {
    question: '03. Priority Access to Future Projects.',
    answer: 'respuesta aqui',
  },
  {
    question: '04. Access to a Gated Community.',
    answer: 'respuesta aqui',
  },
  {
    question: '05. Build the Future with us.',
    answer: 'respuesta aqui',
  },
];
export default Faq;
