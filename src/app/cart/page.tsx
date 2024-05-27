
import CartProduct from '@/components/cart/product'
import OrderSummary from '@/components/orders/order_summary'
import React from 'react'
import { products } from '@/data/mock'
import Link from 'next/link'

const ShoppingCart = () => {
  return (


    
<div className='p-3 md:p-10 bg-gray50'>
    <div className='text-lg w-full font-medium bg-gray-50  py-3 px-1 shadow-sm border-t border-t-blue-context'>
        <h2>Shoping Cart</h2>
    </div>

    <div className='flex flex-col gap-10 mt-4 md:flex-row md:gap-[5%]'>
      <div role="list" className="flex flex-col gap-4   divide-gray-200 w-full md:w-[55%]">
          <CartProduct />
      </div>
      <div className='w-full md:w-[40%] px-2 md:px-4 mt-4'>
          <OrderSummary orders={products} tax={57} shipping={0}/>
          <div className={'mt-10'}>
              <Link href={'/checkout'}
                type="submit"
                className={` flex w-full justify-center rounded-md bg-blue-context font-semibold  px-2 py-2  font- leading-6 text-lg capitalize
                text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                Checkout Now
              </Link>
          </div>

      </div>
    </div>
</div>





  )
}

export default ShoppingCart