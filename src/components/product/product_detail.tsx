'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Star from '../stars_rating/star'
// import {  } from 'react'
import TextCollapse from '@/components/collapsible_dev/collapsible_dev'
// import { Assistant } from 'next/font/google'
import { assistant } from '../font'
import { RadioGroup } from '@headlessui/react'
import { LiaRulerHorizontalSolid } from "react-icons/lia";


const images = ['/img/hp_envy_1.jpg','/img/hp_envy_2.jpg','/img/hp_envy_3.jpg','/img/hp_envy_4.jpg']

const ProductDetails = () => {
  const [image, setImage] = useState(images[0])
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')



  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event:any, fn =(e:any)=>{''}) => {
    fn(event.target.value);
  };

  function classNames(...classes:any) {
    console.log( classes.filter(Boolean).join(' '))
    return classes.filter(Boolean).join(' ')
  }

  classNames(`inline-flex items-center justify-between h-[1.8rem] w-[1.8rem] rounded-full 
    text-gray-500 bg-black checked:bg-black border border-gray-200  cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-4
      peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100`)


  return (
    <div className='flex flex-col md:flex-row w-full md:w-[90%] h-fit mx-auto '>
   
        <div className='w-full  md:w-[55%]'>
           <div className='w-full flex justify-center content-center'>
                <div className='relative w-[15rem] h-[15rem]  sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem]
                lg:w-[30rem] lg:h-[30rem] self-center'>
                    <Image src={image} key={''} alt={'3'} fill objectFit='contain'/> 
                </div>
            </div>

            <div className='flex justify-center p-1 w-full gap-2 '>
                {images.map((img, ind ) => (
                <div key={ind} className='relative flex gap-3 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] '>
                    <Image src={img} key={ind + img} alt={img} fill  onClick={()=>setImage(img)}/>
                </div>
                ) )
                }
            </div>
       
        </div>

        <form className='w-full md:w-[45%] p-2  '>
            <div className='w-full font text-lg md:text-2xl '>
                <h2 className='flex justify-between font-semibold'><span >Hp Enny</span> <span>${390}</span></h2>
            </div>
            <div className='flex gap-4 w-full content-base items-end font-semibold '>
                <Star rate={0} numberOfStars={0} disableColor={false}/> 
                <Link href={'#'} className='text-gray-400 '> 1 review</Link>
            </div>

            <div className='flex flex-col  gap-6 mt-6'> 
                <div className=''>
                    <h3 className="font-medium text-gray-900 mb-1">Color</h3>
                    <ul className="w-full flex gap-4 flex-wrap flex-shrink ">
                     { 
                      [{name: 'Silver', code: '#C0C0C0'}, {name: 'black', code: '#000000'},
                      {name: 'Navy', code: '#000080'},].map((color) => (
                        <li key={color.code}>
                          <input type="radio" id={color.name} name={color.name} value={color.code} className="hidden peer" required  checked={selectedColor === color.code}
                          onChange={(e)=> handleChange(e, setSelectedColor)} />
                          <label htmlFor={color.name} className={`custom inline-flex items-center justify-between h-[1.8rem] w-[1.8rem] rounded-full 
                           border   cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-4 
                            
                            `}>   
                            <p className='sr-only'>{color.name}</p>  

                               <style jsx>{
                                    `
                                    .custom { 
                                      
                                      background: ${color.code};
                                      --tw-ring-color: ${color.code}
                                      }
                                    `
                                    
                                  }          
                              </style>                      
                          </label>
                       </li>
                      ))
                
                      }
                    </ul>
                </div>
                <div className=''>
                    <div className='flex justify-between mb-1'>
                      <h3 className="font-medium text-gray-900 ">
                        Sizes
                        
                      </h3>
                      <Link href="#" className=" flex items-center gap-1 text-sm font-normal italic text-blue-context
                       hover:text-blue-hover ">
                        <span className='inline-block text-xl '><LiaRulerHorizontalSolid/></span> Size guide
                      </Link>
                    </div>
                    <ul className="w-full flex gap-3 flex-wrap flex-shrink">
                    { 
                      ['12 "', '14 "', '15"', '16"' ].map((size) => (
                        <li key={size}>
                          <input type="radio" id={size} name={size} value={size} className="hidden peer" required checked={selectedSize === size}
                          onChange={(e)=> handleChange(e, setSelectedSize)} />
                          <label htmlFor={size} className={classNames(`inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer 
                            peer-checked:border-blue-context peer-checked:text-blue-context hover:text-gray-600 hover:bg-gray-100
                            `)}>    <p className="w-full text-lg font-semibold">{size}</p>
                          </label>

                       </li>
                      ))
                
                      }
                    </ul>
                </div>

                <div className='flex justify-between gap-4'>
                        <button type="submit"  className="flex w-full justify-center rounded-md  border border-blue-context font-semibold px-2 py-2  font- leading-6 text-lg capitalize
                                text-blue-context shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                Buy Now
                        </button>
                        <button
                                type="submit"
                                className={`${assistant.className} flex w-full justify-center rounded-md bg-blue-context font-semibold  px-2 py-2  font- leading-6 text-lg capitalize
                                text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                                Add to cart
                        </button>

                </div>
                  

                <div className='text-wrap '>
                    <h2 className='font-bold text-normal mb-2'>Discription</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                        Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel</p>
                </div>

                <div className='flex flex-col gap-6'>
               



                    <TextCollapse title={''} open={false} size={''}  >
                        {['1tb drive', 'Antiglare Screen', '12" screen'].map((spec)=>(
                        <li key={spec}>{spec}</li>
                        ))} 
                    </TextCollapse>
                    
                </div>
            </div>

        </form>
       
    </div>
  )
}

export default ProductDetails