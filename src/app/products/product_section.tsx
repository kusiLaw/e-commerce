import React from 'react'
import ProductCard from '@/components/product/product_card'
import { Productlist } from '@/type/types'

const ProductSection = ({ products = undefined}: { products: Productlist | undefined | any}) => {
  
  if (!products) {
    return (
      <></>
    )
  }
  return (
      <>
          {
                   products?.map((data: React.JSX.IntrinsicAttributes & Productlist) =>(
                    <div key={data.id}>
                        <ProductCard {...data} colorCode={ false} />
                    </div>
                    ))
        }
      </>
  )
}

export default ProductSection