import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WishListButton from './wishlist_button'
import { Productlist } from '@/type/types'
import ProductColor from './color'


const ProductCard = ({ id, name, product_image = [{ image: '/blur.jpg' }], tag, color, saling_price, colorCode = false }: Productlist ) => {
  console.log( product_image)
  return (
    <div  className='relative  group  border-[1px] 
                   w-[11.5rem] lg:w-[12.5rem] h-fit my-2 pt-1 mx-auto px-auto grow shrink' >
      <div className='w-full relative flex flex-col items-center justify-center gap-2 mx-auto flex-shrink '>
 
           <div className=' flex relative justify-center content-center
           h-[11rem] w-[11rem] lg:h-[12rem] lg:w-[12rem] max-h-[15rem]   max-w-[16rem] 
           shadow-xs bg-gray-50 rounded-md mb- overflow-hidden shrink grow'>
              <Link href={'/products/' + id + '/details'} >
                    <Image src={product_image[0] && product_image[0]['image']} alt={''}
            // fill
              width={180}
              height={180}
                    objectFit='cover'
                    // priority
                    // sizes="170px, 170px, (max-width: 768px) 180px, 180px"
                    />
                    {tag === 'sales' && <div className='absolute bg-blue-contrast1 text-white uppercase left-0 top-3 drop-shadow-md
                    px-3 font-thin text-xs '>sales</div>}
                    { tag === 'new' && <div className='absolute bg-blue-context text-white uppercase left-0 top-3 drop-shadow-md px-3 font- text-xs '>new</div>}
                    { tag === 'hot' && <div className='absolute bg-red-900 text-white uppercase left-0 top-3 drop-shadow-md px-3 py-[1px] font- text-xs '>hot</div>}
              </Link>
              <div className=' hidden absolute right-1 top-1 z-10 group-hover:inline-block text-xl '>
                      <WishListButton/>
              </div>
           </div>
          
            <div className='flex flex-col px-1.5 text-black w-full max-w-full flex-shrink'>
               <Link href={'/products/' + id + '/details'} >
                  <h2 className=' text-ellipsis text-nowrap overflow-hidden w-full'>{name}</h2>
               </Link>
          <div className='flex flex-wrap items-center overflow-hidden text-sm text-gray-500  '>
             {
              colorCode ? <ProductColor colors={color} size={1.6} /> :
                <p className=' text-ellipsis text-nowrap overflow-hidden w-full '>{color && color[0]['name']} </p>
               } 
                     
                </div>
                <div className='flex justify- w-full mb-2 mt-2'>
                    <p className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>{saling_price && saling_price.toString()}</p>
                    {/* <div><p className='line-through font-extralight text-[8px]'>{2344}</p></div> */}
                </div>
            </div>
      </div>
    </div>
  )
}

export default  ProductCard