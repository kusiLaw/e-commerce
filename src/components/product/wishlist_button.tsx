import React from 'react'
import Image from 'next/image'
import { Span } from 'next/dist/trace'
import { FaRegHeart } from "react-icons/fa";


const WishListButton = ({visible=true}) => {
 
  const handleClick = () =>{
    // todo:save to accounts if login 
 }

  return (
    <button className={`${visible? 'inline-block' : ' hidden'} group/like   bg-white p-2 rounded-full shadow-md hover:text-blue-context  transition-all duration-900 ease-in`}>
      <span className={'group-hover/like:text-blue-context text-black'}>
        <FaRegHeart/>
        <></>
      </span>
    </button>
  )
}

export default WishListButton