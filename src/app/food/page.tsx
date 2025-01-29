"use client";

import { useSelection } from "../context/SelectionContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FoodPage() {
  const { selections, setSelections } = useSelection();
  const router = useRouter();

  const [selectedFoods, setSelectedFoods] = useState(selections.food || []);

  const foods = [
    
    { name: "Jollof Rice and fried chicken", image: "/jollof.jpg" },
    { name: "seafood boil", image: "/seafood.jpeg" },
    { name: "korean food", image: "/koreanfood.jpeg" },
    { name: "pasta", image: "/pasta.jpeg" },
    { name: "pizza", image: "/pizza.jpeg" },
    { name: "salad", image: "/salad.jpeg" },
    { name: "pancakes", image: "/pancake.jpeg" },
  ];

  const toggleFoodSelection = (food: string) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((item: string) => item !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleNext = () => {
    setSelections({ ...selections, food: selectedFoods });
    router.push("/dessert");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <h1 className="text-4xl  font-telma font-bold m-8 p-5 text-center">
        What food would you like to eat?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {foods.map((food) => (
          <div key={food.name} className="font-romantic text-center">
            <Image
              src={food.image}
              alt={food.name}
              width={200}
              height={200}
              className="w-64 h-64 rounded-full border-4 p-2 border-red-300 mb-4 object-cover mx-auto"
            />
            <label className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                checked={selectedFoods.includes(food.name)}
                onChange={() => toggleFoodSelection(food.name)}
                className="w-3 h-3"
              />
              <span>{food.name}</span>
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="relative font-gambetta m-10 mb-6 bg-red-500 text-xl text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-100 animate-pulse-border"
        >
        Continue
      </button>
    </div>
  );
}
