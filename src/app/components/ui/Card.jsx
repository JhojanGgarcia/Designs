"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../../utils/utils";
import { motion } from "framer-motion";

export default function Card() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState({});



  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions((prevPositions) => ({
      ...prevPositions,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const boxStyle =
    "border to-slate-950 relative overflow-hidden rounded-xl border-white/5 bg-black flex items-center justify-center";

  return (
    <div className="flex relative flex-col gap-4 md:my-10 my-12">
      {images.map((item, i) => (
        <motion.div
          key={i}
          onMouseMove={(e) => handleMouseMove(e, i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          className={`${boxStyle} w-[100%] h-[100%] my-5`}
        >
          <motion.input
            disabled={hoveredIndex !== i}
            style={{
              border: "3px solid rgb(255 255 255 / .5)",
              opacity: hoveredIndex === i ? 1 : 0,
              WebkitMaskImage: `radial-gradient(30% 30px at ${
                positions[i]?.x || 0
              }px ${positions[i]?.y || 0}px, black 45%, transparent)`,
            }}
            aria-hidden="true"
            className="border-[rgb(228 115 32)] pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-xl border bg-[transparent] p-3.5 transition-opacity duration-500 placeholder:select-none"
          />
          <motion.div
            className="pointer-events-none absolute -inset-px"
            style={{
              opacity: hoveredIndex === i ? 1 : 0,
              background: `radial-gradient(600px circle at ${
                positions[i]?.x || 0
              }px ${positions[i]?.y || 0}px, rgba(255,255,255,.1), transparent 60%)`,
            }}
          />
          <Image
            src={item.src}
            alt=""
            quality={100}
            className="w-full object-cover h-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
