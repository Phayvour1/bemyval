"use client";

import { useRouter } from "next/navigation"; 

export default function Home() {
  const router = useRouter(); 

  const handleClick = () => {
    router.push("/date"); 
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h1 className="font-gambetta p-6 text-5xl font-bold mb-4">
        Perfect Answer
      </h1>

      <div className="p-4 rounded-lg w-full h-full flex justify-center items-center">
        <video
          className="rounded-lg h-[400px]"
          autoPlay
          muted
          controls
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <h2 className="text-2xl font-gambetta text-pretty mb-4">
        Don&apos;t go yet baby
      </h2>

      
      <button
        onClick={handleClick}
        className="relative font-gambetta mb-6 bg-red-500 text-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-100 animate-pulse-border"
      >
        Click Me
      </button>
    </div>
  );
}
