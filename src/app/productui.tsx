import React from 'react'
import { getData } from "@/lib/backend/server_actions";
import ProductCard from '@/components/product/product_card';

export default async function ProductUi({ url = '' })  {
  const products = await getData(url)
  // console.log('backend n/', products)
  return (

         < >
                { 
                    products?.results.map((data:any) =>(
                    <div key={data.id}>
                        <ProductCard {...data } colorCode = {false}/>
                    </div>
                    ))
                }
        </>  
  )
}
