'use client'
import React,{useState} from 'react'
import CheckBox from '../form/checkbox'
import { TextDecoderStream } from 'stream/web'
import TextCollapse from '../collapsible_dev/collapsible_dev'

let filter = {

    price : ['10 - 100', '100 - 250', '250 - 500', '500 - 1000', '1000 and above'],
    tags : ['new', 'sales', 'hot']
  }

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='w-full '>
      <h3 className='text-center bg-gray-200 p-3 w-full font-semibold'>Filters</h3>
      <form className='bg-gray-50 pr-3 pl-2'>
        <div className='flex justify-end'>
            <button className='text-xs font- color text-blue-context  my-3 mr-3 hover:cursor-pointer '>Clear all</button>
        </div>
      
        <TextCollapse title='Categories' open>
            {['Men', 'Women', 'Kids', 'electronics', 'Latop'].map(list =>(
                <div className='font-bold py-[1.5px]'>
                    <CheckBox key={list} name={list} label={list} value={list}/>
                </div>
            ))}
        </TextCollapse>

        <TextCollapse title='Price' open>
           <div className='flex flex-col justify-between gap-2 mr-2 font-bold py-[1.5px]'>

              {filter.price.map(list =>(
                  
     
                <label  className=' flex w-full justify-between ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  {list} 
                    <input
                      type="radio"
                      value={list}
                      checked={selectedValue === list}
                      onChange={handleChange}
                      className='w-6 h-[16px] text-blue-context bg-black border-gray-300   focus:ring-blue-500 rounded-full p-0.5 focus:outline-none'
                    />
                    </label>
                ))}

            </div>
        </TextCollapse>
        <TextCollapse title='Tags' open>

              {filter.tags.map(list =>(
              <div className='font-bold py-[1.5px]'>

                  <CheckBox key={list} name={list} label={list} value={list}/>
              </div>
              ))}
          </TextCollapse>
      
      </form>
    </div>
  )
}

export default Filter