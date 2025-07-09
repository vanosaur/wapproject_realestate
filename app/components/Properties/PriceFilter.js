"use client";
import React from "react";
import { IndianRupee } from "lucide-react";

const PriceFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const handleMinChange = (e) => {
    setMinPrice(e.target.value); 
  };

  const handleMaxChange = (e) => {
    setMaxPrice(e.target.value); 
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Filter by Price</h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Min Price */}
        <div className="flex-1">
          <label className="block mb-1 text-sm text-gray-600">Minimum Price</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <IndianRupee className="h-4 w-4" />
            </span>
            <input
              type="number"
              value={minPrice}
              onChange={handleMinChange}
              placeholder="e.g. 50000"
              min={0}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-black placeholder-gray-400"
            />
          </div>
        </div>

        {/* Max Price */}
        <div className="flex-1">
          <label className="block mb-1 text-sm text-gray-600">Maximum Price</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <IndianRupee className="h-4 w-4" />
            </span>
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxChange}
              placeholder="e.g. 5000000"
              min={0}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-black placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
