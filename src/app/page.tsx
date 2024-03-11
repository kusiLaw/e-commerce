
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
import { IoIosArrowForward } from "react-icons/io";




export default function Home() {
  return (
    <>
      <Nav/>
      <div className="mt-[4.8rem] w-full">
        <main className="relative w-full ">
          {/* h-[768px]  [calc(h-screen - [4rem])]   [calc(768px
             - [4rem])] */}
          <section className={`relative bg-black/20 h-fit md:h-[calc(768px-4.8rem)]  `}>
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

          
          <section className="bg-[#7aa8c5]/30 py-8 h-[30rem] bg-fixed -z-10  img_4">
            <div className="p-8 lg:ml-[8%] lg:mt-[4rem] h-full bg-[#eee]/80 w-[90%] m-auto  lg:bg-transparent" >
                <p className="font-bold te text-[2rem] md:text-[2.5rem]">Hurry Up!</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-black/80">Deal of the Day!</p>
                <p className="mt-3 text-wite">Buy This T-shirt At 20% Discount, Use Code Off20</p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-blue-contrast font-semibold mt-6  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Shop Now
                  <IoIosArrowForward/>
                </button>
            </div>

          </section>
               <section className="h-[5rem] z-30">
            <div className=" ">
              <h2 className={`${assistant.className} font-medium text-2xl py-10`}>Feature Products</h2>
                 {/* <Image src={'/img/4.png'} alt='' width={600} height={840} className="align-center drop-shadow-2xl"/> */}

            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </>
  );
}
