import React from 'react'
import { ProductSkeleton } from './products';


export const ProductUiSkeleton = ({number= 12}) => {
    const numItems = number;
  return (
    <div className="w-full m-auto pt-10 grid xsm:grid-cols-2  
          sm:grid-cols-3 gap-4 md:gap-6 md:grid-cols-4   xl:grid-cols-5 ">
      
      {Array.from({ length: numItems }).map((_, index) => (
        <div key={index}>
          <ProductSkeleton/>
        </div>
      ))}
    </div>     
  )
}
