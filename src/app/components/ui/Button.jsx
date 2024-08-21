import { motion } from "framer-motion";
import React from "react";
import "@/app/styles/Button.css"
export default function Button({ children, icon, onClick, padding}) {
  return (
    <motion.button
    onClick={onClick}
    initial={{ "--x": "100%", scale: 1 }}
    animate={{ "--x": "-100%" }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      type: "spring",
      stiffness: 20,
      damping: 15,
      mass: 2,
      scale: {
        type: "spring",
        stiffness: 10,
        damping: 5,
        mass: 0.1,
      },
    }}
    className={`${padding} rounded-xl relative radial-gradient `}
  >
    <span className="text-neutral-100 flex gap-2 items-center justify-center tracking-wide font-light h-full w-full  relative linear-mask">
      {icon}{children}
    </span>
    <span className="block absolute inset-0 rounded-xl p-[2px] linear-overlay" />
  </motion.button>
  );
};

