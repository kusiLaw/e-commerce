import React from 'react'
import Star from '../stars_rating/star'
import ProgressBar from '../form/progress_bar'
import { productReviews } from '@/data/mock'


const ProductReviewStatistics = () => {

  return (
    <div className='p-2 w-[80%] lg:w-[24rem]' >
        <div className='flex font-semibold gap-3 mb-4 '>
            <Star rate={4} numberOfStars={5} disableColor={false}/>
            <p className='text-gray-500'>Base on 312 reviews</p>
        </div>
        {productReviews.map((el)=>(
            <div key={el.rate} className='flex gap-2 mb-2 w-full justify-evenly content-center items-center'>
                <p className='w-fit border'>{el.rate}</p>
                <div><Star numberOfStars={1} rate={1} disableColor={false}/></div>
                <ProgressBar percentage={el.percentage} height={0.75} bg={'#facc15'}/>
                <p>{el.percentage}%</p>
            </div>
        ))}

    </div>
  )
}

export default ProductReviewStatistics