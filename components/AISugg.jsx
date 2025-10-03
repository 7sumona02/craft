'use client'
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function TypingSearchBox() {
  const suggestions = [
    "Rewrite in a friendlier tone",
    "Summarize this paragraph",
    "Add a professional closing",
  ];

  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let typing;
    if (fade) {
      const currentSuggestion = suggestions[currentIndex];
      typing = setInterval(() => {
        if (charIndex < currentSuggestion.length) {
          setPlaceholder(currentSuggestion.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setFade(false); // start fade-out + blur
          }, 1000);
        }
      }, 60);
    }
    return () => clearInterval(typing);
  }, [charIndex, currentIndex, fade, suggestions]);

  useEffect(() => {
    if (!fade) {
      const fadeTimeout = setTimeout(() => {
        setCharIndex(0);
        setFade(true);
        setCurrentIndex((currentIndex + 1) % suggestions.length);
      }, 300); // fade/blur duration
      return () => clearTimeout(fadeTimeout);
    }
  }, [fade, currentIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-96 border-2 border-neutral-200 rounded-lg px-10 py-2 shadow shadow-neutral-100">
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-400" size={20} />
        <input
          type="text"
          placeholder={placeholder}
          className={`lowercase text-black w-full placeholder-neutral-800 font-medium transition-all duration-500 ${ 
            fade ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          }`}
        />
      </div>
    </div>
  );
}
