import React, { Suspense } from 'react'
import Link from 'next/link'
import Filter from '@/components/filter'
import { BiGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { Metadata } from 'next'
import { getData } from '@/lib/backend/server_actions'
import SearchInput from '@/components/form/search'
import ProductUi from '../productui'
import { ProductUiSkeleton } from '@/components/skeleton'


export const metadata: Metadata = {
  title: 'Product',
  description: 'Browse our product collection',


}



export default async function Products({  
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: string;
  };
  }) {
  
  // const query = searchParams?.name || '';
  // const currentPage = Number(searchParams?.page) || 1 ;
  
  const products = await getData();


  return (
    <div className='w-full h-auto pt-4 icon_bg px-2 md:px-3'>
      <div className='text-xs text-gray-500 ml-[2%]'>

        <Link href={'/'} className='hover:text-gray-700'>Home </Link> / 
      </div>
      <div className='flex  w-full pt-4'>
        
        <div className='hidden sticky top-0 lg:block md:w-[14rem] lg:w-[16rem] h-fit  shadow-sm divide- gap-3'>
          <Filter />
        </div>
         <div className='w-full '>
            <div className="flex  w-full justify-end items-center mt-2  h-[2.3rem]  mb-6 pr-10">
            <Suspense fallback={<>loading</>}>
              <SearchInput placeholder={"Search..."} />
            </Suspense>
            
               <div className='text-[1.2rem] ml-5 text-gray-500 hover:text-gray-700'>
                 <BiGridAlt/>
               </div>
               <div  className='text-[1.2rem] ml-2 text-gray-500 hover:text-gray-700'>
                  <FaList/>
               </div>
            </div>
          <Suspense fallback={<ProductUiSkeleton number={10} />}>
            <div className='w-full mx-auto px-4 md:px-6 lg:px-8'>
        
              <ProductUi products={products.results}  className="grid xsm:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-6 xl:grid-cols-4   " />
            </div>
            </Suspense>
          <div className='flex flex-col w-full  items-center my-16'>
            {/* <Pagination totalItems = {products.count}/> */}
           {/* <span className='text-gray-400 text-sm '>{products?.results.lenght} / { products?.count}</span>   */}
                
            </div>
         </div>
      </div>
    </div>
  )
}

