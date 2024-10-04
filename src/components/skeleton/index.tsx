'use client'

import React from 'react'
import { FaRegImage } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";


const Skeleton = ({ customClassNames= '', viewAs= null}: {
    customClassNames: string, viewAs: null | 'image' | 'video'
}) => {
  return (
      <div className={`h-1 border-blue-300 bg-slate-200 animate-pulse flex text-gray-400 text-[3rem] justify-center items-center  ${customClassNames}`}>
          {viewAs === 'image' && <FaRegImage />}
          {viewAs === 'video' && <MdVideoLibrary/>}
       </div>
  )
}

export default Skeleton












// export const  ImageSkeleton = ({
//   rounded = 'rounded-full',
//   width = 'w-10',
//   height = 'h-10'
// }) => {
//   return (
//     <div className="animate-pulse flex space-x-4">
//       <div className={`${rounded} ${height}  bg-slate-200 ${width}`}></div>
//     </div>
//   )
// }

// export const CartProductSkeleton = () => {
//   return (
//     <div className='flex flex-col gap-3 w-full'>
    
//     <div  className="animate-pulse border w-[30%] px-2  divide-y divide-gray-200">
//       <li  className="flex py-2">
//         <div className="h-22 w-22 flex-shrink-0 flex justify-center content-center overflow-hidden rounded-md border border-gray-200">
//           <ImageSkeleton  height='h-20' width='w-20' />
//         </div>

//         <div className="ml-4 flex flex-1 flex-col">
//           <div className='flex flex-col gap-2'>
//             <div className="flex justify-between w-full font-medium text-gray-900">
//               <h3 className='h-2 w-[60%] bg-slate-200'></h3>
//               <p className="h-2 w-[30%] bg-slate-200"></p>
//             </div>
//             <p className="mt-1  h-2 w-[30%] bg-slate-200"></p>
//           </div>

//           <div className="flex flex-1 items-end justify-between text-sm">
//             <p className="h-2 w-[20%] bg-slate-200"></p>

//             <div className="h-2 w-[75%] bg-slate-200"></div>
//           </div>
//         </div>
//       </li>
//     </div>

//     <div  className="animate-pulse border w-[30%] px-2  divide-y divide-gray-200">
//       <li  className="flex py-2">
//         <div className="h-22 w-22 flex-shrink-0 flex justify-center content-center overflow-hidden rounded-md border border-gray-200">
//           <ImageSkeleton  height='h-20' width='w-20' />
//         </div>

//         <div className="ml-4 flex flex-1 flex-col">
//           <div className='flex flex-col gap-2'>
//             <div className="flex justify-between w-full font-medium text-gray-900">
//               <h3 className='h-2 w-[60%] bg-slate-200'></h3>
//               <p className="h-2 w-[30%] bg-slate-200"></p>
//             </div>
//             <p className="mt-1  h-2 w-[30%] bg-slate-200"></p>
//           </div>

//           <div className="flex flex-1 items-end justify-between text-sm">
//             <p className="h-2 w-[20%] bg-slate-200"></p>

//             <div className="h-2 w-[75%] bg-slate-200"></div>
//           </div>
//         </div>
//       </li>
//     </div>

//   </div>
//   )
// }



 