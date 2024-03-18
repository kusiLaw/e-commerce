'use client'
import React, { useState, useEffect, useRef } from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io";
import { GoPlay } from "react-icons/go";
import { AiOutlinePause } from "react-icons/ai";
import Link from "next/link";
import { assistant } from "@/components/font";



const VideoSection = () => {
    const [play, setPlay] = useState(true)
    
   const ref = useRef(null);

  useEffect(() => {
    if (play) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });



  return (
    <div className="flex w-full lg:h-[38rem] overflow-hidden">
          <div className='relative h-full w-full'>
            <video autoPlay loop muted className="relative w-full h-fit"  ref={ref}>
                <source src="/video.mp4" type="video/mp4" />
             </video>
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/70 text-white">
              <div className="w-full h-full my-auto  flex justify-center items-center  ">
                <div className=" flex flex-col items-center justify-between h-[80%] w-[90%] pt-2 lg:pt-10">
                  <div className=" flex flex-col items-center">
                    <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
                        Customer priority
                    </h2>
                  
                    <p className={`${assistant.className} font-thin text-3xl mt-8 tracking-wide leading-relaxed	`}> At the Core of Everything We Do
                    </p>
                    <p className="text-center mt-3 tracking-wide	 ">
                      Our products meet customer expectation 
                    </p>
                    <button
                        type="submit"
                        className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-blue-context font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                        text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                        play video
                        <IoIosArrowForward/>
                    </button>
                    <Link href="#" className="font-thin   mt-6 hover:underline underline-offset-4 leading-relaxed flex items-center gap-1">
                          Discover how {'we’re'} changing online marketing today
                          <IoIosArrowRoundForward/>
                    </Link>
                  </div>     
                  <div className="flex justify-end w-full">
                        <button className='flex items-center justify-center gap-3 py-3 px-4 bg-black/90 hover:bg-black/40 mr-10 lg:mr-20'
                            onClick={() => { setPlay(!play) }}>
                            {play ? 'Pause' : 'Play'}

                          <span className="text-2xl">
                                {play ? <AiOutlinePause /> :
                            <GoPlay />}
                          </span>
                            
                          </button>
                    </div>
                
                </div>
                
              </div>
            
                
                
            </div>
         
        </div>
      </div>
      
  )
}

export default VideoSection