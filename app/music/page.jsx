"use client"
import { Repeat } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
    const [showImage, setShowImage] = useState();

    return (
        <div className='min-h-screen w-screen flex flex-col justify-center items-center bg-white'>
            <div className='max-w-xl mx-auto flex flex-col items-start gap-3'>
                <div className='text-xs font-mono tracking-tight'>LAST PLAYED [UI]</div>
                <div className='w-fit bg-neutral-200 rounded-xl h-fit flex items-center p-4 gap-3'>
                    <div>
                        <div className='size-15 bg-black rounded-full relative cd animate-[spin_5s_linear_infinite]'>
                            {showImage && <img src='https://i.pinimg.com/736x/04/14/7a/04147a605e4f95befbf6a1ae09dcd158.jpg' className='absolute w-full h-full object-cover rounded-full' />}
                            <div className='w-full h-2.5 bg-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[2px] reflection-light z-50'></div>
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white size-5 rounded-full'></div>
                            {["13", "12", "11", "10", "9", "8", "7", "6", "5"].map((size, i) => (
                                <div
                                    key={i}
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[0.3px] border-neutral-900/10 size-${size} rounded-full`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className='w-60 flex items-start justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <div className='font-semibold font-sans tracking-tight'>Formula</div>
                            <div className='text-sm text-neutral-600'>Labrinth</div>
                        </div>
                        <div className='mt-1 cursor-pointer'><Repeat className='size-5 text-neutral-600' /></div>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button
                        onClick={() => setShowImage(!showImage)}
                        className="text-xs font-mono border border-black py-1 px-3 mt-5 cursor-pointer"
                    >
                        {showImage ? "Hide Cover" : "Show Cover"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page