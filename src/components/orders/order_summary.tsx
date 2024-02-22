'use client'

import React, { useRef } from 'react'

 const OrderSummary = ({orders, shipping=0, tax=0}) => {
  const ordertotal = orders.reduce((acc, order) => (acc + parseFloat(order.price ) ),0)
  return (
    <div>
    <h2 className='text-lg font-medium'>Order Summary</h2>
        <div className='divide-y divide-gray-200'>
            <div className='flex justify-between py-3 '>
                <p>Subtotal</p>
                <p>$ {ordertotal}</p>
            </div>
            <div className='flex justify-between py-3 '>
                <p>Shipping</p>
                <p>${shipping}</p>
            </div>
            <div className='flex justify-between py-3 '>
                <p>Tax</p>
                <p>${tax}</p>
            </div>
            <div className='flex justify-between py-3  font-medium bg-gray-100'>
                <p>Total Paid</p>
                <p className='text-lg'>${parseFloat(shipping) + parseFloat(tax) + parseFloat(ordertotal) }</p>
            </div>
            
        </div>
  </div>
  )
}

export default OrderSummary