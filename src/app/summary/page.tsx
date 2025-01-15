"use client";

import { useSelection } from "../context/SelectionContext";
import Image from "next/image";

export default function SummaryPage() {
  const { selections } = useSelection();

  return (
      <div className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <h1 className="text-4xl mt-6 p-4 text-center font-telma font-bold mb-2">Thanks for being my Sunshine</h1>
          
          
          <p className="text-xl font-gambetta   p-5 text-wrap"> We&apos;ll go {selections.venue} on {selections.date} to have fun, eat {selections.dessert } and {selections.food}
          </p>
          

          <h1 className="text-4xl p-2 text-center font-gambetta text-red-600 font-bold mb-8"> I love you sooooooooooo much Bam Bam </h1>
      <Image
        src="/last_page.jpeg"
        alt="baby"
        width={500}
        height={500}

        className="  border-2 border-red-400  rounded-3xl"
      />
    
    </div>
  );
}
