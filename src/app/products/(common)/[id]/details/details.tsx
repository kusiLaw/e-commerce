import React from 'react'
import ProductDetails from '@/components/product/product_detail'
import { getData } from '@/lib/backend/server_actions'


export default async function Detail({ productId }: { productId: string | number }) {
    
 const products = await getData()
  
  const product = products?.results.filter((item: any) => item.id === Number(productId));

    
  if (!product) {
    return (
       <div className='w-full h-[8rem] text-center'>server error</div>
     )
   }
       
  return (
    <ProductDetails product={product[0]} />

  )
}
