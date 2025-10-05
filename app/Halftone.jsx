"use client";
import React from "react";

const Halftone = () => {
  const settings = {
    dotSize: 0.25,
    lineColor: "#333333",
    lineContrast: 2000,
    photoBrightness: 80,
    photoContrast: 150,
    photoBlur: 2,
    blendMode: "hard-light",
  };

  const {
    dotSize,
    lineColor,
    lineContrast,
    photoBrightness,
    photoContrast,
    photoBlur,
    blendMode,
  } = settings;

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-none"
      style={{
        filter: `contrast(${lineContrast}%)`,
      }}
    >
      {/* Halftone dots pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${lineColor}, #fff)`,
          backgroundSize: `${dotSize}em ${dotSize}em`,
          transform: "rotate(20deg)",
        }}
      />

      {/* Image layer */}
      <img
        src="https://cdn.cosmos.so/756d4662-5b91-46b7-b76c-9d01ac285a8e?format=jpeg"
        alt="halftone"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: blendMode,
          filter: `grayscale(1) brightness(${photoBrightness}%) contrast(${photoContrast}%) blur(${photoBlur}px)`,
        }}
      />
    </div>
  );
};

export default Halftone;
