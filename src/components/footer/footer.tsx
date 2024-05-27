'use client'
import { useState } from 'react'
import Logo from '@/components/logo/logo'
// import SocialIcons from '../social/social_icons'
import FooterList from '@/components/footer/footer_list'
import Input from '../form/input'


const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className='bg-gray-100 text-black w-full md:-mt-[8rem] lg:-mt-[11rem] max-w-[1660px] mx-auto -z-30'>
      <div className='overflow-hidden bg-white w-full'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#f3f4f6" fillOpacity="1" d="M0,224L60,240C120,256,240,288,360,293.3C480,299,600,277,720,277.3C840,277,960,299,1080,304C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      </div>
       <div className='flex flex-col md:flex-row justify-between  w-full mt-10 px-4 md:px-10'>
          <Logo  />
          <div className='flex flex-c justify-end flex-wrap gap-[10%] md:gap-20 '>
              <FooterList header='support'
               list={[ ['FAQ' , '/support'],
                ['Shipping' , '/shipping'],
                ['Complains', '/complain'],

                ] }  />

              <FooterList header='company' list={[
                ['Mission' , '/#'],
                ['About' , '/about'],
                ['Vision' , '/vision'],
            
                ]}   />

                <FooterList header='legal' list={[
                ['Privacy' , '/privacy'],
                ['Claims' , '/claims'],
                ['Terms', '/terms']
                ]}   />
          </div>
       </div>
       <div className='flex flex-col items-center justify-center md:flex-row md:justify-between gap-4  py-4 md:py-6 border-y border-gray-600/30 mt-10 px-10'>
            <div className='w-full '>
               <h3 className='font-semibold'>Subscribe for Updates</h3>
               <p className='font-light text-sm md:text-base mt-2'>The new products, discounts, and coupons, sent to your inbox mnothly.</p>
            </div>
            <form className='flex items-center justify-center md:justify-end gap-3 w-full flex-wrap   '>
                {/* <input type='email'  required name='email' id='email' minLength={5} maxLength={65}  placeholder='Email Address'
                            pattern='\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$' title='Invalid Email format'
                                value={email} onChange={e => setEmail(e.target.value.replace(/\s+/g, '')) }
                        className='w- py-1 px-1 rounded-sm  border-collapse valid:border-2  valid:border-green-500 invalid:border-2 text-default_blue
                            bg-light_accent_divider  ' /> */}
             <div className='lg:w-[16rem]'>
                 <Input label='email' type='email' placeholder='email'/>
             </div>
               

               <button
                  type="submit"
                  className={`${''} flex w-fit justify-center items-center gap-3 rounded-md bg-blue-context font-semibold mt-8  px-4 py-1.5  font- leading-6 text-lg capitalize
                  text-white shadow-sm shadow-blue-context/50 hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>
Subscribe      </button>
             </form>
       </div>
       <div className=' flex flex-col-reverse gap-6
            md:flex-row md:justify-between
            mt-8 font-thin md:font-light text-sm text-[#747373] w-full '>
        <p className='w-full text-center mb-6'> © 2024 LakyShop, Inc. All rights reserved.</p>
     
       </div>
    </footer>
  )
}

export default Footer
