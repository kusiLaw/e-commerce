'use client'
import React from 'react'
import CheckBox from '../form/checkbox'
import { TextDecoderStream } from 'stream/web'
import TextCollapse from '../collapsible_dev/collapsible_dev'

let filter = {
    categories: ['Men', 'Women', 'Kids', 'electronics', 'Latop'],
    price : ['10 - 100', '100-250', '250 - 500', '500 - 1000', '1000 and above'],
    tags : ['new', 'sales', 'hot']
  }

const Filter = () => {
  return (
    <div className='w-full '>
           <h3 className='text-center bg-gray-200 p-3 w-full font-semibold'>Filters</h3>
            <div className='bg-gray-50'>
              <div className='flex justify-end'>
                 <button className='text-xs font- color text-blue-context  my-3 mr-3 hover:cursor-pointer '>Clear all</button>
              </div>
            
                <div className='ml-2 mr-3'>
                  <TextCollapse title='Categories' open>

                    {filter.categories.map(list =>(
                        <div className='font-bold py-[1.5px]'>
                            <CheckBox key={list} name={list} value={list}/>
                        </div>
                    ))}
                  </TextCollapse>
                  <TextCollapse title='Price' open>

                    {filter.price.map(list =>(
                      <div className='font-bold py-[1.5px]'>
                            <CheckBox key={list} name={list} value={list}/>
                      </div>
                    ))}

                  </TextCollapse>
                  <TextCollapse title='Tags' open>

                        {filter.tags.map(list =>(
                        <div className='font-bold py-[1.5px]'>

                            <CheckBox key={list} name={list} value={list}/>
                        </div>
                        ))}
                    </TextCollapse>
                </div>
            </div>

    </div>
  )
}

export default Filter