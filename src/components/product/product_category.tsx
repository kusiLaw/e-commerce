import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCategory = ({image='/img/women.jpg'}) => {
  return (
    <div className='shadow-sm relative  bg-gray-100 w-fit p-1  '>
        <Link href={''}>
        <Image src={image} alt={'as'}
                height = {150} 
                width={200}
                className='self-center '
                />
        </Link>
        <div className='absolute top-0 bottom-0 right-0 left-0 '>
          
         </div>
    </div>
  )
}

export default ProductCategory