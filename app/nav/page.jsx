"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { title: "Wearable", href: "/nav" },
  { title: "Neural", href: "/" },
  { title: "Programs", href: "/" },
  { title: "Updates", href: "/" },
  { title: "Search", href: "/" },
]

const Page = () => {
    const [hover, setHover] = useState(null)
    const pathname = usePathname()
  return (
    <div className="min-h-screen w-screen flex items-start justify-center pt-4 bg-neutral-100/50">
      <div className="mx-auto bg-neutral-200 rounded-lg flex p-2">
        {navItems.map((item, idx) => {
            const isActive = pathname === item.href
            return (
          <Link
            href={item.href}
            key={item.title}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            className="capitalize text-neutral-800 tracking-tight font-sans relative px-6 py-3 group"
          >
            {hover === idx && <motion.div layoutId="hoverNav" transition={{
                  type: "spring",
                  stiffness:400,
                  damping: 40,
                }} className="absolute inset-0 w-full rounded bg-black cursor-pointer"></motion.div>}
            <span className='relative group-hover:text-white transition-all duration-250'>{item.title}</span>
          </Link>
        )})}
      </div>
    </div>
  )
}

export default Page
