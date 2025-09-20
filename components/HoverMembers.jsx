'use client'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence, easeInOut } from 'motion/react'
import { useState } from 'react'

const HoverMembers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const images = [
    { src: "https://cdn.cosmos.so/59a7939a-1851-447d-b33a-31d612c5b55e?format=jpeg", label: "PSF Piper Torre di Mezzo" },
    { src: "https://cdn.cosmos.so/412a6404-27e0-4897-9fa1-6f2eb9f02dfb?format=jpeg", label: "Drukarnia" },
    { src: "https://cdn.cosmos.so/c5e6f32e-c1a4-4d53-a080-66770079e495?format=jpeg", label: "Marc Rimmer's Braids" },
    { src: "https://cdn.cosmos.so/78d55e75-3114-4c9a-abc0-de7e22e74eb1?format=jpeg", label: "Blackbeaute's Illusion" },
  ]

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center gap-5 bg-neutral-50">
      <h1 className='text-2xl font-semibold tracking-tight text-black'>ARTWORK SHOWCASE</h1>
      <div className="flex gap-2">
        {images.map((img, i) => {
          const isHovered = i === hoveredIndex
          const isNeighbor = i === hoveredIndex - 1 || i === hoveredIndex + 1

          return (
            <motion.div
              key={i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{
                flex: isHovered ? 4 : isNeighbor ? 1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
              className="relative h-60 w-40 overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={`member-${i}`}
                className="w-full h-full object-cover"
              />

              {/* Bottom text bar */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring",
                stiffness: 240,
                damping: 30,duration: 0.25, ease: easeInOut }}
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent px-4 py-2 flex items-center justify-between min-w-[10rem]"
                  >
                    <span className="text-white font-semibold tracking-tight text-sm uppercase truncate">
                      {img.label}
                    </span>
                    <ArrowUpRight className='text-white size-4' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HoverMembers
