"use client"

import { MinusIcon, PlusIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

const useOutsideClick = (callback) => {
    const ref = useRef()

    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback()
        }
      }
      document.addEventListener("click", handleClick)
      return () => {
        document.removeEventListener("click", handleClick)
      }
    },[callback])

    return ref
  }

const page = () => {
    const [current, setCurrent] = useState()
    const ref = useOutsideClick(() => setCurrent())
    return (
        <div className="min-h-screen absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <div className='h-full w-full flex justify-center items-center text-black capitalize'>expandable menu with motion</div>
            <AnimatePresence>
            {current && (
                <motion.div layoutId='modal' initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 35 }} ref={ref} className='w-60 fixed top-4 left-4 bg-black text-white p-4 rounded-xl'>
                    <motion.div layoutId='menu-title' className='flex justify-between items-center'>
                        <motion.div onClick={() => setCurrent()} layoutId='1' className='font-medium cursor-pointer text-sm'>Close</motion.div>
                        <motion.div layoutId='2'><MinusIcon className='size-4' /></motion.div>
                    </motion.div>
                    <div className='flex justify-center items-center'>
                    <motion.div initial={{ opacity: 0, y:-10 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 0.4, delay: 0.1 }} className='flex flex-col space-y-1.5 text-left mt-10 text-neutral-400 pb-6 text-lg w-fit'>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400'>Home</div>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400'>Services</div>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400'>Case</div>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400'>About</div>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400'>Contact</div>
                        <div className='cursor-pointer font-medium hover:text-white transition-all duration-400 mt-4'>Instagram</div>
                    </motion.div>
                    </div>
                </motion.div>
            )} 
            </AnimatePresence>

            <motion.div layoutId='modal' initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 35 }} className='w-32 px-4 py-2 bg-black text-white fixed top-4 left-4 rounded-lg cursor-pointer'>
                <motion.div layoutId='menu-title' className='menu-title flex justify-between items-center'>
                    <motion.div layoutId='1' onClick={() => setCurrent(true)} className='font-medium cursor-pointer text-sm'>Menu</motion.div>
                    <motion.div layoutId='2'><PlusIcon className='size-4' /></motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default page