"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [yesSize, setYesSize] = useState(70);
  const [noSize, setNoSize] = useState(70);

  const handleYesClick = () => {
    window.location.href = "/perfect";
  };

  const handleNoClick = () => {
    setYesSize(yesSize + 10);
    setNoSize(noSize - 10);
  };

  return (
    <div
      className="p-10 flex flex-col items-center justify-center gap-20 min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      
      <motion.h1
        className="typewriter font-telma text-red-600 text-center font-bold mb-8 
                   text-2xl sm:text-3xl  md:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ x: -500, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        Will you be my valentine?
      </motion.h1>

      
      <div className=" flex gap-6 justify-center space-x-8">
        
        <motion.button
          onClick={handleYesClick}
          style={{
            width: `${yesSize}px`,
            height: `${yesSize}px`,
          }}
          className="bg-green-500 font-romantic  text-white text-2xl md:text-3xl font-bold rounded-lg transition-all duration-300"
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 1.5, type: "spring", stiffness: 50 }} 
        >
          YES
        </motion.button>

        
        <motion.button
          onClick={handleNoClick}
          style={{
            width: `${noSize}px`,
            height: `${noSize}px`,
          }}
          className="bg-red-500 font-romantic text-white text-2xl md:text-3xl font-bold rounded-lg transition-all duration-300"
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 1.5, type: "spring", stiffness: 50 }} 
        >
          NO
        </motion.button>
      </div>
    </div>
  );
}
