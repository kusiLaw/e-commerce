
import Login from "@/components/login";
import Image from "next/image";
import Cart from "@/components/cart";
import Link from "next/link";

import { Fragment } from 'react'
import ProductCard from "@/components/product/product_card";
import ProductDetails from "@/components/product/product_detail";
import ProgressBar from "@/components/form/progress_bar";
import ProductReview from "@/components/product_reviews";
import Orders from "@/components/orders/order";
import Invoice from "@/components/orders/invoice";
import ProductCategory from "@/components/product/product_category";
// import { Assistant } from "next/font/google";
import { assistant } from "@/components/font";
// import RelatedProduct from "@/components/product/related_product";
import Nav from "@/components/nav";
import Footer from "@/components/footer/footer";




export default function Home() {
  return (
    <>
      <Nav/>
      <div className="mt-[4rem] w-full">
        <main className="relative w-full ">
          {/* h-[768px]  */}
          <section className="relative bg-black/30 h-[620px] rounded-lg ">
            <div className="h-full  flex flex-col justify-en items-center pt-[5.25rem] py-[1.5rem] ">
              <div className="b-black relative flex items-center w-full  h-full border4 ">
              {/* alt='' width={1100} height={1040} */}

              <div className="relative h-fit w-full  flex justify-end bord">
                <Image src={'/img/alien2.png'} alt='' width={800} height={1040} className="align-center drop-shadow-2xl"/>

                {/* <Image src={'/img/hp_envy_1.jpg'} alt={''}
                        fill
                        priority
                        sizes="170px, 170px, (max-width: 768px) 180px, 180px"
                        /> */}

                <div className="absolute flex  h-full w-[43%] items-center left-0 top-0 borde justify-center drop-shadow-2xl">
                    <div className=" flex flex-col h-[100%] w-full bg-whit/20  border px-2 gap-[10%]">
                        <h1 className={`${assistant.className} text-[3rem] text-white font-thin w-full text-center my-2 `}>Welcome to LakyShop</h1>
                        <p className="text-sm text-white text-wrap text-center py-3 leading-relaxed">
                          Customers choice shopping center. A place you get high quality items with relatively lower price
                        </p>
                        <p className="text-white">
                              Buy this laptop and get discount now
                        </p>
                        <div className="flex justify-center gap-4 md:gap-10">
                            <Link href={''} className="border self-center 
                              bg-white text-black py-2 px-2 hover:white/50">Shop Now</Link>
                            <Link href={''} className="border self-center 
                              text-white py-2 px-2 
                            shadow-blue-context/50">Shop Now</Link>
                        </div>
                        
                    </div>
                </div>
              </div>
          

              </div>
            </div>
          </section> 

          <section className="bg-back py-6">
            <div className=" ">
              <h2 className={`${assistant.className} font-medium text-2xl py-10`}>Feature Products</h2>
      
            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </>
  );
}
