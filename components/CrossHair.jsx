"use client"
import { HeartIcon } from "lucide-react"
import React from "react"

const Page = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="bg-black min-h-screen w-screen flex justify-center items-center">
      <div onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="w-lg h-40 border border-neutral-800 flex justify-center items-center relative">
        <div
          className="font-medium text-white text-xl tracking-tight flex cursor-pointer"
        >
          Vercel's design system is
          <HeartIcon fill={isHovered ? "oklch(57.7% 0.245 27.325)" : "transparent"} className="transition-all duration-300 ml-1" />
          .
        </div>

        <div>
          <Cross1 />
        </div>
        <div>
          <Cross2 />
        </div>
      </div>
    </div>
  )
}

export default Page

const Cross1 = () => {
  return (
    <div>
      <div className="w-5 h-6 absolute -top-3 -right-[1px] border-r border-r-neutral-400"></div>
      <div className="w-6 h-6 absolute -top-[1px] -right-3 border-t border-t-neutral-400"></div>
    </div>
  )
}

const Cross2 = () => {
  return (
    <div>
      <div className="w-5 h-6 absolute -bottom-3 -left-[1px] border-l border-l-neutral-400"></div>
      <div className="w-6 h-6 absolute -bottom-[1px] -left-3 border-b border-b-neutral-400"></div>
    </div>
  )
}
