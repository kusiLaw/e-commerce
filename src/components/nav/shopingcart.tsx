'use client'
import React, { useEffect,useState} from 'react'
import Image from 'next/image'
import {  TotalCartQuantity, getLocaltCartItems } from '@/helper'
import { updateShopingCartContext } from '@/app/provider'

export const ShopingCart = ({ ...props }) => {
  const { updateShopingCart,  } = React.useContext(updateShopingCartContext)
  
  const [cart, setCart] = useState<any>( [])
  let totalCartQuantity = TotalCartQuantity(cart)
 
  useEffect(() => {
    setCart(getLocaltCartItems())
    
  }, [updateShopingCart])

  

  return (
    <div className="relative w-fit">
      <button id="cart" type='button' className="flex bg-red-00 h-full items-center content-center text-[1.4rem] text-bold"
        onClick={() => { props.closeAll();  props.setDisplayCart(true); } }
      >
        <Image
          alt="profile"
          src="/shopping-cart.svg"
          height={25}
          width={25}
          className=""
        />
        <span
          id="cart"
          className="absolute text-center font-semibold top-1.5 w-8 -right-4 rounded-full text-sm hover:text-blue-context text-red-500 border- overflow-clip text-ellipsis"
          onClick={() => { props.closeAll();  props.setDisplayCart(true); } }
        >
          { totalCartQuantity  }
        </span>
      </button>
    </div>
  )
}
