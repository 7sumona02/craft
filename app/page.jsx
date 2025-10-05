"use client";
import React, { useState } from "react";
import RadialEngraving from "./RadialEngraving";
import Halftone from "./Halftone";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { Sun } from "lucide-react";

const Page = () => {
  const [activeEffect, setActiveEffect] = useState("original");

  const renderEffect = () => {
    switch (activeEffect) {
      case "original":
        return <img src="https://cdn.cosmos.so/756d4662-5b91-46b7-b76c-9d01ac285a8e?format=jpeg" alt="" />;
      case "radial":
        return <RadialEngraving />;
      case "halftone":
        return <Halftone />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-black">
      <div className="w-xs mx-auto flex justify-between items-center text-sm font-mono">
        <div>ED.IT</div>
        <div><Sun className="size-4" /></div>
      </div>
      <div className="w-xs h-fit border border-neutral-400 overflow-hidden mt-5">
        <div className="w-xs aspect-square flex items-center justify-center bg-neutral-900">
          {renderEffect()}
        </div>

        <div className="flex flex-col font-mono uppercase p-4">
          <div className="w-fit px-2 border border-neutral-600 bg-neutral-900 text-sm text-white">fx</div>

          <div className="mt-3 text-sm cursor-pointer">
            <div
              onMouseEnter={() => setActiveEffect("original")}
              className={`transition ${activeEffect === "original" ? "text-white" : "text-neutral-600"}`}
            >
              Original
            </div>
            <Link href="/effects/1">
              <div
                onMouseEnter={() => setActiveEffect("radial")}
                className={`transition ${activeEffect === "radial" ? "text-white" : "text-neutral-600"}`}
              >
                Radial Engraving
              </div>
            </Link>
            <div
              onMouseEnter={() => setActiveEffect("halftone")}
              className={`transition ${activeEffect === "halftone" ? "text-white" : "text-neutral-600"}`}
            >
              Halftone
            </div>
          </div>
        </div>
      </div>

        <div className="w-xs mx-auto uppercase text-xs absolute bottom-5 inset-x-0 font-mono text-white flex justify-between items-center">
          <div>
            edit photos the way you see it.
          </div>
          <Link href="https://x.com/weebdev_san" target="_blank" className="cursor-pointer"><RiTwitterXLine className="size-4" /></Link>
        </div>    
      </div>
  );
};

export default Page;
