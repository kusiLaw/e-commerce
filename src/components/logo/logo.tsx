import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}><span className='drop-shadow-2xl  md:text-lg '>Laky</span><span className='text-blue-context font-bold drop-shadow-xl'>Shop</span></Link>
  )
}

export default Logo