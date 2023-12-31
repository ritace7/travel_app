"use client"

import Image from 'next/image'
import closeButton from "../public/close.svg"
import { useState } from 'react'

const HeroInfo = () => {
    const [isInfoHidden, setIsInfoHidden] = useState<boolean>(false);

    const handleClick = () =>{
        setIsInfoHidden((prev) => !prev)
    };

  return (
    <div className={`relative flex flex-1 items-start ${isInfoHidden && 'hidden'}`}>
     <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
      
      <div className="flex flex-col">
        <div className="flexBetween">
          <p className="regular-16 text-gray-20">Location</p>
          <Image 
            src={closeButton}
            alt="close"
            width={24}
            height={24}
            onClick={handleClick}
            className='cursor-pointer'
          />
        </div>
        <p className="bold-20 text-white">Nepal</p>
      </div>
        
      <div className="flexBetween">
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Distance</p>
          <p className="bold-20 text-white">130 km</p>
        </div>
        <div className="flex flex-col">
          <p className="regular-16 block text-gray-20">Elevation</p>
          <p className="bold-20 text-white">5,364 m</p>
        </div>
      </div>
    
    </div>
  </div>
  )
}

export default HeroInfo