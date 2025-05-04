'use client'; // Only needed if you're using Next.js 13+ with the app directory

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

function SearchBar() {
  return (
    <div className="flex w-full max-w-lg bg-white rounded-full shadow-md overflow-hidden">
      <input
        type="text"
        placeholder="Enter location..."
        className="flex-1 px-5 py-3 outline-none text-sm text-gray-700"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-semibold">
        Search
      </button>
    </div>
  );
}

export default function HeaderAndHero() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <section className="relative w-full">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/videos/5031101-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

      {/* Header Section */}
      <Navbar />
      

      {/* Hero Section */}
      <div className="relative h-[825px] w-full flex items-center justify-center text-center z-10">
        <div className="relative z-10 flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-transparent mb-4">
            Your Next Chapter <br /> Starts Here
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Find your perfect home in the most desirable neighborhoods
          </p>
          <SearchBar />
        </div>
      </div>

      
    </section>
  );
}




