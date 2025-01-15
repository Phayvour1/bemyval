"use client";

import { useSelection } from "../context/SelectionContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function DessertPage() {
  const { setSelections } = useSelection();
  const router = useRouter();

  const [selectedDesserts, setSelectedDesserts] = useState<string[]>([]);

  const desserts = [
    {
      name: "Bubble tea",
      image: "/bubble.jpeg",
    },
    {
      name: "Pretzels",
      image: "/pretzels.jpeg",
    },
    {
      name: "Ice cream",
      image: "/ice.jpeg",
    },
    {
      name: "Cheese cake",
      image: "/cheese.jpeg",
    },
    {
      name: "Cake",
      image: "/cake.jpeg",
    },
    {
      name: "Croffles",
      image: "/croffle.jpeg",
    },
  ];

  const handleDessertSelection = (dessert: string) => {
    setSelectedDesserts((prev) =>
      prev.includes(dessert)
        ? prev.filter((item) => item !== dessert)
        : [...prev, dessert]
    );
  };

  const handleNext = () => {
    setSelections((prev) => ({ ...prev, dessert: selectedDesserts }));
    router.push("/venue");
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <h1 className="text-4xl  font-telma font-bold m-8 p-5 text-center">Choose Dessert</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {desserts.map((dessert) => (
          <div
            key={dessert.name}
            className="flex flex-col font-romantic items-center p-4 "
          >
            <Image
              src={dessert.image}
              alt={dessert.name}
              width={200}
              height={200}
              className="w-64 h-64 rounded-full p-2 border-4 border-red-300 mb-4 object-cover mx-auto"
            />
            <label className="text-lg text-center">
              <input
                type="checkbox"
                checked={selectedDesserts.includes(dessert.name)}
                onChange={() => handleDessertSelection(dessert.name)}
                className="mr-2"
              />
              {dessert.name}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="relative font-gambetta m-2 mb-6 bg-red-500 text-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-100 animate-pulse-border"
        >
        Next
      </button>
    </div>
  );
}
