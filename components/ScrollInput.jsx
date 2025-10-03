'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollInput = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("select");

  const options = [
    "cook",
    "read",
    "sleep",
    "walk",
    "listen",
    "play",
    "write",
    "travel",
    "draw",
    "study"
  ];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-sm ">
        {/* Trigger */}
        <div
          className="flex items-center justify-between px-4 py-2 bg-white/10 text-white rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span>{selected}</span>
          <ChevronDown className="h-5 w-5" />
        </div>

        {/* Animated options */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full mt-2 max-h-96 overflow-y-auto rounded-lg shadow-lg top-50"
          >
            {options.map((option) => (
              <motion.li
                key={option}
                className="px-4 py-3.5 text-white cursor-pointer opacity-70 hover:opacity-100"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default ScrollInput;
