import ProductCard from "@/components/product/product_card";
import { assistant } from "@/components/font";
import Nav from "@/components/nav";
import Footer from "@/components/footer/footer";
import { IoIosArrowForward } from "react-icons/io";
import { WelcomeCarousel } from "@/components/carousel";
import ProductCategoryCard from "@/components/product/category_card";
import { customerPageReview, products } from "@/data/mock";
import VideoSection from "./video_section";
import Image from "next/image";
import Star from "@/components/stars_rating/star";
import CustomerReview from "@/components/product_reviews/customer_review";



export default function Home() {
  return (
    <>
      <Nav/>
      <div className="mt-[4.5rem] w-full ">
        <main className="relative w-full px-2 md:px-3  ">
         <section className={`relative    h-fit md:h-[calc(768px-5.5rem)]  `}>
           <WelcomeCarousel>
            <div className=" bg-[#05876b]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_1 lg:ml-[8%] lg:mt-[4rem] h-full  w-full m-auto bg-[#eee]/90 lg:bg-transparent" >
                <p className="font-bold te text-[2rem] md:text-[2.5rem] text-blue-context lg:text-inherit mt-4">Feel different ?</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-blue-contrast lg:text-black/80 m">Original Men's Collections!</p>
                <p className="mt-3 text-wite text-inherit ">Be on top of your dress and make others feel your presence</p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#05876b]/70 font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm  hover:bg-[#05876b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Shop Now
                  <IoIosArrowForward/>
                </button>
             </div>
            </div>

            
            <div className=" bg-[#418621]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_kente lg:ml-[8%] lg:mt-[4rem] h-full  w-full m-auto bg-[#eee]/90 lg:bg-transparent " >
                <p className="font-bold te text-[2rem] md:text-[2.5rem] text-blue-context lg:text-inherit mt-4 capitalize">Africa Cloth ?</p>
                <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-blue-contrast lg:text-black/80 c">Best suited for celebration!</p>
                <p className="mt-3 text-wite text-inherit text-wrap">You can get both material and nice sew dress for men and women parties, weddings and more </p>
                <button
                  type="submit"
                  className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#418621]/70 font-semibold mt-8  px-4 py-3  font- leading-6 text-lg capitalize
                  text-white shadow-sm shadow-[#418621]/50 hover:shadow-md hover:bg-[#418621] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                  Shop Now
                  <IoIosArrowForward/>
                </button>
             </div>
            </div>

 
            <div className=" bg-[#bbbec8]/30 h-full flex flex-col justify-center items-center  ">
              <div className="p-8 img_direction lg:ml-[8%] lg:mt-[4rem] h-full   w-full m-auto bg-[#d3d1df]/90 lg:bg-transparent " >
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

          </WelcomeCarousel> 
          </section>
          
          <section className="w-full mt-20 mb-20">
            <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
              Categories
            </h2>
            <div className="flex mt-14  justify-evenly gap-10">
              {[ {
                      image: "women_collection",
                      text: "women",
                      link: "#",
                      img_height: 180 ,
                      img_width :200
                    },{
                      image: "kids6",
                      text: "kids",
                      link: "#",
                      img_height: 900 ,
                      img_width :900
                    },{
                      image: "mens_collection",
                      text: "mens",
                      link: "#",
                      img_height: 500 ,
                      img_width :550
                    },{
                      image: "alien2",
                      text: "electronics",
                      link: "#",
                      img_height: 300 ,
                      img_width :450
                    }
                  
              ].map(item => <ProductCategoryCard {...item} key={item.text} />)
              }
            </div>
 
          </section>
    
          {/* <section className={`relative    h-fit md:h-[calc(768px-5.2rem)]  `}>

            <div className="  h-full w-full">
                <div className=" flex bg-[#bbbec8]/30 w-full h-full bg-[#d3d1df lgbg-transparent  " >
                  
                  <div className=" flex flex-col items-center justify-center bg-[#f6f8f6] w-[80%]  h-full">
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
                  <div className=" relative w-[20%] h-full  bg-slate- shadow-inner ">
                    <div className="absolute z-10 -left-[10.6rem] bg-ed-300 -bottom-[3rem] w-fit h-full">
                        <Image width={350} height={400} src={'/img/direction_2.png'} alt=""
                          className="ml-0 "/>
                    </div>
                  </div>
      
              </div>
            </div>
          </section> */}          
          <section className="bg-[#7aa8c5]/30 py-8 h-[30rem] bg-fixed -z-10 pt-6 img_4">
            <div className=" mt-3 h-full">
               <div className="p-8 lg:ml-[8%] lg:mt-[4rem] h-full bg-[#eee]/80 w-[90%] m-auto  lg:bg-transparent" >
                      <p className="font-bold te text-[2rem] md:text-[2.5rem]">Hurry Up!</p>
                      <p className="font-bold text-[1.8rem] md:text-[2.5rem] text-black/80">Deal of the Day!</p>
                      <p className="mt-3 text-wite">Buy This T-shirt At 20% Discount, Use Code Off20</p>
                      <button
                        type="submit"
                        className={`${assistant.className} flex w-fit justify-center items-center gap-3 rounded-md bg-[#0172a5]/70 font-semibold mt-6  px-4 py-3  font- leading-6 text-lg capitalize
                        text-white shadow-sm  hover:bg-[#0172a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
                        Shop Now
                        <IoIosArrowForward/>
                      </button>
                </div>
            </div>
    
          </section>
          <section className="bg-back mt-10 mb-20 pt-10">
            <div className=" ">
              <h2 className={` text-center flex flex-col gap-3 text-2xl font-medium capitalize after:h-[2px] after:w-12 after:self-center  after:bg-red-600`}>
                featured products
              </h2>
              
              <div className="w-full m-auto pt-10 grid xsm:grid-cols-2  sm:grid-cols-3  md:grid-cols-4   xl:grid-cols-5 xs:overflow-y-scro">
                {
                    products.slice(0,10).map(data =>(
                    <div key={data.id}>
                        <ProductCard {...data}/>
                    </div>
                    ))
                }
            </div>
            </div>
          </section>
     
          <section className="">
              <VideoSection/>
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
      <Footer/>
    </>
  );
}
