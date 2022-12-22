import React from 'react'
import Image from 'next/image'
import images from '../public/assets/'

const Card = () => {
  return (
    <div className='w-[40%] flex justify-start items-start'>
        <div className='flex bg-red-500 items-center flex-col'>
            <h1 className="font-bold text-center text-[35px] nm:text-[70px] nm:ml-6 text-black">AXK4N.</h1>
                <div className='flex flex-row'>
                <div className='flex flex-row px-[3rem]'>
                <Image alt='creator' src={images.creator} />
                <div className='flex flex-col ml-2'>
                    <p>Creator</p>
                    <p>Michel Rojkind</p>
                </div>
                </div>
                <div className='flex flex-row'>
                <Image alt='creator2' src={images.creator2} />
                <div className='flex flex-col ml-2'>
                    <p>Total Supply</p>
                    <p>1000</p>
                </div>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Card