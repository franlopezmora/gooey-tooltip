"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GooeyTooltip = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      {/* Filtro Gooey SVG */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      <div style={{ filter: "url(#goo)" }} className="relative flex flex-col items-center">
        {/* Botón con eventos */}
        <motion.button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          layoutId="gooey"
          className="z-10 w-20 h-20 rounded-full bg-zinc-200 text-black font-bold text-2xl flex items-center justify-center shadow-xl"
        >
          ?
        </motion.button>

        {/* Tooltip animado */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="tooltip"
              initial={{ x:0,y: 0, scale: 0.2, opacity: 0 }}
              animate={{ x: 100,y: -140, scale: 1, opacity: 1 }}
              exit={{ x:0,y: 0, scale: 0.2, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
              className="absolute w-52 min-h-[100px] rounded-2xl bg-zinc-200 text-zinc-900 text-center flex items-center justify-center px-4 py-4 pointer-events-none"
            >
              Damn that's gooey
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GooeyTooltip;
