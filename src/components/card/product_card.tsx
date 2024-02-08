import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const  ProductCard = () => {
  return (
    <div className='flex flex-col gap-2 border-[1px] h-fit w-fit p-2 ' >
        <div>
            <div className='relative flex justify-center content-center h-[15rem] w-[15rem] bg-gray-50'>
                <Image src={'/img/alien2.png'} alt={''}
                height = {450} 
                width={450}
                // fill = {true}
                className='self-center '
                />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between font-semibold '>
                    <h2>Dell lat 3</h2>
                    <p>$100</p>
                </div>
                <div className='flex flex-col gap-3 text-gray-500'>
                    <div className='text-sm'>
                        <p>Black </p>
                    </div>

                    <div className='flex justify-end w-full mb-2'>
                        <Link href={'#'} className='rounded-full py-0.5 px-3  text-blue-context hover:text-blue-hover border hover:bg-gray-50  ring-1  '>View</Link>
                    </div>
                </div>
           
            </div>
        </div>
      

    </div>
  )
}

export default  ProductCard