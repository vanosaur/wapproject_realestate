import React from 'react'
import {
    MessageCircle, // Chat icon
    ShieldCheck,   // Verified icon
    Home,          // Home icon / Quality
    Users,         // Users / Family
    ArrowRight,
} from 'lucide-react';

function Howitworks() {
  return (
    <div className=' mx-auto px-4 sm:py-6 lg:px-8 bg-gray-50 w-full'>
       <div className="text-center mb-20 opacity-100 transform-none">
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase">
                Simple Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Finding your perfect property is easy with our simple three-step process
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gray-100">
            <div className="absolute left-0 right-0 top-0 h-full">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 bg-[length:200%] animate-[bg-pos-x_4s_linear_infinite]"></div>
            </div>
        </div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Find Your Property</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Use our AI-powered search to discover properties matching your exact needs. Filter by location, price, amenities and more.</p>
            <div className="mt-4 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
            </svg>
            </div>
        </div>

        {/* Arrow between Step 1 and 2 */}
        <div className="hidden md:block absolute left-[31.3333%] top-[9%] translate-x-[5.4px]">
            <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
            </svg>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
            </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Visit</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Book an in-person viewing or take a virtual 3D tour of your selected properties at your convenience.</p>
            <div className="mt-4 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
            </svg>
            </div>
        </div>

        {/* Arrow between Step 2 and 3 */}
        <div className="hidden md:block absolute left-[64.6667%] top-[9%] translate-x-[5.4px]">
            <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
            </svg>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="m9 15 2 2 4-4" />
            </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Close the Deal</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Complete paperwork digitally, get expert guidance from our agents, and secure your dream property with ease.</p>
            <div className="mt-4 p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
            </svg>
            </div>
        </div>
        </div>
        <div className="flex justify-center mt-12">
                    <button className="bg-blue-600 text-white items-center px-6 py-3 rounded-full text-sm  flex gap-2">
                        Browse Our Properties
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
      
    </div>
  )
}

export default Howitworks
