import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WishListButton from './wishlist_button'

export interface  Product {
  name : string ;
  image : string;
  tag: 'sales' | 'hot' | 'new'
  id: string | number,
  link: string,
  color: string | Array<string>,
  total_rate: string |  number,
  description:string
  price: Number | string
}



  // height = {180} 
                    // width={180}
const  ProductCard = ({name, image, tag, color,price, link }: Product) => {
  return (
    <div  className='relative  group  border-[1px] flex-shrink
                   w-[11.5rem] lg:w-[12.5rem] h-fit my-2 pt-1 mx-auto px-auto' >
      <div className='w-full relative flex flex-col items-center justify-center gap-2 mx-auto flex-shrink '>
 
           <div className=' flex relative justify-center content-center
           h-[11rem] w-[11rem] lg:h-[12rem] lg:w-[12rem] max-h-[15rem]   max-w-[16rem] 
           shadow-xs bg-gray-50 rounded-md mb- overflow-hidden flex-shrink'>
              <Link href={link} >
                    <Image src={image} alt={''}
                    fill
                    objectFit='contain'
                    priority
                    sizes="170px, 170px, (max-width: 768px) 180px, 180px"
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
               <Link href={'products/details'} >
                  <h2 className=' text-ellipsis text-nowrap overflow-hidden w-full'>{name}</h2>
               </Link>
                <div className='text-sm text-gray-500'>
                    <p className=' text-ellipsis text-nowrap overflow-hidden w-full '>{color} </p>
                </div>
                <div className='flex justify- w-full mb-2 mt-2'>
                    <p className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>{price}</p>
                    {/* <div><p className='line-through font-extralight text-[8px]'>{2344}</p></div> */}
                </div>
            </div>
      </div>
    </div>
  )
}

export default  ProductCard