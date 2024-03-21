import React from 'react'
import ProductDetails from '@/components/product/product_detail'
import ProductReview from '@/components/product_reviews'
import { products } from '@/data/mock'
import Carousel from '@/components/carousel'

const Details = () => {
  return (
    <div className='w-full'>
      <div className='w-full mb-4 py-12'>
         <ProductDetails/>
      </div>
      <div>
         <ProductReview/>
      </div>
      <div className='my-10'>
          <h2  className={`mt-20 mb-14 text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
          related product
        </h2>
        <div className='m-2 lg:m-6'> <Carousel products={products} /> </div>
      </div>
    </div>
  )
}

export default Details