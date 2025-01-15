"use client";

import { useSelection } from "../context/SelectionContext";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

type DateChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function DatePage() {
  const { setSelections } = useSelection(); 
  const [selectedDate, setSelectedDate] = useState<string>("");
  const router = useRouter(); 

  const handleDateSelection = (date: string) => {
    setSelections((prev) => ({ ...prev, date })); // Update context with the selected date
    router.push("/food"); 
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h1 className="font-romantic text-4xl font-bold mb-8">Are you free on ...</h1>
      <h2 className="mb-4 text-2xl font-gambetta">Which day: (choose a date)</h2>

      <input
        type="date"
        value={selectedDate}
        onChange={(e: DateChangeEvent) => setSelectedDate(e.target.value)}
        className="border font-romantic border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => handleDateSelection(selectedDate)}
        className="relative font-gambetta mb-6 bg-red-500 text-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-100 animate-pulse-border"
      >
        Confirm Date
      </button>
    </div>
  );
}
