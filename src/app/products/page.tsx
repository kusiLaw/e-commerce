import React from 'react'
import ProductCard from '@/components/product/product_card'
import Link from 'next/link'
import { products } from '@/data/mock'

const Products = () => {
  return (
    <div className='w-full h-auto pt-6'>
      <div className='text-xs text-gray-500 ml-[4%]'>

        <Link href={'/'}>Home </Link> / 
      </div>
      <div className='flex  w-full pt-4'>
        
        <div className='hidden lg:block md:w-[14rem] lg:w-[16rem] border-r shadow-sm divide-y gap-3'>
            <h3 className='text-center bg-gray-100 p-3 w-full'>Filter</h3>
            <div className=''>
            </div>
        </div>
         <div className='w-full '>
            <div className="flex  w-fit justify-end mt-2 mb-6">
                {/* <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-hover
                sm:text-sm sm:leading-6"
                /> */}
            </div>
            
            <div className="w-full m-auto grid xsm:grid-cols-2  sm:grid-cols-3  md:grid-cols-4  xl:grid-cols-5 overflow-y-scroll">
                {
                    products.map(data =>(
                    <div key={data.id}>
                        <ProductCard {...data}/>
                    </div>
                    ))
                }
            </div>


            








         </div>
       
      </div>
    </div>

  )
}

export default Products