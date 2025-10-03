"use client"

import { useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'

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
    <div className='min-h-screen w-screen bg-neutral-100 flex items-center justify-center'>
      {current && <motion.div initial={{opacity:0}} animate={{opacity:1}} className='fixed z-10 h-full w-full inset-0 backdrop-blur-sm bg-black/50'></motion.div>}
      {current && (
        <motion.div layoutId='modal' ref={ref} className='flex flex-col items-start gap-3 h-fit fixed inset-0 z-20 m-auto w-xs bg-white border-2 border-neutral-200 p-3 rounded-2xl'>
          <div className='pb-3'>
            <motion.img layoutId='modal-image' src='https://i.pinimg.com/736x/3a/83/c4/3a83c473d00adc2523df1cf5cbaed706.jpg' className='w-full rounded-xl' />
          </div>
          <div className='w-full flex justify-between items-start'>
            <div className='text-black -space-y-1 mb-3'>
              <motion.div layoutId='modal-title' className='font-semibold tracking-tight text-lg'>Sao Paulo</motion.div>
              <motion.div layoutId='modal-subtitle' className='text-neutral-600'>Weeknd</motion.div>
            </div>
            <motion.div layoutId='modal-play-button' className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer'>Play</motion.div>
          </div>
          <motion.div initial={{opacity:0, filter: 'blur(10px)'}} animate={{opacity:1,filter: 'blur(0px)'}} transition={{duration: 0.3}} className='h-40 overflow-auto pb-20 text-neutral-500 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]'>Every time I try to run, you put your curse all over me
I surrender at your feet, baby, put it all on me
Every time I try to pray you away, you got me on my knees
I surrender at your feet, baby, put it all on me
I love it when you turn me on
I love it when you turn it on
I love it when you turn me on
So, come back in and turn it on
Oh, yeah</motion.div>
        </motion.div>
      )}
      <motion.div layoutId='modal' onClick={() => setCurrent(true)} className='w-lg bg-white border-2 border-neutral-200 p-2 rounded-xl flex justify-between items-start'>
        <div className='flex gap-3'>
          <div>
            <motion.img layoutId='modal-image' src='https://i.pinimg.com/736x/3a/83/c4/3a83c473d00adc2523df1cf5cbaed706.jpg' className='size-20 rounded-xl' />
          </div>
          <div className='text-black -space-y-1'>
            <motion.div layoutId='modal-title' className='font-semibold tracking-tight text-lg'>Sao Paulo</motion.div>
            <motion.div layoutId='modal-subtitle' className='text-neutral-600'>Weeknd</motion.div>
          </div>
        </div>
        <motion.div layoutId='modal-play-button' className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer'>Play</motion.div>
      </motion.div>
    </div>
  )
}

export default page