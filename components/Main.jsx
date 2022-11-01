import React from 'react';

function Main() {
  return (
    <div className="main font-sfpro overflow-x-auto">
      <video preload="true" autoPlay muted loop playsInline>
        <source src="/assets/videobanner.mp4.mp4" typeof="video/mp4" />
      </video>
      <div className="content1">
        <h1 className="font-bold  ml-10 text-[6vh]">
        El espacio virtual
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

export default Main;

{ /*
<div className="main">
        <div className="content">
          <h1 className="text-white text-[4vh] nm:text-[5vh]  nm:mt-0 mr-10 font-sfpro font-bold leading-[5vh] nm:leading-[70px] nm:w-[50vh]">
            Tu espacio virtual diseñado por Rojkind.
          </h1>
          <p className="text-[1.5vh] underline cursor-pointer font-sfpro text-white">
            Conocer más.
          </p>
        </div>
      </div>
*/ }
