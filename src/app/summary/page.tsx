"use client";

import { useSelection } from "../context/SelectionContext";

export default function SummaryPage() {
  const { selections } = useSelection();

  return (
      <div className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <h1 className="text-4xl text-center font-telma font-bold mb-8">Thanks for being an amazing girlfriend</h1>
          
          
          <p className="text-xl font-gambetta  mb-4 p-5 text-wrap"> We&apos;ll be going to the {selections.venue} on {selections.date} to have fun, eat {selections.dessert } and {selections.food}
          </p>
          

          <h1 className="text-4xl text-center font-gambetta text-red-600 font-bold mb-8"> I love you sooooooooooo much babygirl </h1>
    </div>
  );
}
