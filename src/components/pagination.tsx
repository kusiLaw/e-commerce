'use client'
import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Productlist } from '@/type/types'
import Link from 'next/link';
import { getData } from '@/lib/backend/django/server_actions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const Pagination = ({ totalItems = 0 }: string | number | any) => {
  
  //api return max of 20 item per page,
  // total pagination per total number
  

  let remainder  = parseInt(totalItems) % 20  
  let int = parseInt(totalItems) - remainder
  let divMod = int / 20 + 1
  console.log(divMod)

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    

   function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('page', term);
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);

    // console.log(params)
    }


  return (
    <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
     
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
 
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <MdOutlineKeyboardArrowLeft/>
            </button>
        
             {[...Array(divMod)].map((e, i) => {
             return    <button key={i}
              // href={`/products/?page=${i + 1}`}
              aria-current="page"
              className={`relative z-10 inline-flex items-center ${ i === divMod ? 'bg-blue-context text-white' : 'text-inherit'} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            onClick={(e) => {
          handleSearch((i + 1).toString());
        }}
             >
              {e}
            </button>;
            })}

            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <MdOutlineKeyboardArrowRight/>
            </button>
          </nav>
    </div>
  )
}

export default Pagination