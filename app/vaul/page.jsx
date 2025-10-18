"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Page() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background / Main content */}
      <motion.div
        animate={{ scale: open ? 0.98 : 1, y: open ? "1%" : "0%" }}
        style={{ borderRadius: open ? "10px" : "0px" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="min-h-screen w-screen flex flex-col justify-center items-center bg-neutral-100 origin-center"
      >
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 text-black border-2 border-neutral-300 rounded-full cursor-pointer"
        >
          Open Drawer
        </button>
      </motion.div>

      {/* Vault Component */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 z-40"
            />

            {/* Bottom Sheet */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0 }} // prevents dragging upward
              dragElastic={{ top: 0.0001, bottom: 0.3 }} // little resistance only downward
              onDragEnd={(event, info) => {
                if (info.offset.y > 120) setOpen(false) // drag down to close
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 40,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-xl shadow-xl h-[95vh] cursor-grab active:cursor-grabbing"
            >
              <div className="max-w-md mx-auto flex flex-col pt-4 px-6">
                {/* Grab handle */}
                <div className="flex justify-center mb-10">
                  <div className="h-1.5 w-12 bg-neutral-300 rounded-full" />
                </div>

                <h2 className="text-lg font-semibold mb-2">Draggable Drawer</h2>
                <p className="text-sm text-neutral-600">
                  You can drag down to close — smooth and natural!
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="w-fit mt-6 px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
