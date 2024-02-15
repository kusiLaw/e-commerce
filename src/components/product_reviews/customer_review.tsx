import Image from 'next/image'
import React from 'react'
import Star from '../stars_rating/star'
import { CustomersReview } from '@/type/types'




const  CustomerReview= ({name, rate, image, comment} :CustomersReview) => {
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