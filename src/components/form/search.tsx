'use client'
import React,{ Suspense } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchInput = ({ placeholder = '' }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    
  function Search() {
  const  handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams( searchParams.toString());
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);

    }, 3000)
 
  return <input name="text" type='text' placeholder={placeholder}
           className="w-full border-none ring-0 focus:outline-0 h-full focus:ring-0 active:border-collapse  "
           onChange={(e) => {
            handleSearch(e.target.value);
              }}
              
            defaultValue={searchParams.get('query')?.toString()}

          />
}

   
    

  return (
       <div className="rounded-full border-none -py-2 pl-4 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset flex items-center
                    hover:ring-blue-context/90 text-sm hover:shadow-md h-full py-[0.15rem] ">
                  <Suspense fallback={<SearchInput placeholder={placeholder} />}>
                    <Search />
                  </Suspense>

                  <span className='text-lg px-2'><CiSearch/></span> 
        </div>
  )
}

export default SearchInput