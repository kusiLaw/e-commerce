import React from 'react'
import ProductCard from '@/components/product/product_card'
import Link from 'next/link'
import { products } from '@/data/mock'
import Pagination from '@/components/pagination'
import Filter from '@/components/filter'
import { CiSearch } from "react-icons/ci";
import { BiGridAlt } from "react-icons/bi";
import { FaList } from "react-icons/fa6";
import { Metadata } from 'next'
import { getData } from '@/lib/backend/django/server_actions'



export const metadata: Metadata = {
  title: 'Product',
}



export default async function Products() {
  const products = await getData()

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
                <div className="rounded-full border-0 py-1 pl-4 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset flex items-center">
                  <input
                    name="email"
                    type='text'
                    placeholder='Search'
                    className="w-full border-collapse focus:outline-0 focus:ring-0 active:border-collapse  "
                    />

                  <span className='text-lg px-2'><CiSearch/></span> 
                </div>
               <div className='text-[1.5rem] ml-5 text-gray-500 hover:text-gray-700'>
                 <BiGridAlt/>
               </div>
               <div  className='text-[1.5rem] ml-2 text-gray-500 hover:text-gray-700'>
                  <FaList/>
               </div>
            </div>
            
            <div className="w-full m-auto grid xsm:grid-cols-2 gap-8 sm:grid-cols-3  md:grid-cols-4  xl:grid-cols-5 xs:overflow-y-scro">
                {
                    products && products.map(data =>(
                    <div key={data.id}>
                        <ProductCard {...data} colorCode={ false} />
                    </div>
                    ))
                }
            </div>
            <div className='flex w-full justify-center my-16'>
                <Pagination/>
            </div>
         </div>
      </div>
    </div>

  )
}

