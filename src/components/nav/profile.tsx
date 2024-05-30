import Link from 'next/link'
import React from 'react'
import { RiArrowRightSFill } from "react-icons/ri";


const ProfileDropDown = ({isLogin = false, eventfn, args=''} : {isLogin: boolean, eventfn : any, args:any }) => {
 if(!isLogin){
    return(
        <div className='absolute bg-white min-w-[15rem] h-fit z-30 shadow-lg right-0 p-2 '
                    onMouseLeave={()=> eventfn(args, false)}> 
                      <div  className='divide-y text-black'>
                        <h2 className='w-full text-black text-base py-2'>My Account:</h2>
                        <ul className=' font-light text-wrap text-sm py-2 list-disc'>
                        {['Place orders quickly and easily','View orders and track your shipping status', 'Request product not found on site and more'].map(el =>(
                          <li key={el} className='flex items-center gap-1 mt-2'>
                          <span className='text-base'><RiArrowRightSFill/></span>  <p>{el}</p>
                          </li>
                        ))

                        }
                        </ul>
                       
                      </div>
                      <div className='mt-4'>
                        <Link href={'/auth/login'} className='flex w-full justify-center text-sm rounded-sm py-1  bg-blue-context leading-6 capitalize text-white shadow-sm  hover:bg-blue-hover'
                        onClick={()=> eventfn(args, false)}>
                            Sign In
                        </Link>
                        <Link href={'#'} className='flex w-full mt-4 justify-center text-sm rounded-sm py-1 border border-black leading-6 capitalize shadow-sm text-black  hover:bg-gray-200'>
                            Create Accounts
                        </Link>
                </div>       
      </div>
    )
 }
  return (
    <div>P</div>
  )
}

export default ProfileDropDown