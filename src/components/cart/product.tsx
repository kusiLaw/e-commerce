'use client'

import React, {useState} from 'react'
import {products}  from "@/data/mock"
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react';
// import { CartProductSkeleton } from '@app/components/skeleton';
import NumberInput from './numberInput';
import { assistant } from '../font'



const CartProduct = () => {
  const [inputValue, setInputValue] = useState(1)

  return (
    <Suspense  fallback={<></>}>
      <div className={`${assistant.className} mt-8 `}>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.slice(2,4).map((product) => (
              <li key={product.id} className="flex py-6">
                
                <div className=" h-24 w-24 flex-shrink-0 flex content-center justify-center overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-fit  w-fit self-center content-center"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base text-gray-900">
                      <h3>
                        <a href={product.link}>{product.name}</a>
                      </h3>
                      <p className="ml-4">{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className='flex gap-3'>
                      <p className="text-gray-500">Qty : </p> 
                      <NumberInput/>
                    </div>
                   
                    
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-blue-context hover:text-blue-hover"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Suspense>

  )
}

export default CartProduct