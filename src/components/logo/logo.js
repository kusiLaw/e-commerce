import React from 'react'
import Link from 'next/link'

const Logo = ({fontSize = null}) => {
 let font = fontSize ? fontSize : `text-lg `
 return (
   <Link href='/'><h1 className={`font-medium ${font} text-black`}>
   <span className={`text-white`}>Laky</span>Shop.</h1>
   </Link>
  )
}

export default Logo
