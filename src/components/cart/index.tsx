'use client'
import { Fragment, useState } from 'react'
import { useRouter, usePathname, redirect } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import CartProduct from './product'
import Link from 'next/link'
import { todo } from 'node:test'


export default function Cart({open=false, setOpen=(e:any)=>{}} ) {
  // const [open, setOpen] = useState(isOpen )
  const router = useRouter()
  const pathname = usePathname()
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 w-full " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600/30  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <CartProduct/>
                    </div>


                    {/** checkout footer */}
                    <div className="border-t shadow-xl g-gray-50 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      
                      {/** button */}
                      <div className="mt-6">
                        <button 
                          // href="#"
                          className="flex items-center justify-center w-full rounded-md border border-transparent bg-blue-context hover:bg-blue-hover
                           px-6 py-2.5 text-base font-medium text-white shadow-sm"
                          onClick={() => {
                            // todo: handle redirect base on different page
                            // if (pathname.split('/').includes('details')) {
                            //   console.log(pathname.split('/'))
                            //      router.push('/checkout')
                            // } else {
                            //   router.push('products/checkout')
                            // }
                                  

                            setOpen(false);

                          }}
                        >
                          Checkout
                        </button>
                        <Link
                          href={'/cart'}
                          className="flex mt-6 items-center justify-center w-full rounded-md border border-blue-context hover:bg-gray-50
                           px-6 py-2.5 text-base font-medium text-blue-context shadow-sm"
                        >
                          View Cart
                        </Link>
                      </div>

                      {/* or */}
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-blue-context hover:text-blue-hover"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
