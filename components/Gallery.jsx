
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import images1 from './images'
import dynamic from 'next/dynamic';



const Gallery = () => {

    const [selectedImg, setSelectedImg] = useState(images1[0]);
  return (
    <div className='nm:w-[50%] mt-10 nm:mt-0 w-full'>
        <div className='flex items-center justify-end flex-col'>
            <img src={selectedImg} className='w-[80%] nm:w-[70%] relative rounded-2xl' alt='Selected' />
            <div className='nm:flex flex nm:w-[30%] nm:justify-end nm:items-center nm:border-2 nm:border-solid nm:border-transparent space-x-3 nm:mb-10 mb-4 absolute'>
                {images1.map((img, index) => (
                    <img className={ selectedImg === img ? 'border-2 nm:flex-grow rounded-2xl h-[80px] cursor-pointer nm:h-[140px] ' : 
                    'opacity-20 cursor-pointer h-[80px] nm:h-[140px] nm:flex-grow  rounded-2xl' } key={index} src={img} alt='dog'
                    onClick={() => setSelectedImg(img)}
                     />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Gallery;

{/*
    <div className=' w-[20%] border-2 border-solid border-transparent flex  flex-row mb-10 space-x-4 items-center justify-center absolute'>
        {images1.map((img, index) => (
            <img className={ selectedImg === img ? 'border-2 rounded-2xl ' : 'opacity-20 rounded-2xl' } key={index} src={img} alt='dog'
            onClick={() => setSelectedImg(img)}
             />
        ))}
    </div>
</div>
</div>


// <img src='/assets/gallery1small.png' className='gallery-active' alt='' />
             //   <img src='/assets/gallery1small.png' className='' alt=''/>
            //    <img src='/assets/gallery1small.png' className='' alt='' />
        */}