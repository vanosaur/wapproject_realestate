"use client";
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import { Search, MapPin, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import Image from 'next/image';
import { BedDouble, Bath, Maximize, IndianRupee, Building } from 'lucide-react';
import mockProperties from 'app/data/mockproperties';

function Properties() { 
  const [searchText, setSearchText] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [showSuggestions, setShowSuggestions] = useState(false); // State to control suggestion dropdown visibility

  // Effect to filter properties whenever searchText changes
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredProperties(mockProperties); // If search is empty, show all properties
    } else {
      const lowercasedSearchText = searchText.toLowerCase();
      const newFilteredProperties = mockProperties.filter(property =>
        property.location.toLowerCase().includes(lowercasedSearchText) ||
        property.title.toLowerCase().includes(lowercasedSearchText) ||
        property.type.toLowerCase().includes(lowercasedSearchText) ||
        property.purchaseType.toLowerCase().includes(lowercasedSearchText)
      );
      setFilteredProperties(newFilteredProperties);
    }
  }, [searchText]); // Depend on searchText

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setShowSuggestions(true); // Show suggestions when typing
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // The filtering logic is already handled by useEffect, so no need to repeat here.
    setShowSuggestions(false); // Hide suggestions on explicit search
  };

  const handleLocationClick = (location) => {
    setSearchText(location);
    setShowSuggestions(false); // Hide suggestions after clicking a location
  };

  // Logic to determine which popular locations to show (you can make this more dynamic)
  const popularLocations = ['Mumbai', 'Pune', 'Delhi', 'Bangalore'];
  const displayedSuggestions = popularLocations.filter(location =>
    location.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className='bg-gray-50'>
      <Navbar/>
      <div className='py-36'>
        <h1 className=' text-5xl font-extrabold text-center text-black  mb-4'>Find Your Ideal Property</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
        <p className='text-gray-500 text-center text-xl'>Discover a curated collection of premium properties</p>
      </div>

      <div className="container mx-auto px-4"> {/* Added a container for better centering */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 max-w-3xl mx-auto"> {/* Centered the search bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <form className="relative" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  className="w-full pl-12 pr-20 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 placeholder-gray-400"
                  value={searchText}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Hide suggestions after a short delay to allow click on suggestions
                />
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </button>
                </div>
              </form>

              {/* Autocomplete/Suggestions Dropdown */}
              {showSuggestions && displayedSuggestions.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
                >
                  <div className="border-t border-gray-100 p-2">
                    <h3 className="text-xs font-medium text-gray-500 px-3 mb-2">Popular Locations</h3>
                    {displayedSuggestions.map((location) => (
                      <button
                        key={location}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md flex items-center gap-2 text-gray-700"
                        onClick={() => handleLocationClick(location)}
                      >
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 pb-12">
          {filteredProperties.length === 0 && searchText.trim() !== '' ? (
            <p className="text-center text-gray-600 col-span-full">
              No properties found for &quot;{searchText}&quot;. Try a different search.
            </p>
          ) : filteredProperties.length === 0 && searchText.trim() === '' ? (
            <p className="text-center text-gray-600 col-span-full">No properties available. Please check the data source.</p>
          ) : (
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.alt}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                      {property.type}
                    </span>
                    <span className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                      {property.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-y border-gray-100 mb-4">
                    <div className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{property.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 font-bold">
                      <IndianRupee className="h-5 w-5 mr-1" />
                      <span className="text-xl">{property.price}</span>
                    </div>
                    <div className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md flex items-center">
                      <Building className="w-3.5 h-3.5 mr-1" />
                      {property.purchaseType}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Properties;