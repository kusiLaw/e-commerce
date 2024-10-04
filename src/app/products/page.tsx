import React, { Suspense } from 'react'
import ProductCard from '@/components/product/product_card'
import Link from 'next/link'
import Pagination from '@/components/pagination'
import Filter from '@/components/filter'
import { CiSearch } from "react-icons/ci";
import { BiGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { Metadata } from 'next'
import { getData } from '@/lib/backend/django/server_actions'
import { Productlist } from '@/type/types'
import SearchInput from '@/components/form/search'
import ProductSection from './product_section'
import ProductUi from '../productui'

// import { useSearchParams } from 'next/navigation';


export const metadata: Metadata = {
  title: 'Product',
}



export default async function Products({
  searchParams,
}: {
  searchParams?: {
    name?: string;
    page?: string;
  };
  }) {
  
  console.log(searchParams,'search....')
  const query = searchParams?.name || '';
  const currentPage = Number(searchParams?.page) || 1 ;

  // const products = await getData(`?page=${query}`)

  // console.log(products)
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
            <div className="flex  w-full justify-end items-center mt-2 mb-6 pr-10">
               
                <SearchInput  placeholder={"Search..."}/>
               <div className='text-[1.5rem] ml-5 text-gray-500 hover:text-gray-700'>
                 <BiGridAlt/>
               </div>
               <div  className='text-[1.5rem] ml-2 text-gray-500 hover:text-gray-700'>
                  <FaList/>
               </div>
            </div>
           <Suspense fallback={<>loading</>}>
              <div className="w-full m-auto grid xsm:grid-cols-2 gap-8 sm:grid-cols-3  md:grid-cols-4  xl:grid-cols-5 xs:overflow-y-scro">
                  {/* <ProductSection products={products.results}/>
                   */}
                  <ProductUi url={`v1/products/?page=${query}` } />
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

