'use client'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchInput = ({ placeholder = '' }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    

   const  handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);

    }, 3000)
    

  return (
       <div className="rounded-full border-0 py-1 pl-4 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset flex items-center
                    hover:ring-blue-context/90 ">
                  <input
                    name="email"
                    type='text'
                    placeholder={placeholder}
                    className="w-full border-collapse focus:outline-0 focus:ring-0 active:border-collapse  "
                   onChange={(e) => {
          handleSearch(e.target.value);
              }}
              
                defaultValue={searchParams.get('query')?.toString()}

                    />

                  <span className='text-lg px-2'><CiSearch/></span> 
        </div>
  )
}

export default SearchInput