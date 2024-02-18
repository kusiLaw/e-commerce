import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WishListButton from './wishlist_button'




const  ProductCard = ({tag='saes'}) => {
  return (
    <div  className='relative  group flex flex-col items-center  gap-2 border-[1px] h-fit w-[16rem] pt-1 mx-auto ' >
            <Link href={'/'} className=' flex justify-center content-center h-[16rem] max-h-[15rem] w-[15rem]  max-w-[16rem] shadow-sm bg-gray-50 rounded-md mb- overflow-hidden'>
                <Image src={'/img/hp_envy_1.jpg'} alt={''}
                // fill
                height = {180} 
                width={180}
                className='self-center '
                />
                {tag === 'sales' && <div className='absolute bg-blue-contrast1 text-white uppercase left-0 top-3 drop-shadow-md
                 px-3 font-thin text-sm '>sales</div>}
                { tag === 'new' && <div className='absolute bg-blue-context text-white uppercase left-0 top-3 drop-shadow-md px-3 font- text-sm '>new</div>}
                { tag === 'hot' && <div className='absolute bg-red-900 text-white uppercase left-0 top-3 drop-shadow-md px-3 py-[1px] font- text-sm '>hot</div>}
               <div className='hidden absolute right-1 top-1 z-10 group-hover:inline-block text-xl '>
                  <WishListButton/>
               </div>
            </Link>
            <div className='flex flex-col px-1.5 text-black w-full max-w-full '>
               
                <h2 className=' text-ellipsis text-nowrap overflow-hidden w-full'>Dell lat 3</h2>
          
                <div className='text-sm text-gray-500'>
                    <p className=' text-ellipsis text-nowrap overflow-hidden w-full '>Black </p>
                </div>
                <div className='flex justify-between w-full mb-2 mt-2'>
                    <p className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>$100</p>
                </div>
            </div>
            
        
      

    </div>
  )
}

export default  ProductCard