import React from 'react';
import {
    MessageCircle, // Chat icon
    ShieldCheck,   // Verified icon
    Home,          // Home icon / Quality
    Users,         // Users / Family
    ArrowRight,
} from 'lucide-react';

const Midsection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="text-center mb-12">
                <div className='bg-white rounded-xl shadow-lg p-10 m-10'>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Trusted by 200+ companies</h1>
                <div className=" flex items-center text-center transition-shadow justify-around my-12">
                        <img src="/images/image copy 2.png" alt="Companies" className="h-10 object-contain" />
                        <img src="/images/image copy 3.png" alt="Companies" className="h-10 object-contain" />
                        <img src="/images/image.png" alt="Companies" className="h-10 object-contain" />
                        <img src="/images/image copy.png" alt="Companies" className="h-10 object-contain" />
                        <img src="/images/image copy 4.png" alt="Companies" className="h-9 object-contain" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 my-30">
            <div className="text-center mb-16">
                <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase">
                    Our Strengths
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                    Why Choose Us
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're committed to providing exceptional service and finding the perfect home for you with our innovative approach
                </p>
            </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Direct Communication Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Direct Communication</h4>
                        <p className="text-gray-600 mb-4">
                            Get instant responses from our experienced agents through our real-time chat
                            system.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Verified Properties Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Verified Properties</h4>
                        <p className="text-gray-600 mb-4">
                            Every property is thoroughly inspected and verified to ensure quality and
                            authenticity.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Quality First Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <Home className="w-12 h-12 text-yellow-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h4>
                        <p className="text-gray-600 mb-4">
                            We maintain high standards for all properties, ensuring you get the best
                            value.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Family Focused Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <Users className="w-12 h-12 text-purple-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Family Focused</h4>
                        <p className="text-gray-600 mb-4">
                            Find homes that perfectly match your family needs and lifestyle preferences.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    </div>
                    <div className="flex justify-center mt-12">
                    <button className="bg-blue-600 text-white items-center px-6 py-3 rounded-full text-sm  flex gap-2">
                        Browse Our Properties
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Midsection;

