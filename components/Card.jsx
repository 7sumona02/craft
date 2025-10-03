"use client"

import React, { useState, useRef } from "react"
import { Allison } from "next/font/google"
import { PenLineIcon, Download, Check } from "lucide-react"
import domtoimage from "dom-to-image"

const allison = Allison({
  weight: "400",
  subsets: ["latin"],
})

const Page = () => {
  const [name, setName] = useState("")
  const [role1, setRole1] = useState("")
  const [role2, setRole2] = useState("")
  const [place, setPlace] = useState("")
  const [downloaded, setDownloaded] = useState(false)

  const [signedData, setSignedData] = useState({
    name: "",
    role1: "",
    role2: "",
    place: "",
  })

  const cardRef = useRef(null)

  const handleSign = () => {
    setSignedData({ name, role1, role2, place })
  }

  const handleDownload = () => {
    if (!cardRef.current) return

    domtoimage.toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "signed-card.png"
        link.href = dataUrl
        link.click()
      })
      .catch((error) => {
        console.error("Error downloading image:", error)
      })
  }

  return (
    <div className="bg-neutral-100">
      <div className="min-h-screen max-w-xl mx-auto flex flex-col gap-5 justify-center p-4">
        
        {/* Input fields */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full placeholder-neutral-500 focus:outline-none text-black bg-white rounded py-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter role 1"
            value={role1}
            onChange={(e) => setRole1(e.target.value)}
            className="w-full placeholder-neutral-500 focus:outline-none text-black bg-white rounded py-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter role 2"
            value={role2}
            onChange={(e) => setRole2(e.target.value)}
            className="w-full placeholder-neutral-500 focus:outline-none text-black bg-white rounded py-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full placeholder-neutral-500 focus:outline-none text-black bg-white rounded py-2 px-4"
          />
        </div>

        {/* Sign button */}
        <div
          className="mb-6 flex gap-1.5 items-center bg-black text-white py-2 rounded px-4 cursor-pointer hover:bg-neutral-800 transition self-start"
          onClick={handleSign}
        >
          Sign <PenLineIcon className="size-3" />
        </div>

        {/* Signed card */}
        <div
          ref={cardRef}
          className="flex justify-end bg-[#D6CA98] h-60 w-full rounded-xl px-8 py-5"
        >
          <div className="w-full flex justify-between items-start">
            
            {/* Left column */}
            <div className="flex flex-col items-start justify-between h-full">
              <div className="flex flex-col h-full">
                <p className="text-black font-medium text-sm">
                  {signedData.name || "Your Name"}
                </p>
                <p className="text-black font-medium text-sm">
                  {signedData.role1 || "Role One"}
                </p>
                <p className="text-black font-medium text-sm">
                  {signedData.role2 || "Role Two"}
                </p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/156/156318.png"
                  className="w-8"
                  alt="triangle"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-end justify-between h-full">
              <p className="text-black font-medium text-sm">
                {signedData.place || "Your City"}
              </p>
              <p
                className={`text-6xl ${allison.className} text-black font-medium translate-y-2`}
              >
                {signedData.name || "Your Signature"}
              </p>
            </div>
          </div>
        </div>

        {/* Download button */}
        <button
          onClick={() => {
            handleDownload()
            setDownloaded(true)
          }}
          className="flex gap-2 items-center bg-black text-white py-2 rounded px-4 cursor-pointer w-fit"
        >
          {downloaded ? <Check className="size-5 text-green-500" /> : <Download className="size-5" />}
        </button>
      </div>
    </div>
  )
}

export default Page
