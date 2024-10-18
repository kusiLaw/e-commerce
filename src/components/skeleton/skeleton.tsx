
import React from 'react'
import { FaRegImage } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";


const Skeleton = ({ customClassNames= '', viewAs= null}: {
    customClassNames: string, viewAs: null | 'image' | 'video'
}) => {
  return (
    <div className={`h-1 border-blue-300 bg-slate-200 animate-pulse flex text-gray-400 text-[3rem] 
      justify-center items-center  ${customClassNames}`}>
          {viewAs === 'image' && <FaRegImage />}
          {viewAs === 'video' && <MdVideoLibrary/>}
       </div>
  )
}

export default Skeleton
