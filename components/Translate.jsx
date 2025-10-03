'use client'
import { Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function TypingTranslate() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [typingDone, setTypingDone] = useState(false); 
  const fullText = "Existentialism is a philosophical movement that emphasizes individual freedom, choice, and personal responsibility. According to existentialists, life has no predefined meaning; it is up to each individual to create their own meaning through their actions."; 

  useEffect(() => {
    if (!show) return;
    setText("");
    setTypingDone(false); 
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTypingDone(true); 
      }
    }, 30); // typing speed
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="max-w-xl mx-auto flex flex-col justify-center items-start pt-20 gap-6 bg-neutral-50 relative p-6 font-mono">
        
        <p className="text-neutral-800">
          L'existentialisme est un courant philosophique qui met l'accent sur la liberté individuelle, le choix et la responsabilité personnelle. Selon les existentialistes, la vie n'a pas de sens prédéfini ; c'est à chaque individu de créer sa propre signification à travers ses actions.
        </p>

        <button
          className="py-2 px-3 bg-black text-white rounded text-sm flex items-center gap-1.5 cursor-pointer"
          onClick={() => setShow(true)}
        >
          Translate <Sparkles className="size-4" />
        </button>

        {show && (
          <div className="text-neutral-600 animate-fadeIn">
            <p>
              {text}
              {!typingDone && <span className="animate-pulse">|</span>}
            </p>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}
