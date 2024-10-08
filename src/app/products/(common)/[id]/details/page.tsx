import React from 'react'
import ProductDetails from '@/components/product/product_detail'
import ProductReview from '@/components/product_reviews'
import { products } from '@/data/mock'
import Carousel from '@/components/carousel'
import { usePathname } from 'next/navigation'
import { getData } from '@/lib/backend/server_actions'
import { ProductDetail } from '@/type/types'
import { cookies } from 'next/headers'
// import Skeleton from '@/components/skeleton'
export default async function Details({
  params: { id },
}: {
  params: { id: string }
  }) {
    const product = await getData(`v1/products/${id}/`)

  // const pathname = usePathname()
  // const cookieStore = cookies()
  // console.log(cookieStore, 'coooooooook', id)

  console.log(id, 'jhkjhkjhkjhkj', product)
  return (
    <div className='w-full'>
      <div className='w-full mb-4 py-12'>
         <ProductDetails product={product} />
      </div>
      <div>
         <ProductReview/>
      </div>
      <div className='my-10'>
          <h2  className={`mt-20 mb-14 text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
          related product
        </h2>
        <div className='m-2 lg:m-6'>
          <Carousel products={products} >
          </Carousel> </div>
      </div>
    </div>
  )
}

// export default Details

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const product =  await getData(`${params.id}/`)
//   // const res = await fetch(`https://.../posts/${params.id}`)
//   // const post = await res.json()
 
//   // Pass post data to the page via props
//   return { props: { product } }
// }