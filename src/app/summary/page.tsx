"use client";

import { useRef } from "react";
import { useSelection } from "../context/SelectionContext";
import { toPng } from "html-to-image";
import Image from "next/image";

export default function SummaryPage() {
  const { selections } = useSelection();
  const summaryRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (summaryRef.current) {
      try {
        const dataUrl = await toPng(summaryRef.current, {
          cacheBust: true,
          width: 800,
          style: {
            fontFamily: "'Gambetta', serif", 
          },
        });
  
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "valentine-summary.png";
        link.click();
      } catch (error) {
        console.error("Failed to generate image:", error);
      }
    }
  };
  

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div
        ref={summaryRef}
        className="flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center bg-opacity-90 p-8 rounded-lg shadow-md text-center"
      >
      
        <h1 className="text-4xl mt-6 p-4 font-telma font-bold mb-2">
          Thanks for being my Sunshine
        </h1>

        <p className="text-xl font-gambetta p-5">
          We&apos;ll go {selections.venue} on {selections.date} to have fun, eat{" "}
          {selections.dessert} and {selections.food}.
        </p>

        <h1 className="text-4xl p-2 text-red-600 font-gambetta font-bold mb-8">
          I love you so much Baby
        </h1>
        <Image
          src="/love.jpg"
          alt="baby"
          width={500}
          height={500}
          className="border-2 border-red-200 rounded-3xl"
        />
      </div>

      <button
        onClick={handleDownload}
        className="mt-8 font-gambetta bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-100 animate-pulse-border"
      >
        Share with yor val
      </button>
    </div>
  );
}
