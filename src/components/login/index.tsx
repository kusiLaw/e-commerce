import Link from 'next/link'
import React from 'react'
import { ImFacebook } from "react-icons/im";
import { ImGooglePlus } from "react-icons/im";
import Image
 from 'next/image';
const Login = () => {
  return (
    <div className="flex min-h-fit flex-1 flex-col p-6  border-red-500 w-full min-w-[224px] md:max-w-fit  bordr ">
    <div className="sm:mx-auto  min-w-full ">

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 capitalize">
        Sign in
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto min-w-full">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
               ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-hover
               sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
           
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder='password'
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset
               focus:ring-blue-hover sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='pt-3'>
          <button
            type="submit"
            className="flex w-full justify-center rounded-sm bg-blue-context px-3 py-2 text-sm font-semibold leading-6
             text-white shadow-sm hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      
      </form>
      <div className="flex justify-end text-[0.85rem] mt-3 ">
          <Link href="#" className="font-light text-blue-context  text-sm  hover:text-blue-hover">
            Forgot password?
          </Link>
      </div>
      <div className=' flex justify-center text-gray-400 bg-gray-300 w-full h-[0.2px] mt-10' >
            <p className='bg-white self-center  drop-shadow-md p-1 rounded-full z-10 uppercase border
             border-gray-300 text-sm'>or</p>
      </div>
      <div className=' flex flex-col sm:flex-row  justify-between gap-6 w-full mt-10' >
        <Link href={'#'} className='flex content-center bordr  max-h-fit min-w-fit  shadow-md rounded-md bg-[#4267B2]  text-white hover:bg-[#5376bb] '>
          <span className='text-2xl font-extrabold  p-2 mr-2 bg-white text-[#2b53a3] shadow-md rounded-md'> <ImFacebook/> </span>
          <span className='pr-2 self-center text-sm'> Login with Facebook  </span>
        </Link>
        {/* rounded-tr-md rounded-tl-lg rounded-bl-lg rounded-br-md */}
        <Link href={'#'} className='flex content-center bordr max-h-fit min-w-fit   
        shadow-md  rounded-md border-gray-300 bg-[#DB4437] text-white hover:bg-[#e65f53]'><span></span>
          <span className='text-2xl font-extrabold p-2 mr-2 b-[#c51707] bg-white shadow-md rounded-md'> 
          <Image src={'/google.svg'} height='25' width='25' alt={'sd'}/>
          {/* <ImGooglePlus/> */}
           </span>
          <span className=' pr-2 self-center text-sm'> Login with Google </span>      
        </Link>

      </div>
      
    </div>

    <div className='mt-10'>
      <p>{"Don't have a Shop account? "}<Link  href={''} className='text-blue-context text-sm'>Create an account</Link></p>
    </div>
  </div>
  )
}

export default Login