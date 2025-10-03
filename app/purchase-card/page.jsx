"use client"

import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import {AnimatePresence, motion} from 'motion/react'
 
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
  const [isOpen, setIsOpen] = useState()
  return (
    <div className={`min-h-screen w-screen flex items-center justify-center bg-neutral-200 ${inter.className}`}>
      <div onClick={() => setIsOpen(!isOpen)} className='bg-black px-5 py-3 rounded-xl cursor-pointer font-medium'>Purchase Now</div>

      <AnimatePresence>
        {isOpen && (<motion.div initial={{opacity:0}} animate={{opacity:1}} className='fixed z-10 h-full w-full inset-0 backdrop-blur-sm bg-/30'></motion.div>)}
        {isOpen && (
          <div className='fixed z-20 inset-0 flex items-center justify-center'>
          <motion.div initial={{opacity:0, scale: 0.9, filter: 'blur(10px)'}} animate={{opacity:1, scale: 1, filter: 'blur(0px)'}} exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} transition={{duration: 0.25}} className='w-md bg-white rounded-3xl h-fit'>
            <div className='flex flex-col space-y-4 p-5'>
              <div className='w-full flex justify-end'><div onClick={() => setIsOpen(!isOpen)} className='bg-neutral-200/50 rounded-xl p-2.5'><XIcon className='size-5 text-black cursor-pointer' /></div></div>
              <div className='flex flex-col items-center space-y-3 justify-center text-center'>
                <div className='text-2xl text-black tracking-tight font-semibold'>Request to purchase</div>
                <div className='max-w-xs text-neutral-500 text-sm leading-relaxed'>We will send you a request to purchase the product. Please check your email.</div>
              </div>
              <div className='cards flex flex-col items-start mt-9 gap-2.5'>
                <div className='w-full card-1 flex gap-4 bg-neutral-200/50 p-4 rounded-xl'>
                  <div>
                    <img src='https://cdn.cosmos.so/19a57124-55b6-49d8-9cd9-3faaf6a9e293?format=jpeg' alt='tshirt' className='size-14 rounded-md' />
                  </div>
                  <div className='flex flex-col space-y-'>
                    <div className='font-mono text-neutral-400 uppercase font-medium'>FVCKRENDER</div>
                    <div className='font-semibold text-black text-sm'>Big Care, 2024</div>
                  </div>
                </div>
                <div className='card-2 w-full card-1 flex flex-col gap-4 bg-neutral-200/50  rounded-xl'>
                  <div className='w-full flex justify-between items-center px-4 pt-4'>
                    <div className='font-mono text-xs text-neutral-400 uppercase font-medium'>Artwork Price</div>
                    <div className='text-black font-medium tracking-tight text-sm'>$75,000</div>
                  </div>
                  <div className='w-full h-[1.5px] bg-neutral-200'></div>
                  <div className='w-full flex justify-between items-center px-4'>
                    <div className='font-mono text-xs text-neutral-400 uppercase font-medium'>Collectors</div>
                    <div className='text-black font-medium tracking-tight text-sm'>142</div>
                  </div>
                  <div className='w-full h-[1.5px] bg-neutral-200'></div>
                  <div className='w-full flex justify-between items-center px-4 pb-4'>
                    <div className='font-mono text-xs text-neutral-400 uppercase font-medium'>Sold on</div>
                    <div className='text-black font-medium tracking-tight text-sm'>10 May 2024</div>
                  </div>
                </div>
              </div>
              <div className='w-full mt-5'>
                <div className='bg-black text-white px-5 py-3 rounded-xl cursor-pointer font-medium text-center text-sm'>Notify us</div>
              </div>
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default page