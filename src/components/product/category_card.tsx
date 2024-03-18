import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCategoryCard = ({ image ='', text = 'text here', link = '#', img_height = 180, img_width =200}) => {
  return (
     <div className="relative flex justify-center items-center h-[18rem] overflow-hidden w-[18rem] min-w-[10rem] flex-shrink flex-grow-0 group bg-gray-100 p-3 border drop-shadow-sm">
      <Image height={img_height} width={img_width} src={`/img/${image}.png`} alt="women" className="group-hover:scale-105 transition-all duration-700" />
      <div className="absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-black/5 group-hover:bg-black/15 bg-cover">
          <Link href={link} className="text-center py-3 w-32 bg-gray-100 group-hover:bg-slate-200 font-bold shadow-md group-hover:shadow-black/30  ">{text}</Link>
      </div>
    </div>
  )
}

export default ProductCategoryCard