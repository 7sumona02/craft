"use client";
import React from "react";

const RadialEngraving = () => {
  const settings = {
    lineThickness: 0.25,
    lineColor: "#333333",
    lineContrast: 500,
    photoBrightness: 90,
    photoContrast: 150,
    photoBlur: 3,
    blendMode: "hard-light",
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
    <div
      className="relative w-full h-full rounded-none overflow-hidden"
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
        alt="engraved"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: blendMode,
          filter: `grayscale(1) brightness(${photoBrightness}%) contrast(${photoContrast}%) blur(${photoBlur}px)`,
        }}
      />
    </div>
  );
};

export default RadialEngraving;
