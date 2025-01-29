"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function Home() {
  const router = useRouter();
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        { strokeDasharray: "600, 50", strokeDashoffset: 600 },
        { strokeDashoffset: 0, duration: 4, ease: "power2.out" }
      );
    }
  }, []);

  const handleClick = () => {
    router.push("/date");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h1 className="font-gambetta p-6 text-5xl font-bold mb-4">Perfect Answer</h1>

      <div className="p-4 rounded-lg w-full h-full flex justify-center items-center">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path
            ref={pathRef}
            d="M100 20 C140 -20 220 50 100 170 C-20 50 60 -20 100 30"
            fill="none"
            stroke="red"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 5px red)" }}
          />
        </svg>
      </div>

      <h2 className="text-2xl font-gambetta text-pretty mb-4">Don&apos;t go yet baby</h2>

      <button
        onClick={handleClick}
        className="relative font-gambetta mb-6 bg-red-500 text-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-100 animate-pulse-border"
      >
        Click Me
      </button>
    </div>
  );
}
