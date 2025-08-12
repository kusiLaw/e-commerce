'use client'
import React, { useRef, useReducer, useState,useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Logo from '../logo/logo';
import Cart from '../cart';
import Link from 'next/link';
import ProfileDropDown from './profile';
import { BiSupport } from "react-icons/bi";
import { getLocalStorage } from '@/helper/localStorage';
import { ShopingCart } from './shopingcart';
import CartProvider from '@/app/provider';
import { openCartContext, updateShopingCartContext } from '@/app/provider';
import {  TotalCartQuantity, getLocaltCartItems } from '@/helper'
// import { updateShopingCartContext } from '@/app/provider'



const Nav = () => {
  const { openCart, setOpenCart } = React.useContext(openCartContext) || { openCart: false, setOpenCart: () => { } };
  const [isOpen, setIsOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const [pageCover, setPageCover] = useState(false)
  const pathname = usePathname()

 

  const handleDropDowns=(setMethod:any, value:any)=>{
    setMethod(value)
    setPageCover(value)
  }

  const closeAllDropDowns=()=>{
    setProfile(false)
    // setPageCover(false)
    setOpenCart(false)
  }


  return (
  
      <div className="bg-white">
        <div className=" bg-white ">
          <nav  className="fixed z-30 top-0 right-0 left-0 max-w-[1920px] mx-auto  px-4 sm:px-6 lg:px-8  h-[4rem] bg-gray-50 w-full  ">
      
            <div className='flex justify-between h-full' >
              <div className='h-full flex items-center'>
                <Logo/>
              </div>
            
              <div className='flex  gap-4 h-full w-fit'>
  
                  <div className={` relative text-lg  h-full  group 
                      transition-all duration-500 ${pathname === '/products' ? 'border-b-blue-context' : ' '}`}>
                        <div className='hidden sm:inline-flex h-full items-center justify-center '>
                          <Link href={'/products'} className={`hover:text-blue-context border-r-2 pr-4 capitalize 
                          group-hover:text-blue-context link  ` }>products</Link>
                        </div>
                    </div>
                  
                
                      <div className=' relative text-lg h-full  group  transition-all duration-500 '>
                        <div className='hidden md:inline-flex gap-1 h-full items-center justify-center  group-hover:text-blue-context'>
                        <BiSupport/>
                          <p className='hover:text-blue-context border-r-2 pr-4'>Support</p>
                        </div>
                      </div>
               

                  {/* profile */}
                  <div className=' relative text-xl font-light h-full  '>
                      <button className='h-full flex items-center justify-center text-[1.4rem] gap-2 ' onClick={()=>{
                    closeAllDropDowns(); handleDropDowns(setProfile, !profile) }} >
                            <Image alt={'profile'}src={'/user-alt-line.svg'} height={25} width={25} className=''/>
                      </button>
                    
                      {profile && <ProfileDropDown isLogin={false} eventfn={handleDropDowns} args={setProfile}/>}
                  </div>

                  {/* cart */}
              <ShopingCart closeAll={closeAllDropDowns} setDisplayCart={setOpenCart}  />
              </div>
            </div>
          
          
          </nav>
          {isOpen && <div className='fixed md:hidden top-0 left-0 w-screen right-0 h-screen  bg-gray-600/30 shadow-xl z-50' onClick={
            () => setIsOpen(false)
          }>
          <div className='fixed h-full w-[85%] border bg-white '>
            
          </div>
          </div>}
          {isOpen && <div  className='fixed left-0  right-0 h-full  bg-gray-600/20  transition-opacity shadow-xl z-20'>
                  
                  </div>}
        </div>
    
       <Cart open = {openCart} setOpen={setOpenCart}/>
      </div>

  )
}

export default Nav

