import React from 'react'
import ProductDetails from '@/components/product/product_detail'
import Pegination from '@/components/pagination'
import ProductReviewStatistics from '@/components/product_reviews/product_review_satistics'
import ProductReview from '@/components/product_reviews'
import RelatedProduct from '@/components/product/related_product'
import { products } from '@/data/mock'
import ProductCard from '@/components/product/product_card'
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
        <h3 className='text-xl font-medium my-10'>Related Product</h3>
        <Carousel products={products} />
      </div>
    </div>
  )
}

export default Details