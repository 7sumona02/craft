'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
})

const Agency = () => {
  const [bg, setBg] = useState("bg-neutral-50")
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedRole, setSelectedRole] = useState(null)

  const titles = [
    { text: "Antoine and Charlie", role: "photographer", bg: "bg-black", img: "https://cdn.cosmos.so/1d712e77-fa4a-45ec-bf66-61870d7f35d8?format=jpeg" },
    { text: "Rosei Harriet Ellis", role: "direction", bg: "bg-neutral-200", img: "https://cdn.cosmos.so/af6d7dfe-752d-4178-93f3-314cd4f29e77?format=jpeg" },
    { text: "Florent Tanet", role: "visual", bg: "bg-red-500", img: "https://cdn.cosmos.so/42a04fe4-c6ec-4295-9a72-b6a829b01416?format=jpeg" },
    { text: "Kin Chan Kodel", role: "CGI", bg: "bg-lime-500", img: "https://cdn.cosmos.so/e3d40af6-c77c-40e2-becd-37630e26f739?format=jpeg" },
    { text: "Marc Hibbert", role: "photographer", bg: "bg-amber-600", img: "https://cdn.cosmos.so/70e4d98d-b833-46a9-8eb5-e18e6d05bad3?format=jpeg" },
    { text: "Guy Aroch", role: "direction", bg: "bg-green-700", img: "https://cdn.cosmos.so/ce8d2c91-1314-4c6f-9cc8-8a74b9aeaf00.?format=jpeg" },
    { text: "David Gomex Maestre", role: "visual", bg: "bg-pink-400", img: "https://cdn.cosmos.so/d4cc62bf-e9d2-4eed-8eff-ba00fb51a686?format=jpeg" },
    { text: "Anne Sophie", role: "CGI", bg: "bg-indigo-600", img: "https://cdn.cosmos.so/5ac34904-7723-4b34-abab-04288f972e01?format=jpeg" },
    { text: "The Masons", role: "photographer", bg: "bg-blue-200", img: "https://cdn.cosmos.so/845dd9d8-6a24-4fce-a798-a538a939ece2?format=jpeg" },
  ]

  // Split titles into chunks of 3
  const rows = []
  for (let i = 0; i < titles.length; i += 3) {
    rows.push(titles.slice(i, i + 3))
  }

  const roles = ["photographer", "direction", "visual", "CGI"]

  return (
    <div className={`relative h-screen w-screen flex flex-col items-center justify-between gap-[13vw] text-black pt-10 transition-colors duration-500 ${bg} overflow-hidden`}>

      {/* Hovered Image in Center with Motion */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={titles[hoveredIndex].img}
            className="absolute inset-0 m-auto w-[480px] h-auto flex flex-col items-center justify-center pointer-events-none z-[10]"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img
              src={titles[hoveredIndex].img}
              alt=""
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute text-white text-xl font-sans uppercase font-light tracking-tight text-center">
              {titles[hoveredIndex].role}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Titles in rows of 3 */}
      <div className='flex flex-col justify-center items-center gap-12'>
        <div className="flex flex-col gap-4 z-10 relative">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-20 text-6xl">
              {row.map((item, i) => {
                const index = rowIndex * 3 + i
                const isHovered = hoveredIndex === index
                const roleMatch = !selectedRole || selectedRole === item.role
                return (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setBg(item.bg)
                      setHoveredIndex(index)
                    }}
                    onMouseLeave={() => {
                      setBg("bg-neutral-50")
                      setHoveredIndex(null)
                    }}
                    className={`cursor-pointer transition-all duration-300 z-[99] ${
                      isHovered ? 'text-white opacity-100' : hoveredIndex !== null ? 'text-black opacity-5' : 'text-black'
                    } ${!roleMatch ? 'opacity-20' : ''} ${index % 2 === 1 ? "font-['Cursive'] italic tracking-tight" : "font-['Normal'] tracking-tight"}`}
                  >
                    {item.text}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Role Tabs */}
        <div className='font-light tracking-tight text-neutral-500 flex gap-8 text-sm cursor-pointer'>
          {roles.map((role) => (
            <div
              key={role}
              onClick={() => setSelectedRole(selectedRole === role ? null : role)}
              className={`transition-colors duration-300 ${selectedRole === role ? 'text-black' : ''}`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="font-extrabold font-sans text-[14rem] tracking-tighter relative z-[5]">
        ARTWORLD
      </div>
    </div>
  )
}

export default Agency
