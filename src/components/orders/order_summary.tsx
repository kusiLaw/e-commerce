'use client'

import React, { useEffect, useState, useContext } from 'react'
import { TotalCartQuantity, getLocaltCartItems, TotalCartPrice } from '@/helper'
import { Frank_Ruhl_Libre } from 'next/font/google'
import { updateShopingCartContext } from '@/app/provider'

const OrderSummary = ({ }: { orders?: Array<any>, shipping?: any, tax?: any }) => {
      const { updateShopingCart } = useContext(updateShopingCartContext);
    
     
      const [cart, setCart] = useState<any>( [])
    let totalCartPrice = TotalCartPrice(cart) || 0
     
      useEffect(() => {
        setCart(getLocaltCartItems())
      }, [updateShopingCart])
    
    const tax = Number( totalCartPrice) > 0 ? totalCartPrice * 0.10 : 0
    const shipping = 0
  const ordertotal = Number( totalCartPrice)  + shipping + tax
  return (
    <div>
    <h2 className='text-lg font-medium'>Order Summary</h2>
        <div className='divide-y divide-gray-200'>
            <div className='flex justify-between py-3 '>
                <p>Subtotal</p>
                {/* <p>$ {ordertotal}</p> */}
            </div>
            <div className='flex justify-between py-3 '>
                <p>Shipping</p>
                <p>${shipping}</p>
            </div>
            <div className='flex justify-between py-3 '>
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
            </div>
            <div className='flex justify-between py-3  font-medium bg-gray-100'>
                <p>{'Order Total'}</p>
                <p className='text-lg'>$ {ordertotal.toFixed(2) }</p>
            </div>
            
        </div>
  </div>
  )
}

export default OrderSummary