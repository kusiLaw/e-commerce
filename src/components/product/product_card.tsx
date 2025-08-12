import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WishListButton from './wishlist_button'
import { Productlist } from '@/type/types'
import ProductColor from './color'
import { Skeleton, ImageSkeleton } from '../skeleton'
import { imgUrl } from '@/lib/backend/urls'


const ProductCard = ({ id, name, product_image , tag, color, price, colorCode = false }: Productlist ) => {
  return (
    <div  className='relative  group  border-[0.1px]  group
                   w-full max-w-[20rem] h-fit my-2 pt-1 mx-auto px-auto grow shrink  hover:shadow-sm ' >
      <div className='w-full relative flex flex-col items-center justify-center gap-2 mx-auto flex-shrink '>
 
           <div className=' flex relative justify-center content-center
           h-[11rem]    w-full
           shadow-xs bg-gray-50 rounded-md mb- overflow-hidden shrink grow'>
          <Suspense fallback={
            <Skeleton customClassNames='h-[11rem] w-[11rem] lg:h-[12rem] w-full' viewAs={'image'} />
          }>
            <Link href={'/products/' + id + '/details'} >
              <Image
                src={
                  `${imgUrl}${
                    typeof product_image[0] === 'object' && product_image[0] !== null
                      ? product_image[0].image
                      : product_image[0] || ''
                  }`
                }
                alt={''}
                width={180}
                height={180}
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-all duration-700"
              />

                    {tag === 'sales' && <div className='absolute bg-blue-contrast1 text-white uppercase left-0 top-3 drop-shadow-md
                    px-3 font-thin text-xs '>sales</div>}
                    { tag === 'new' && <div className='absolute bg-blue-context text-white uppercase left-0 top-3 drop-shadow-md px-3 font- text-xs '>new</div>}
                    { tag === 'hot' && <div className='absolute bg-red-900 text-white uppercase left-0 top-3 drop-shadow-md px-3 py-[1px] font- text-xs '>hot</div>}
            </Link>
          </Suspense>
              <div className=' hidden absolute right-1 top-1 z-10 group-hover:inline-block text-xl '>
                      <WishListButton/>
              </div>
           </div>
          
            <div className='flex flex-col px-2 text-black w-full py-2 max-w-full flex-shrink'>
               <Link href={'/products/' + id + '/details'} >
                  <h2 className=' text-ellipsis text-nowrap overflow-hidden w-full'>{name}</h2>
               </Link>
          <div className='flex flex-wrap items-center overflow-hidden text-sm text-gray-500  '>
             {
              colorCode ? <ProductColor color={color} size={1.6} allow_selection /> :
                <p className=' text-ellipsis text-nowrap overflow-hidden w-full min-h-4  '>{color[0]?.color || ''} </p>
               } 
                     
                </div>
                <div className='flex justify- w-full mb-2 mt-2'>
                    <p className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>{price && price.toString()}</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default  ProductCard