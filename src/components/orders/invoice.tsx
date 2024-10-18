'use client'
import React from 'react'
import {products}  from "@/data/mock"
import OrderStatus from './order_status'
import OrderSummary from './order_summary'
import PaymentDetails from './payment'

const Invoice = () => {
  return (
    <div>
      <OrderStatus orderStatus={'delivered'} as_invoces/>
      <div className='p-3 md:p-10 bg-gray-50 mt-4 w-full'>
        
        <table className=' w-full md:w-[80] mx-auto'>
            <thead className='divide-y bg-gray-200'>
              <tr className='grid grid-cols-4 capitalize  '>
                 
                    <th  className='py-6 text-start mx-4'>Item discription</th>
                    <th className='py-6 text-end mx-4'>Code</th>
                    <th className='py-6 text-end mx-4'>Quantity</th>
                    <th  className='py-6 text-end mx-4'>Total</th>
             
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
            {products.map((product)=>(
                <tr key={product.id} className='grid grid-cols-4 capitalize hover:bg-gray-100'>
                  <td className='py-6 text-start mx-4 '>{product.name}</td>
                  <td className='py-6 text-end mx-4'>{product.code }</td>
                  <td className='py-6 text-end mx-4'>{product.quantity}</td>
                  <td className='py-6 text-end mx-4'>{product.price}</td>
                </tr>
              ))}
            </tbody>
            
        </table>
        <div className='flex flex-col items-end w-full my-10 gap-10 '>
               
                <div className='w-full md:w-[30%]' >
                
                  <OrderSummary orders={products} tax={57} shipping={0}/>
                </div>
                <PaymentDetails/>
        </div>

        <div className='w-full flex flex-col gap-3 justify-center'>
          <p className='text-center text-gray-400'>Thank you for chosing us </p>
          <button className='text-blue-context' onClick={()=> window.print()}>Print</button>
        </div>     
       
       </div>
  
  
    </div>
  )
}

export default Invoice