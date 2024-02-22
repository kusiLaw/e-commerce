'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Star from '../stars_rating/star'
// import {  } from 'react'
import TextCollapse from '@/components/collapsible_dev/collapsible_dev'




const images = ['/img/hp_envy_1.jpg','/img/hp_envy_2.jpg','/img/hp_envy_3.jpg','/img/hp_envy_4.jpg']

const ProductDetails = () => {
  const [image, setImage] = useState(images[0])
  

  return (
    <div className='flex flex-col md:flex-row w-full md:w-[90%] h-fit mx-auto'>
        <div className='w-full  md:w-[55%]'>
           <div className='w-full flex justify-center content-center'>
                <div className='relative w-[15rem] h-[15rem]  sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem]
                lg:w-[30rem] lg:h-[30rem] self-center'>
                    <Image src={image} key={''} alt={'3'} fill className={'hover:scale-105'}/> 
                </div>
            </div>

            <div className='flex justify-center p-1 w-full gap-2 '>
                {images.map((img, ind ) => (
                <div className='relative flex gap-3 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] '>
                <Image src={img} key={ind + img} alt={img} fill className='hover:scale-105' onClick={()=>setImage(img)}/>
                </div>
                ) )
                }
            </div>
       
        </div>
   
        <div className='w-full md:w-[45%] p-2  '>
            <div className='w-full font text-lg md:text-2xl '>
                <h2 className='flex justify-between'><span >Hp Enny</span> <span>${390}</span></h2>
            </div>
            <div className='flex gap-4 w-full content-base items-end font-semibold '>
                <Star/> 
                <Link href={'#'} className='text-gray-400 '> 1 review</Link>
            </div>

            <div className='flex flex-col  gap-6 mt-6'> 
                <div className=''>
                    <div className='ring-2 rounded-full h-5 w-5'></div>
                </div>
                <div className='text-wrap '>
                    <h2 className='font-bold text-lg mb-2'>Discription</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                        Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel</p>
                </div>

                <div className='flex flex-col gap-4'>
                
                    <button
                            type="submit"
                            className="flex w-full justify-center rounded-sm bg-blue-context px-3 py-3  font- leading-6 text-lg capitalize
                            text-white shadow-sm hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add to cart
                    </button>
                    <TextCollapse>
                        {['1tb drive', 'Antiglare Screen', '12" screen'].map((e)=>(
                        <li>{e}</li>
                        ))} 
                    </TextCollapse>
                    
                </div>
            </div>

        </div>
      

       
    </div>
  )
}

export default ProductDetails