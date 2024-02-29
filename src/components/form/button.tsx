import Link from 'next/link'
import React from 'react'


const btnType={
    primary:'bg-blue-context leading-6 capitalize text-white shadow-sm hover:shadow-md hover:bg-blue-hover ',
    secondary : 'border-gray-500 hover:bg-blue-hover hover:text-white',

  }



export const Button = ({text='button'}) => {


  return (
//     <button className='text-center py-3 border  w-full '>
//     Write a review
//   </button>
   <button
   type="submit"
   className="flex w-full justify-center rounded-sm bg-blue-context px-3 py-3  font- leading-6 text-lg capitalize
   text-white shadow-sm hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
   Add to cart
</button>
  )
}

export const LinkButton = ({href='#', text='link button', type='primary', padding='', customStyle={}}) =>{
    return(
       <Link href={href} className={`flex w-full justify-center rounded-sm py-2 text-ms bg-blue-context leading-6 capitalize text-white shadow-sm hover:shadow-md hover:bg-blue-hover`}>
        {text}

        <style jsx>{
          `
          .custom { 
            padding:  80px 7px;
            }

       
          `
        }          
        </style>
       </Link>
    )
}


{/* <label class="block">
<span class="block text-sm font-medium text-slate-700">Username</span>
<!-- Using form state modifiers, the classes can be identical for every input -->
<input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
"/>
</label> */}