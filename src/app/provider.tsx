'use client'
import { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../helper/localStorage'
import { ProductDetail } from '../type/types'
import { getLocaltCartItems } from '../helper/index'
// All shared data use by dashboard only should be her{ updateShopingCart: 0, sete ..
export const updateShopingCartContext = createContext<{ updateShopingCart: {} ; setUpdateShopingCart: React.Dispatch<React.SetStateAction<any>> } >({ updateShopingCart: [], setUpdateShopingCart: () =>  [] })
export const openCartContext = createContext<{ openCart: boolean; setOpenCart: React.Dispatch<React.SetStateAction<boolean>> } >({ openCart: false, setOpenCart: () => { } })





import { ReactNode } from 'react'

 const CartProvider = ({ children }: { children: ReactNode }) => {


 const [updateShopingCart, setUpdateShopingCart]  = useState( getLocaltCartItems(  ) || [] )  //default : true
 const [openCart, setOpenCart] = useState( false ) // default : false)

     
 return (
 <updateShopingCartContext.Provider value={{updateShopingCart, setUpdateShopingCart}}>
    <openCartContext.Provider value={{openCart, setOpenCart}}>
        {children}
    </openCartContext.Provider>
 </updateShopingCartContext.Provider>
 )
}

export default CartProvider

