import React from 'react'
import { ImageSkeleton, } from './image'
import { LineSkeleton } from './line'


const ProductDetailSkeleton = () => {
  return (
   <div className='flex flex-col md:flex-row w-full md:w-[90%] h-fit mx-auto '>
   
        <div className='w-full  md:w-[55%]'>
           <div className='w-full flex justify-center content-center'>
                <div className='relative w-[15rem] h-[15rem]  sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem]
                lg:w-[30rem] lg:h-[30rem] self-center'>
                    <ImageSkeleton />
               

                </div>
            </div>

            <div className='flex justify-center p-1 w-full gap-2 '>
               
                  <div  className='relative flex gap-3 w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] '>
                        <LineSkeleton/>
                </div>
               
            </div>
       
        </div>

        <form className='w-full mt-4 px-2 sm:px-4 md:mt-0 md:px-0 md:w-[45%] p-2  ' >
           <div className='w-full font text-lg md:text-2xl '>
                <LineSkeleton />
          <h2 className='flex justify-between font-semibold'><span ><LineSkeleton /></span> <span>$<LineSkeleton /></span></h2>
            </div>
        <div className='flex gap-4 w-full content-base items-end font-semibold mt-1'>
                  <LineSkeleton classname='h-[2rem]'/>
                  <LineSkeleton classname='h-[2rem]'/>
            </div>

            <div className='flex flex-col  gap-6 mt-6'> 
                <div className=''>
                   <h3 className="font-medium text-gray-900 mb-3 "><LineSkeleton /></h3>
                    <div className='pl-1' >
                     <LineSkeleton />
                    </div>
                    
                </div>
                <div className=''>
                    <div className='flex justify-between mb-3'>
                      <div className="font-medium text-gray-900 ">
                        <LineSkeleton />
                        
                      </div>
                      <LineSkeleton />
                    </div>
                    <ul className="w-full flex gap-3 flex-wrap flex-shrink">
                    <LineSkeleton />
                    </ul>
                </div>

                <div className='flex justify-between gap-4'>
                        <LineSkeleton  classname='h-[4rem]'/>
                        <LineSkeleton classname='h-[4rem]'/>
                </div>
                  

                <div className='text-wrap '>
                    <LineSkeleton classname='h-[4rem]' />
                  <LineSkeleton classname='h-[4rem]'/>
                </div>

                <div className='flex flex-col gap-6'>
                   <LineSkeleton classname='h-[2rem]'/>
                    
                </div>
            </div>

        </form>
       
    </div>  )
}


export default ProductDetailSkeleton