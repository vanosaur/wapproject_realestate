import React from 'react';
import Link from 'next/link';

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

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

      {/* Header Section */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50"> {/* Increased z-index to 50 */}
        <div className="flex items-center space-x-2">
          <span className="text-white-600 text-xl font-bold">🏠 Houz X</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-white-700">
          <Link href="/">Home</Link>
          <Link href="/Properties">Properties</Link>
          <Link href="/about">About Us</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Get started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[825px] w-full flex items-center justify-center text-center z-10">
        <div className="relative z-10 flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text mb-4">
            Find Your Perfect <br /> Living Space
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            Discover your dream home in the most sought-after locations
          </p>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}


