import React from 'react'
import CustomerReview from './customer_review'
import { customerReview } from '@/data/mock'
import ProductReviewStatistics from './product_review_satistics'

const ProductReview = () => {
  return (
    <div className='flex w-[100%] bg-gray-50 py-16 '>
      <div className='flex flex-col md:flex-row   self-center gap-5 mx-[5%]'>
        <div className='w-full md:w-[50%] px-4  py-2 '>
          <h2 className='text-lg md:text-2xl font-semibold mb-4'>Customer Reviews</h2>
          <div>
            <ProductReviewStatistics/>
          </div>
          <div className='w-full px-4 py-2 mt-4'>
            <h3 className='text-lg md:text-xl  mb-3'>Share your thoughts</h3>
            <div className=''>
              <p className='text-wrap w-full mb-5'>Help other get thier best products.If you{'’'}ve 
              used this product, share your thoughts with other customers. <span className='text-xs block mt-1'>{'( '}you must have this product
              in your order history before you can review it{' )'}</span>
              </p>
              <div className='mt-6  w-full'>
                <button className='text-center py-3 border border-gray-500 w-full hover:bg-blue-hover hover:text-white'>
                  Write a review
                </button>
              </div>
          
            </div>
      
          </div>
       
        </div>
        <ul className='flex flex-col gapw-full md:w-[50%] divide-y divide-gray-200'>
            {
            customerReview.map(el => (
              <li key={el.name + el.rate}>
                <CustomerReview  {...el}/>
              </li>
              
            ))
            }
            
        </ul>
      </div>
    </div>
  )
}

export default ProductReview