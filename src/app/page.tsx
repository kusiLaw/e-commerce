import ProductCard from "@/components/product/product_card";
import { assistant } from "@/components/font";
import Nav from "@/components/nav";
import Footer from "@/components/footer/footer";
import { IoIosArrowForward } from "react-icons/io";
import ProductCategoryCard from "@/components/product/category_card";
import { customerPageReview, products } from "@/data/mock";
import VideoSection from "./video_section";
import CustomerReview from "@/components/product_reviews/customer_review";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import ProductUi from "./productui";
import { Suspense } from "react";
import { ImageSkeleton, } from "@/components/skeleton/image";
import { ProductSkeleton, ProductUiSkeleton} from "@/components/skeleton";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";


export default async function Home() {

  return (
    <>
      <Nav />

      <div className="mt-[4.45rem] w-full ">
        <main className="relative w-full px-2 md:px-3  ">

          <section className="bg-[#7aa8c5]/30 py-8 h-[31rem] bg-fixed -z-10 pt-6 img_4">
            <div className=" mt-3 h-full">
               <div className="p-8 lg:ml-[8%] lg:mt-[4rem] h-full bg-[#eee]/80 w-[90%] m-auto  lg:bg-transparent" >
                  <p className="font-bold te text-[2rem] md:text-[2.5rem]">Hurry Up!</p>
                  <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-black/80">Deal of the Day!</p>
                  <p className="mt-3 text-wite">Buy This T-shirt At 20% Discount, Use Code Off20</p>
                  <Link href={'/products/?cat=women'}
                    className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#0172a5]/70 font-semibold mt-6  px-4 py-3  font- leading-6 text-lg capitalize
                    text-white shadow-sm  hover:bg-[#0172a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                    Shop Now
                    <IoIosArrowForward/>
                  </Link>
                </div>
            </div>
          </section>
       
          
          <section className="w-full mt-14 md:mt-16 mb-24">
            <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
              Categories
            </h2>
            <div className="grid xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center mt-14 lg:m gap-4">
              {[ {
                      image: "women_collection",
                      text: "women",
                      link: "/products/?cat=women",
                      img_height: 100 ,
                      img_width :140
                    },{
                      image: "kids6",
                      text: "kids",
                      link: "/products/?cat=kids",
                      img_height: 900 ,
                      img_width :900
                    },{
                      image: "mens_collection",
                      text: "mens",
                      link: "/products/?cat=men",
                      img_height: 200 ,
                      img_width :200
                    },{
                      image: "alien2",
                      text: "electronics",
                      link: "/products/?cat=electronics",
                      img_height: 200 ,
                      img_width :400
                    }
                  
              ].map(item =>
              (
                <div key={item.text} className="flex flex-shrink flex-grow justify-center flex-auto w-full  ">
                   <ProductCategoryCard {...item}  />
                </div>
              ))
              }
            </div>
 
          </section>
          
          <section className={`relative    h-[calc(568px-5.5rem)] md:h-[)]  mt-10 `}>
            <div className=" bg-[#05876b]/30 img_1 bg-bottom bg-contain   h-full w-full flex flex-col justify-center items-center  ">
                <div className="my-[2rem] h-full  w-full m-auto    lg:bg-transparent" >
                    <div className="w-[90%] h-[95%] m-auto bg-[#eee]/80 p-4 lg:py-10 lg:px-12 lg:bg-transparent ">
                      <p className="font-bold te text-[1.8rem] md:text-[2.1rem] lg:text-[2.5rem] text-inherit mt-4">Feel different ?</p>
                      <p className="font-bold text-[1.2rem] md:text-[2rem] lg:text-[2.3rem] text-black/80 mt-2">Original Men{"'"}s Collections!</p>
                      <p className="mt-3 text-wite text-inherit ">Be on top of your dress and make others feel your presence</p>
                      <Link href={'/products/?cat=men'}
                        type="submit"
                        className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#05876b]/70 font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                        text-white shadow-sm  hover:bg-[#05876b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                        Shop Now
                        <IoIosArrowForward/>
                      </Link>
                    </div>
               </div>
            </div>

          </section>

          <section className="bg-back mt-10 mb-20 pt-10">
            <div className=" ">
              <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
                featured products
              </h2>
              
                <Suspense fallback={<ProductUiSkeleton number={10}/>}>
                  {/* <div className="w-full m-auto pt-10 grid xsm:grid-cols-2  sm:grid-cols-3 gap-4 md:gap-6 md:grid-cols-4   xl:grid-cols-5 "> */}
                    <ProductUi url={ 'v1/products/?page=1&count=10'} />
                  {/* </div> */}
                </Suspense>
          
              <div className="w-full flex justify-center md:justify-end mt-10 md:pr-4 lg:pr-10">
                    <Link href={'/products'} className="capitalize py-2 px-4 border bg-gray-50 md:border-none text-sm  cursor-pointer">view More</Link>
              </div>
            </div>
          </section>
     
          <section className="hidden lg:block">
              <VideoSection/>
          </section>
          <section id='trust ' className={` flex flex-col gap-10 md:flex-row md:justify-evenly my-24 py-0 px-0`}>
            <div className="flex flex-col items-center  w-full md:w-[22%] text-center ">
              <div className="text-[2.5rem] md:text-[4rem] font-bold"><TbTruckDelivery /> </div>

              <h3 className={`${assistant.className} text-2xl md:text-3xl mt-4 font-normal capitalize`}>
                    internationa delivery
                </h3> 
                <p className="mt-4 tracking-wide	">We offer free shipping to more than 40 countries around the world.</p>
            </div>
             <div className="flex flex-col items-center w-full md:w-[22%] text-center ">
                <div className="text-[2.5rem] md:text-[4rem]"><RiSecurePaymentLine /> </div>

                <h3 className={`${assistant.className} text-2xl md:text-3xl mt-4 font-normal capitalize`}>
                    secure payment
                </h3> 
              <p className="mt-4 tracking-wide	">
                Every purchase is secure thanks to our excellent online safety standards.</p>
            </div>
             <div className="flex flex-col items-center w-full md:w-[22%] text-center ">
                      <div className="text-[2.5rem] md:text-[4rem]"><BiCart /> </div>

              <h3 className={`${assistant.className} text-2xl md:text-3xl mt-4 font-normal capitalize`}>
                simple return
                       </h3> 
              <p className="mt-4 tracking-wide	">
                Every purchase you make comes with a 30-day money-back guarantee.</p>
             </div>
          </section>
          <section className="mt-20 w-full h-fit  bordr-4 mb-20 ">
             <div className=" h-fit bg-white borer brder-red-700">
              < h2  className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
                happy customers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 md:justify-between   gap-8 px-2 lg:px-4">
                 {customerPageReview.map(items =>(
                  <div key={items.name} className="w-full">
                      <CustomerReview  {...items} onPage  />
                  </div>
                ))}
              </div>
            
             </div>
          </section>
        </main>
        </div>
        {/* </Suspense> */}
      <Footer/>
    </>
  );
}
