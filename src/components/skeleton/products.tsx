import Skeleton from "./skeleton"
import { LineSkeleton } from "./line"

export const ProductSkeleton = () => {
    return (
       <div  className='relative  group  borde-[1px] w-[11.5rem] lg:w-[12.5rem] h-fit my-2 pt-1 mx-auto px-auto grow shrink' >
         <div  className='relative  group  border-[1px] 
                   w-[11.5rem] lg:w-[12.5rem] h-fit my-2 pt-1 mx-auto px-auto grow shrink' >
           <div className='w-full relative flex flex-col items-center justify-center gap-2 mx-auto flex-shrink '>
 
           <div className=' flex relative justify-center content-center
           h-[11rem] w-[11rem] lg:h-[12rem] lg:w-[12rem] max-h-[15rem]   max-w-[16rem] 
           shadow-xs bg-gray-50 rounded-md mb- overflow-hidden shrink grow'>

                   <Skeleton customClassNames="w-full h-full round-sm " viewAs={'image'} />
           </div>
          
            <div className='flex flex-col px-1.5 text-black w-full max-w-full flex-shrink'>
               
                <div className=' text-ellipsis text-nowrap overflow-hidden w-full'>
                    <div className="my-4 ">
                        <LineSkeleton />
                    </div>
                </div>
             
        
                <div className='flex justify- w-full mb-2 mt-2'>
                    <div className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>
                        <div className=" w-[60%]">
                            <LineSkeleton />
                        </div>
                    </div>
                        </div>
                  <div className='flex justify- w-full mb-2 '>
                    <div className='text-ellipsis text-nowrap overflow-hidden w-full  font-bold '>
                        <div className=" w-[60%]">
                            <LineSkeleton  />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
  )
}
{/* 
       <div className="my-4 m">
                <LineSkeleton   />
            </div>
                <div className=" w-[60%]">
                <LineSkeleton   />
            </div>
                <div className=" mt-2 mb-4 w-[60%]">
                <LineSkeleton   />
            </div>    */}