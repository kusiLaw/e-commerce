'use client'
import React, {useState} from 'react'




const ProductColor = ({ colors = [], size = 1.8, allow_selection = true }) => {
  const [selectedColor, setSelectedColor] = useState('')
    
   console.log('cooolor',colors)
  return (
      <>
            <ul className="w-full flex gap-4 flex-wrap flex-shrink ">
                     { 
                    [{name: 'Silver', code: '#C0C0C0'}, {name: 'black', code: '#000000'},
                      {name: 'Navy', code: '#000080'},].map((color:any) => (
                        <li key={color.code}>
                          <input type="radio" id={color.name} name={color.name} value={color.code} className="hidden peer" required  checked={selectedColor === color.code}
                          onChange={(e)=> setSelectedColor(e.target.value)} />
                          <label htmlFor={color.name} className={`custom inline-flex items-center justify-between  rounded-full 
                           border   cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-4 
                            ${!allow_selection && 'select-none touch-none border'}
                            `}>   
                            <p className='sr-only'>{color.name}</p>  

                               <style jsx>{
                                    `
                                    .custom { 
                                      width : ${size + 'rem' }; 
                                      height : ${size + 'rem' };
                                      background: ${color.code};
                                      --tw-ring-color: ${color.code}
                                      }
                                    `
                                    
                                  }          
                              </style>                      
                          </label>
                       </li>
                      ))
                
                      }
            </ul>  
    </>
  )
}

export default ProductColor



