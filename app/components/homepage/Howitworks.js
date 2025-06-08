import React from 'react'
import {   
    Calendar,     
    ArrowRight,
    Search,
    FileCheck,
    
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
        

        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Search className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Find Your Property</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Use our AI-powered search to discover properties matching your exact needs. Filter by location, price, amenities and more.</p>
            
        </div>

        {/* Arrow between Step 1 and 2 */}
        <div className="hidden md:block absolute left-[31.3333%] top-[9%] translate-x-[5.4px]">
            <ArrowRight className="h-16 w-16 text-blue-600"/>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Visit</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Book an in-person viewing or take a virtual 3D tour of your selected properties at your convenience.</p>
            
        </div>

        {/* Arrow between Step 2 and 3 */}
        <div className="hidden md:block absolute left-[64.6667%] top-[9%] translate-x-[5.4px]">
            <ArrowRight className="h-16 w-16 text-blue-600"/>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FileCheck className="h-10 w-10 text-blue-600 group-hover:text-white relative z-10 "/>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Close the Deal</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">Complete paperwork digitally, get expert guidance from our agents, and secure your dream property with ease.</p>
            
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
