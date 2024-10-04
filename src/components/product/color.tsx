'use client'
import React, {useState} from 'react'




const ProductColor = ({ color = [{ 'color': '', 'color_code':''}], size = 1.8, allow_selection = true }: {
  color: [{color:string, color_code:string }] | [], size: number, allow_selection:boolean
}) => {
  const [selectedColor, setSelectedColor] = useState(color[0]?.color_code || color)
    
  return (
      <>
      <ul className="w-full flex gap-4 flex-wrap flex-shrink ">
        <fieldset id={'color'} className='flex w-full gap-4 flex-wrap flex-shrink'>
                     { 
                   color?.map((items:any) => (
                        <li key={items.color_code}>
                          <input type="radio" id={items.color} name={items.color} value={items.color_code}  className="hidden peer"   checked={selectedColor === items.color_code}
                          onChange={(e)=> setSelectedColor(e.target.value)} />
                          <label htmlFor={items.color} className={`custom inline-flex items-center justify-between  rounded-full 
                           border   cursor-pointer peer-checked:ring-2 peer-checked:ring-offset-4 
                            ${!allow_selection && 'select-none touch-none border'}
                            `}>   
                            <p className='sr-only'>{items.color}</p>  

                               <style jsx>{
                                    `
                                    .custom { 
                                      width : ${size + 'rem' }; 
                                      height : ${size + 'rem' };
                                      background: ${items.color_code};
                                      --tw-ring-color: ${items.color ==='white'? '#000': items.color_code}
                                      }
                                    `
                                    
                                  }          
                              </style>                      
                          </label>
                       </li>
                      ))
                
                }
          </fieldset>
            </ul>  
    </>
  )
}

export default ProductColor



