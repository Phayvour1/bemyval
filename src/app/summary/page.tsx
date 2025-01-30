"use client";

import { useRef, useState } from "react";
import { useSelection } from "../context/SelectionContext";
import { toPng } from "html-to-image";
import Image from "next/image";
import { FaDownload, FaTimes, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SummaryPage() {
  const { selections } = useSelection();
  const summaryRef = useRef<HTMLDivElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleGenerateImage = async () => {
    if (summaryRef.current) {
      try {
        const dataUrl = await toPng(summaryRef.current, {
          cacheBust: true,
          width: 800,
          style: {
            fontFamily: "'Gambetta', serif",
          },
        });
        setImagePreview(dataUrl);
        setShowModal(true);
      } catch (error) {
        console.error("Failed to generate image:", error);
      }
    }
  };

  const handleDownload = () => {
    if (imagePreview) {
      const link = document.createElement("a");
      link.href = imagePreview;
      link.download = "valentine-summary.png";
      link.click();
    }
  };

  const shareOnSocial = (platform: string) => {
    if (!imagePreview) return;
    const encodedUrl = encodeURIComponent(imagePreview);
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=$text=Valentine's here!`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text= Valentine's Here! }`;
        break;
    }
    window.open(shareUrl, "_blank");
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
          We&apos;ll go {selections.venue} on {selections.date} to have fun, eat {selections.dessert} and {selections.food}.
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
        onClick={handleGenerateImage}
        className="mt-8 font-gambetta bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-100 animate-pulse-border"
      >
        Share with your val
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
            <h2 className="text-2xl font-gambetta mb-4">Valentine&apos;s Here</h2>
            <Image src={imagePreview!} alt="Valentine Preview" className="max-w-full h-auto rounded-lg" width={350} height={350} />
            <div className="flex justify-center gap-4 mt-4">
              <button onClick={handleDownload} className="text-red-500 text-2xl hover:text-red-700">
                <FaDownload />
              </button>
              <button onClick={() => setShowModal(false)} className="text-gray-500 text-2xl hover:text-gray-700">
                <FaTimes />
              </button>
              <button onClick={() => shareOnSocial("facebook")} className="text-blue-600 text-2xl hover:text-blue-800">
                <FaFacebook />
              </button>
              <button onClick={() => shareOnSocial("twitter")} className="text-blue-400 text-2xl hover:text-blue-600">
                <FaTwitter />
              </button>
              <button onClick={() => shareOnSocial("whatsapp")} className="text-green-500 text-2xl hover:text-green-700">
                <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
