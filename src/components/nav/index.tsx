'use client'
import React, { useRef, useReducer } from 'react'
import { Fragment, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import Image from 'next/image';
import Logo from '../logo/logo';
import Cart from '../cart';
import { LinkButton } from '../form/button';
import Link from 'next/link';
import ProfileDropDown from './profile';
import { BiSupport } from "react-icons/bi";
import { access } from 'fs';


const Nav = () => {
  // const [state, dispatch] = useReducer(reducer , {
  //   openUser: false,

  // })
  const [isOpen, setIsOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const [pageCover, setPageCover] = useState(false)
  const [displayCart, setDisplayCart] = useState(false)
  const darkRef = useRef(null)

  const handleDropDowns=(setMethod, value)=>{
    setMethod(value)
    setPageCover(value)
  }


  const handleCart = (e)=>{
    e.stopPropagation()
    console.log(e.target)
    let name  = e.target.name ||  e.target.parentElement.name // solve icon inner element
    console.log(e.target)
   name === ' cart' ? setDisplayCart(true) : setDisplayCart(true)
  }
  

  return (
      <div className="bg-white">
      <header className=" bg-white ">
        {/* <p className="flex h-8 items-center justify-center bg-blue-context px-4 text-sm
         font-medium text-white sm:px-6 lg:px-6">
          Get free delivery on orders over $100
        </p> */}
        <nav  className="fixed z-30 top-0 right-0 left-0 mx-auto  px-4 sm:px-6 lg:px-8  h-[4rem] bg-gray-100 w-full max-w-[1660px] ">
     
          <div className='flex justify-between h-full' >
            <div className='h-full flex items-center'>
              <Logo/>
            </div>
           
            <div className='flex  gap-4 h-full text-black  w-fit'>
  
                {/* <div className='border '> */}
                   
                    <div className=' relative text-lg font- h-full  '>
                      <div className='hidden md:inline-flex h-full items-center justify-center '>
                        <p className='hover:text-blue-context '>Features</p>
                      </div>
                    </div>
                    <div className=' relative text-lg font- h-full hover:bg-gray-100 hover:border-b hover:border-blue-context '>
                      <div className='hidden md:inline-flex h-full items-center justify-center '>
                        <Link href={'/products'} className='hover:text-blue-context border-r-2 pr-4 capitalize' >products</Link>
                      </div>
                    </div>
                    <div className=' relative text-lg font- h-full  hover:border-b hover:border-blue-context border-b '>
                      <div className='hidden md:inline-flex gap-1 h-full items-center justify-center '>
                      <BiSupport/>
                        <p className='hover:text-blue-context border-r-2 pr-4'>Support</p>
                        
                      </div>
                    </div>
                {/* </div> */}

                {/* profile */}

                <div className=' relative text-xl font-light h-full  '>
                    <button className='h-full flex items-center justify-center text-[1.4rem] gap-2 ' onClick={()=>{
                    handleDropDowns(setProfile, !profile) }} >
                      <Image alt={'profile'}src={'./user-alt-line.svg'} height={25} width={25} className=''/>
                      
                      {/* <span className='h-full flex items-center justify-center text-[1.2rem] w- hover:text-black '>
                        <FaRegUser/></span> */}

                    </button>
                  
                  {profile && <ProfileDropDown isLogin={false} eventfn={handleDropDowns} args={setProfile}/>
                  }

                </div>

                {/* cart */}
                <div className='relative w-fit  '>
                  <button id='cart' className='flex bg-red-00 h-full items-center content-center text-[1.4rem] '
                  onClick={()=>handleDropDowns(setDisplayCart, true)} >
                   <Image alt={'profile'}src={'./shopping-cart.svg'} height={25} width={25} className=''
                      />

                    {/* <span id='cart' className='h-full  flex items-center justify-center text-[1.5rem] w-8 hover:text-black'onClick={handleCart} ><IoCartOutline
                   name='cart' onClick={handleCart}/></span>
                    <span id='cart' className='absolute top-2 right-0 rounded-full text-sm  p-auto text-end hover:text-blue-context
                    'onClick={handleCart}>0</span> */}
                  </button>
                </div>
            </div>
          </div>
         
        
        </nav>
        {isOpen && <div className='fixed md:hidden top-0 left-0 w-screen right-0 h-screen  bg-gray-600/30 shadow-xl z-50' onClick={
          () => setIsOpen(false)
        }>
         <div className='fixed h-full w-[85%] border bg-white '>
            joijpjpjp'jpjpjpjpjopjpopoj
         </div>
        </div>}
        {pageCover && <div  className='fixed left-0  right-0 h-full  bg-gray-600/30 shadow-xl z-20'>
                
                </div>}
      </header>
  
       <Cart open = {displayCart} setOpen={setDisplayCart}/>
    </div>

  )
}

export default Nav



// function reducer(state:any, action:any){
//     switch(action.type){
//       case 'ac' || 'aa'
//     }
// }