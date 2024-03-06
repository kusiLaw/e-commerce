
import React from 'react'

import Link from 'next/link';
// import CartProduct from '../cart/product';
import {products}  from "@/data/mock"
import Image from 'next/image'
import OrderStatus from './order_status'
import OrderSummary from './order_summary';

const Orders = ({orderStatus = 'placed'}) => {


  return (
    <div className='p-3 md:p-10 bg-gray-50 '>
        <div className=''>
          <OrderStatus orderStatus= {orderStatus}/>
        </div>

        <div className='flex flex-col gap-10 mt-16 md:flex-row md:gap-[5%]'>
          <ul role="list" className="flex flex-col gap-4   divide-gray-200 w-full md:w-[55%]">
            {products.map((product) => (
              <li key={product.id} className="flex py-6 bg-white px-4 drop-shadow-sm bottom-1 border-gray-50 min-w-fit">
                
                <div className=" h-24 w-24 flex-shrink-0 flex content-center justify-center overflow-hidden rounded-md  border-gray-200">
                  <Image
                    src={product.image}
                    alt={product.image}
                    className="h-fit  w-fit self-center content-center"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base text-gray-900">
                      <h3>
                        <Link href={product.link} className='text-blu-context'>{product.name}</Link>
                      </h3>
                      <div className="flex">
                      <Link href={orderStatus === 'delivered' ? 'review-view' : 'product-link'}
                        type="button"
                        className="font-light text-sm text-blue-context hover:text-blue-hover hover:underline hover:underline-offset-4"
                      >
                        {orderStatus === 'delivered' ? 'Review Product' : 'View product'}
                      </Link>
                    </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className='flex gap-3'>
                      <p className="text-gray-500">Quantity : 1 </p>   
                    </div>
                   
                    
                
                    <p className="ml-4 text-lg">{product.price}</p>

                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='w-full md:w-[40%] px-2 md:px-4 '>
              <OrderSummary orders={products} tax={57} shipping={0}/>
              <div className='mt-6'>
                <div className=''>
                    <div className='flex justify-between'>
                      <h2 className='font-medium'>Billing address</h2>
                      <Link href={''} className='text-sm text-blue-context 
                    hover:underline hover:underline-offset-4 font-semi-bold'>Edit</Link>
                    </div>
                   <div className='font-light text-gray-400 mt-3 '>
                    <p>Lawrence Addai Kusi</p>
                    <p>6 Paron Place</p>
                    <p>Bletchley United Kingdom</p>
                    <p>MK2 3NU</p>

                   </div>
                  
                </div>
               
              </div>
           
          </div>
        </div>
    </div>
  )
}

export default Orders