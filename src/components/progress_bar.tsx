'use client'
import React from 'react'


interface ProgressBar {
  percentage: number;
  height: number;
  bg: string;
}

const ProgressBar = ({percentage = 46, height = 0.75, bg='#facc15' }: ProgressBar) => {
 
  return (
    <div className={`w-full bg-gray-200 h-fit rounded-full`}>
      <div className={`custom rounded-full h-3}
       ${percentage}`}>
  

       </div>
       <style jsx>{
          `
          .custom { 
            width: ${percentage}%;
            height: ${height}rem;
            background: ${bg}
            }
          `
        }          
        </style>
    </div>
  )
}

export default ProgressBar