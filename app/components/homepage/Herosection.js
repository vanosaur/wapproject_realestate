'use client';

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
  return (
    <section className="relative w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
      >
        <source src="/videos/5031101-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center px-4 md:px-8 text-center z-10">
        <div className="text-white flex flex-col items-center max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Your Next Chapter <br /> Starts Here
          </h1>
          <p className="text-base sm:text-lg mb-8 px-2">
            Find your perfect home in the most desirable neighborhoods
          </p>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
