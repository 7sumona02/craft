"use client";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";

const EngravingEditor = () => {
  const [settings, setSettings] = useState({
    lineThickness: 0.25,
    lineColor: "#333333",
    lineContrast: 500,
    photoBrightness: 90,
    photoContrast: 150,
    photoBlur: 3,
    blendMode: "hard-light",
  });

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const {
    lineThickness,
    lineColor,
    lineContrast,
    photoBrightness,
    photoContrast,
    photoBlur,
    blendMode,
  } = settings;

  return (
    <div className="bg-black w-screen h-screen overflow-hidden flex items-center">
    <div className="h-[95vh] w-sm mx-auto text-white flex flex-col gap-6 border border-neutral-400 relative">
        {/* Engraving Canvas */}
      <div
        className=" w-full h-[400px] overflow-hidden shadow-2xl"
        style={{
          background: `repeating-radial-gradient(
            circle at 0 -25%,
            #fff,
            ${lineColor} ${lineThickness / 2}em,
            #fff ${lineThickness}em
          )`,
          filter: `contrast(${lineContrast}%)`,
        }}
      >
        <img
          src="https://cdn.cosmos.so/756d4662-5b91-46b7-b76c-9d01ac285a8e?format=jpeg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            mixBlendMode: blendMode,
            filter: `grayscale(1) brightness(${photoBrightness}%) contrast(${photoContrast}%) blur(${photoBlur}px)`,
          }}
        />
      </div>

      <div className="px-5 flex justify-between items-center pb-3">
        <div><div className="w-fit px-3 py-1.5 border border-neutral-600 bg-neutral-900 text-sm text-white cursor-pointer">Back</div></div>
        <div><div className="w-fit px-3 py-1.5 border border-neutral-600 bg-neutral-900 text-sm text-white cursor-pointer">Reset</div></div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-md">

        <div className="h-[250px] overflow-scroll gap-5 px-5">
          <div>
            <label className="block text-sm mb-1">Line Thickness ({lineThickness}em)</label>
            <Slider
  defaultValue={[0.25]}
  max={1}
  step={0.05}
  value={[lineThickness]}
  onValueChange={(value) => handleChange("lineThickness", value[0])}
  className="w-full accent-neutral-400 bg-neutral-800"
/>
          </div>

          <div>
            <label className="block text-sm mb-1">Line Color</label>
            <input
              type="color"
              value={lineColor}
              onChange={(e) => handleChange("lineColor", e.target.value)}
              className="w-16 h-8 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Line Contrast ({lineContrast}%)</label>
            <input
              type="range"
              min="100"
              max="800"
              step="50"
              value={lineContrast}
              onChange={(e) => handleChange("lineContrast", parseInt(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo Brightness ({photoBrightness}%)</label>
            <input
              type="range"
              min="50"
              max="150"
              value={photoBrightness}
              onChange={(e) => handleChange("photoBrightness", parseInt(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo Contrast ({photoContrast}%)</label>
            <input
              type="range"
              min="50"
              max="250"
              value={photoContrast}
              onChange={(e) => handleChange("photoContrast", parseInt(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Photo Blur ({photoBlur}px)</label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={photoBlur}
              onChange={(e) => handleChange("photoBlur", parseFloat(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Blend Mode</label>
            <select
              value={blendMode}
              onChange={(e) => handleChange("blendMode", e.target.value)}
              className="bg-neutral-700 px-2 py-1 rounded-md"
            >
              <option>overlay</option>
              <option>hard-light</option>
              <option>soft-light</option>
              <option>screen</option>
              <option>multiply</option>
            </select>
          </div>
        </div>
      </div>


    </div>
    </div>
  );
};

export default EngravingEditor;
