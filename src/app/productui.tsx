import { getData } from "@/lib/backend/server_actions";
import ProductCard from '@/components/product/product_card';
import { notFound } from 'next/navigation'
import { inter } from "@/components/font";


interface ProductUiProps {
  products: {
    id: number;
    name: string;
    product_image: { image: string }[];
    tag: string;
    color: { color: string }[];
    price: number;
  }[];
  
  className?: string;
  
}

export default async function ProductUi({ products , className = '' }: ProductUiProps) {

  
  if (!products) {
    return ( < div className = "h-full mt-20 w-full flex justify-center align-middle" >
      <p className="w-full text-center">The server can not reached, please try again later</p>
    </ div>
    )
  }
  return (

 <div className={"w-full m-auto pt-10  " + className}>

      { 
          products?.map((data:any) =>(
          <div key={data.id}>
              <ProductCard {...data } colorCode = {false}/>
          </div>
          ))
      }
  </div>  
  )
}
