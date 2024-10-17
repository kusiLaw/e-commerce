import Image from 'next/image'
import React from 'react'
import Star from '../stars_rating/star'
import { CustomersReview } from '@/type/types'




const CustomerReview = ({ name, rate, image, comment, onPage = false }: CustomersReview 
  
) => {
  if (onPage) {
     return (
       <div className="w-full p-4 md:p-8 mt-16 mb-2 bg-gray-50 drop-shadow-md  flex flex-col gap-4 justify-center rounded-lg">
        <p className='h-[6rem]  text-ellipsis overflow-hidden'>{`" ${comment} " `}</p>
        <Star rate={rate} numberOfStars={5} disableColor={false}   />
        <div className="flex items-center gap-4 mt-2">
          <div className='relative flex flex-col justify-center items-center content-center h-[3rem] w-[3rem] rounded-full  bg-blue-100  ring-3 ring-white '>
            <Image src={image} alt={name} fill className='rounded-full '/>
          </div>
           <p className="capitalized font-semibold">{name}</p>
        </div>
      </div>
     ) 
   }
    

  return (
    <div className='w-full py-6 px-4 flex flex-col gap-4'>
        <div className='flex items-center gap-3'>
            <div className='relative flex flex-col justify-center items-center content-center h-[3rem] w-[3rem] rounded-full  bg-blue-100  ring-3 ring-white '>
              <Image src={image} alt={name} fill className='rounded-full '/>
            </div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold'>{name}</h2>
                <div className=''>
                  <Star rate={rate} numberOfStars={5} disableColor={false} />
                </div>
                
            </div>
        </div>

        <div className='italic'>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default CustomerReview