"use client";

import { useSelection } from "../context/SelectionContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VenuePage() {
  const { selections, setSelections } = useSelection();
  const router = useRouter();

  const [selectedVenues, setSelectedVenues] = useState(selections.venue || []);

  const venues = [
    { name: "Visit the Museum", image: "/m.jpeg" },
    { name: "See an Aquarium", image: "/aquarium.jpeg" },
    { name: "Snow Tubing ", image: "/snow_tubing.jpeg" },
    { name: "Visit  Bubble Planet", image: "/bubble_planet.jpeg" },
    { name: "Karting", image: "/go_kart.jpeg" },
    { name: "See a Movie", image: "/cinema.jpeg" },
  ];

  const toggleVenueSelection = (venue: string) => {
    if (selectedVenues.includes(venue)) {
      setSelectedVenues(selectedVenues.filter((item: string) => item !== venue));
    } else {
      setSelectedVenues([...selectedVenues, venue]);
    }
  };

  const handleNext = () => {
    setSelections({ ...selections, venue: selectedVenues });
    router.push("/summary");
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <h1 className="text-4xl  font-telma font-bold m-8 p-5 text-center">What are we doing after?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div
            key={venue.name}
            className="flex flex-col font-romantic items-center p-4"
          >
            <Image
              src={venue.image}
              alt={venue.name}
              width={200}
              height={200}
              className="w-64 h-64 p-2 rounded-full border-4 border-red-300 object-cover mb-4"
            />
            <label className="text-lg">
              <input
                type="checkbox"
                checked={selectedVenues.includes(venue.name)}
                onChange={() => toggleVenueSelection(venue.name)}
                className="mr-2"
              />
              {venue.name}
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-8"
      >
        Next
      </button>
    </div>
  );
}
