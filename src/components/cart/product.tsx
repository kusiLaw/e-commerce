

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { Suspense,  } from 'react';
import NumberInput from './numberInput';
import { assistant } from '../font'
import { getLocalStorage,  } from '@/helper/localStorage';
import { imgUrl } from '@/lib/backend/urls';
import { RemoveProductFromCart, getLocaltCartItems } from '@/helper';
import { updateShopingCartContext } from '@/app/provider';

export default function CartProduct({ disabledNumberInput = false }) {
  const { updateShopingCart,setUpdateShopingCart } = React.useContext(updateShopingCartContext);
    const [cart, setCart] = useState(getLocalStorage('cart') || []);
    const product = Object.values(cart)

  useEffect(() => {
    setCart(getLocalStorage('cart') || []);
  }, [updateShopingCart]);

  if ( product.length === 0 ) {
    return (
      <div className='w-full h-[20rem] flex justify-center items-center '>
        <p className='text-lg '>Your cart is empty</p>
      </div>  
    )
  }

;

  return (
    <Suspense  fallback={<>Loading</>}>
      <div className={`${assistant.className} mt-8 w-full flex flex-col justify-center mx-auto`}>
        <div className="flow-root w-full">
          <ul role="list" className="-my-6 divide-y divide-gray-200 w-full">
            {product.map((item: any  ) => (
              <li key={item.id} className="flex py-6 w-full">
                
                <div className=" h-24 w-24 flex-shrink-0 flex content-center justify-center overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={imgUrl + item.product_image[0].image}
                    alt={item.name}
                    className="h-fit  w-fit self-center content-center"
                    width={60}
                    height={60}
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base text-gray-900">
                      <h3>
                        <a href={item.link}>{item.name}</a>
                      </h3>
                      <p className="ml-4">{(Number(item.price) * Number(item.quantity)).toFixed(2)} </p>
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{item.color}</p> */}
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className='flex gap-3'>
                      <p className="text-gray-500">Qty :  </p> 
                      <NumberInput disabled={disabledNumberInput}  productId={item.id} quantity={item.quantity}/>
                    </div>
                   
                    
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-blue-context hover:text-blue-hover"
                        onClick={() => {
                          
                          const cart = RemoveProductFromCart(item.id)
                          setCart(cart);
                          localStorage.setItem('cart', JSON.stringify(cart));

                          setUpdateShopingCart(getLocaltCartItems())
                          
                        }}
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

