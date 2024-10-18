'use client'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Image from 'next/image'
import Star from '../stars_rating/star'
import TextCollapse from '@/components/collapsible_dev/collapsible_dev'
import { assistant } from '../font'
import { LiaRulerHorizontalSolid } from "react-icons/lia";
import ProductColor from './color'
import Submit from '../form/submit'
import { addToCart } from '@/lib/utils'
import { ProductDetail } from '@/type/types'
import {Skeleton, ImageSkeleton, LineSkeleton} from '../skeleton'


export default  function  ProductDetails ({ product }: { product: ProductDetail }){
  const [image, setImage] = useState(product.product_image[0].image)

  const [selectedSize, setSelectedSize] = useState(product.size[0]?.size || '')

  // const [selectedValue, setSelectedValue] = useState('');

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
                    <Suspense fallback={<ImageSkeleton />}>
                             <Image src={image} key={''} alt={'3'} fill objectFit='contain' /> 
                  </Suspense>

                </div>
            </div>

            <div className='flex justify-center p-1 w-full gap-2 '>
                {product.product_image.map((img, ind ) => (
                  <div key={ind} className='relative flex gap-3 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] '>
                    <Suspense fallback={<ImageSkeleton />}>
                      <Image src={img.image} key={ind} alt={product.name} fill onClick={() => setImage(img.image)} priority />
                    </Suspense>
                </div>
                ) )
                }
            </div>
       
        </div>

        <form className='w-full mt-4 px-2 sm:px-4 md:mt-0 md:px-0 md:w-[45%] p-2  ' action={addToCart}>
           <div className='w-full font text-lg md:text-2xl '>
                <input name='productId' className='hidden' value={1}/>
          <h2 className='flex justify-between font-semibold'><span >{ product.name}</span> <span>${product.price}</span></h2>
            </div>
        <div className='flex gap-4 w-full content-base items-end font-semibold mt-1'>
              <Suspense fallback={<LineSkeleton />}>

                <Star rate={4} numberOfStars={5} disableColor={false}/> 
                <Link href={'#'} className='text-gray-400 '> 1 review</Link>
            </Suspense>
            </div>

            <div className='flex flex-col  gap-6 mt-6'> 
                <div className=''>
                   <h3 className="font-medium text-gray-900 mb-3 ">Color</h3>
                    <div className='pl-1' >
                      <Suspense fallback={<LineSkeleton />}>
                       {/* @ts-ignore */}
                      <ProductColor color={product.color} />
                    </Suspense>
                    </div>
                    
                </div>
                <div className=''>
                    <div className='flex justify-between mb-3'>
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
                      product.size.map((size) => (
                        <li key={size.size}>
                          <input type="radio" id={size.size} name='productSize' value={size.size} className="hidden peer" required checked={selectedSize === size.size}
                          onChange={(e)=> handleChange(e, setSelectedSize)} />
                          <label htmlFor={size.size} className={classNames(`inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer 
                            peer-checked:border-blue-context min-w-[4rem] peer-checked:text-blue-context hover:text-gray-600 hover:bg-gray-100
                            `)}>    <p className="w-full text-lg text-center font-semibold capitalize">{`${size.size || ''} ${size.unit || ''}`}</p>
                          </label>

                       </li>
                      ))
                
                      }
                    </ul>
                </div>

                <div className='flex justify-between gap-4'>
                        <button type="submit"  className="flex w-full justify-center rounded-md  border border-black font-semibold px-2 py-2  font- leading-6 text-lg capitalize
                                text-black shadow-sm hover:bg-black  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                Buy Now
                        </button>
                        <Submit text='Add to cart' pending_text='adding to cart...'/>
                </div>
                  

                <div className='text-wrap '>
                    <h2 className='font-bold text-normal mb-2'>Discription</h2>
                  <p>{ product.description}</p>
                </div>

                <div className='flex flex-col gap-6'>
               



                    <TextCollapse title={'Features'} open={false} size={''}  >
                  {['1tb drive', 'Antiglare Screen', '12" screen'].map((spec) => (
                      <Suspense key={spec} fallback={<LineSkeleton />}>

                        <li key={spec}>{spec}</li>
                      </Suspense>
                        ))} 
                    </TextCollapse>
                    
                </div>
            </div>

        </form>
       
    </div>
  )
}

