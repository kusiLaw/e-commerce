
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
      <div className="mt-[4.9rem] w-full">
        <main className="relative w-full ">
          {/* h-[768px]  [calc(h-screen - [4rem])]   [calc(768px
             - [4rem])] */}
          <section className={`relative    h-fit md:h-[calc(768px-5.2rem)]  `}>
            
            {/* <div className=" bg-[#05876b]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_1 lg:ml-[8%] lg:mt-[4rem] h-full  w-[90%] m-auto bg-[#eee]/90 lg:bg-transparent" >
                <p className="font-bold te text-[2rem] md:text-[2.5rem] text-blue-context lg:text-inherit mt-4">Feel different ?</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-blue-contrast lg:text-black/80 m">Original Men's Collections!</p>
                <p className="mt-3 text-wite text-inherit ">Be on top of your dress and make others feel your presence</p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-blue-contrast font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm  hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Shop Now
                  <IoIosArrowForward/>
                </button>
             </div>
            </div> */}

            
            {/* <div className=" bg-[#418621]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_kente lg:ml-[8%] lg:mt-[4rem] h-full  w-[90%] m-auto bg-[#eee]/90 lg:bg-transparent " >
                <p className="font-bold te text-[2rem] md:text-[2.5rem] text-blue-context lg:text-inherit mt-4 capitalize">Africa Cloth ?</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-blue-contrast lg:text-black/80 c">Best suited for celebration!</p>
                <p className="mt-3 text-wite text-inherit text-wrap">You can get both material and nice sew dress for men and women parties, weddings and more </p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#418621] font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm shadow-[#418621]/50 hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Shop Now
                  <IoIosArrowForward/>
                </button>
             </div>
            </div> */}

 
            <div className=" bg-[#bbbec8]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_direction lg:ml-[8%] lg:mt-[4rem] h-full   w-[90%] m-auto bg-[#d3d1df]/90 lg:bg-transparent " >
                <p className="font-bold te text-[2rem] md:text-[2.5rem] text-blue-context lg:text-inherit mt-4 ">Life made easy with Us</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-blue-contrast lg:text-black/80 c">{ "Can't find your item here ? "}</p>
                <p className="mt-3 text-wite text-inherit text-wrap">You can tell us the item you want and will delivery to you at you door. <br/> </p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-blue-context font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm shadow-blue-context/50 hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Tell us what you want
                  <IoIosArrowForward/>
                </button>
             </div>
            </div>


          </section> 

          <section className="bg-back py-6">
            <div className=" ">
              <h2 className={`${assistant.className} font-medium text-2xl py-10`}>Feature Products</h2>
      
            </div>
          </section>

          
          <section className="bg-[#7aa8c5]/30 py-8 h-[30rem] bg-fixed -z-10 pt-6 img_4">
            <div className=" mt-3 h-full">
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
