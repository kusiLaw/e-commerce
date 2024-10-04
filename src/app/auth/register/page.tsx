'use client'
import React, {useState, ChangeEvent, FormEvent} from 'react'
import Link from 'next/link'
import { useRegisterMutation } from '@/lib/redux/authApiSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const[register,{isLoading}] = useRegisterMutation()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  })

  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
  } = formData;

  const handleSubmit = (event:FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    register({first_name,
    last_name,
    email,
    password,
      re_password,
    })
    .unwrap()
      .then(() => {
        toast.success('Please check your email to activate your account')
        router.push('/auth/login')
      })
      .catch((error) => {
        console.log(error)
        toast.error('Failed to create account ', error)
      })
    
  }

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl capitalize font-bold leading-9 tracking-tight text-gray-900">
            create accounts
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form  onSubmit={handleSubmit} method="POST" className="space-y-3">
            <div className='flex justify-between '>
              <div>
                  <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                    first name
                  </label>
                  <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    value={first_name}
                    maxLength={45}
                    onChange={handleOnChange}
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-hover
                    sm:text-sm sm:leading-6 " 
                  />
                </div>
              </div>
              <div>
                  <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                    last name
                  </label>
                  <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    value={last_name}
                    onChange={handleOnChange}
                    required
                     maxLength={45}

                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-hover
                    sm:text-sm sm:leading-6 " 
                  />
                </div>
              </div>
             </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleOnChange}
                  required
                    maxLength={80}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset
                  ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-hover
                  sm:text-sm sm:leading-6 " 
                />
              </div>
            </div>




            <div>
                  <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                  placeholder='password'
                  value={password}
                  onChange={handleOnChange}
                  required
                    maxLength={45}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset
                    focus:ring-blue-hover sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

              <div>
                  <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Re-Password
                  </label>
                
                </div>
                <div className="mt-1">
                  <input
                    id="re_password"
                    name="re_password"
                    type="password"
                  placeholder='re_password'
                  value={re_password}
                  onChange={handleOnChange}
                  required
                  maxLength={45}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset
                    focus:ring-blue-hover sm:text-sm sm:leading-6"
                  />
                </div>
            </div>


            <div>
              <div className='pt-3'>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-sm bg-blue-context px-3 py-2 text-sm font-semibold leading-6
                  text-white shadow-sm hover:shadow-md hover:bg-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
             </div>
            </div>
            <div className='mt-12'>
               <p>{"Aready have an account? "}<Link  href={'/auth/login'} className='text-blue-context text-sm'>Login</Link></p>
             </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Page