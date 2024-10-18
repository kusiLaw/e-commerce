import React from 'react'
import ProductDetails from '@/components/product/product_detail'
import { getData } from '@/lib/backend/server_actions'




export default async function Detail({productId}:{productId: string | number}) {
    
 const product = await getData(`v1/products/${productId}/`)
  
    
    if (!product) {
    return (
       <div className='w-full h-[8rem] text-center'>server error</div>
     )
   }
       
  return (
    <ProductDetails product={product} />

  )
}
