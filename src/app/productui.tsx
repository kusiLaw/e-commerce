import { getData } from "@/lib/backend/server_actions";
import ProductCard from '@/components/product/product_card';
import { notFound } from 'next/navigation'

export default async function ProductUi({ url = '' })  {
  const products = await getData(url)
  if (!products) {
    return ( < div className = "h-full mt-20 w-full flex justify-center align-middle" >
      <p className="w-full text-center">The server can not reached, please try again later</p>
    </ div>
    )
  }
  return (

 <div className="w-full m-auto pt-10 grid xsm:grid-cols-2  sm:grid-cols-3 gap-4 md:gap-6 md:grid-cols-4   xl:grid-cols-5 ">

      { 
          products?.results.map((data:any) =>(
          <div key={data.id}>
              <ProductCard {...data } colorCode = {false}/>
          </div>
          ))
      }
  </div>  
  )
}
