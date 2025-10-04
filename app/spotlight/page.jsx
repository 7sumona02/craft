"use client"
import { XIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { BsFiletypeJsx, BsFiletypeTsx } from "react-icons/bs"
import { FaReact } from "react-icons/fa"

const badgeRows = [
  {
    translate: "translate-x-0",
    files: [
      { icon: FaReact, name: "dialog.tsx" },
      { icon: BsFiletypeTsx, name: "navigation.tsx" },
      { icon: BsFiletypeJsx, name: "footer.jsx" },
      { icon: BsFiletypeTsx, name: "popover.tsx" },
    ],
  },
  {
    translate: "-translate-x-8",
    files: [
      { icon: BsFiletypeJsx, name: "theme.jsx" },
      { icon: BsFiletypeTsx, name: "profile.tsx" },
      { icon: FaReact, name: "header.tsx" },
      { icon: BsFiletypeJsx, name: "about.jsx" },
    ],
  },
  {
    translate: "translate-x-0",
    files: [
      { icon: BsFiletypeTsx, name: "button.tsx" },
      { icon: FaReact, name: "layout.tsx" },
      { icon: BsFiletypeJsx, name: "contact.jsx" },
      { icon: BsFiletypeTsx, name: "tabs.tsx" },
    ],
  },
  {
    translate: "-translate-x-10",
    files: [
      { icon: FaReact, name: "carousel.tsx" },
      { icon: BsFiletypeTsx, name: "sidebar.tsx" },
      { icon: BsFiletypeJsx, name: "hero.jsx" },
      { icon: BsFiletypeTsx, name: "modal.tsx" },
    ],
  },
]

const Page = () => {
  const spotlightRef = useRef(null)

  useEffect(() => {
    let spotlightSize = "transparent 5%, rgba(0, 0, 0, 0.8) 45%"
    const spotlight = spotlightRef.current

    const updateSpotlight = (e) => {
      const x = (e.pageX / window.innerWidth) * 100
      const y = (e.pageY / window.innerHeight) * 100
      if (spotlight) {
        spotlight.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, ${spotlightSize})`
      }
    }

    const handleMouseDown = (e) => {
      spotlightSize = "transparent 10%, rgba(0, 0, 0, 0.8) 40%"
      updateSpotlight(e)
    }

    const handleMouseUp = (e) => {
      spotlightSize = "transparent 10%, rgba(0, 0, 0, 0.8) 40%"
      updateSpotlight(e)
    }

    window.addEventListener("mousemove", updateSpotlight)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updateSpotlight)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div className="bg-neutral-100 min-h-screen w-screen flex justify-center items-center relative overflow-hidden">
      <div className="w-lg h-fit bg-black rounded-2xl py-4 text-white relative z-10 overflow-hidden">
        
        {/* Content with Spotlight */}
        <div className="relative flex flex-col gap-3 content bg-gradient-to-t from-black to-transparent w-full h-fit overflow-hidden">
          {/* Spotlight Layer (only over content) */}
          <div
            ref={spotlightRef}
            className="absolute inset-0 pointer-events-none transition-all duration-75 z-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.8) 30%)",
            }}
          />

          {/* Badge Rows */}
          <div className="relative z-10 flex flex-col gap-3">
            {badgeRows.map((row, i) => (
              <div key={i} className={`flex gap-3 ${row.translate}`}>
                {row.files.map((file, j) => (
                  <IconBadge key={j} icon={file.icon} name={file.name} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer (no spotlight) */}
        <div className="flex justify-between items-center z-[99] footer  px-7 pb-2">
          <div className="flex flex-col">
            <div className="text-xl text-white font-medium">Working</div>
            <div className="text-neutral-400">Read app layout</div>
          </div>
          <div>
            <XIcon className="size-6 text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

const IconBadge = ({ icon: Icon, name }) => {
  return (
    <div className="w-fit flex items-center gap-2 bg-neutral-900 px-4 py-3 rounded-xl border border-neutral-600/50 text-sm">
      <Icon />
      {name}
    </div>
  )
}
