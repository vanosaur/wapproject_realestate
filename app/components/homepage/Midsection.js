import React from 'react';
import {
    MessageCircle, 
    ShieldCheck,   
    Home,          
    Users,         
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
                    Why UrbHaven?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're committed to providing exceptional service and finding the perfect home for you with our innovative approach
                </p>
            </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*  Card 1 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <ShieldCheck className="w-12 h-12 text-blue-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Trusted Listings</h4>
                        <p className="text-gray-600 mb-4">
                            Every property is carefully inspected and fully verified to guarantee authenticity and peace of mind.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <MessageCircle className="w-12 h-12 text-green-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Support</h4>
                        <p className="text-gray-600 mb-4">
                            Instantly connect with expert agents through seamless real-time chat support for quick, reliable assistance.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <Users className="w-12 h-12 text-yellow-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Family Focused</h4>
                        <p className="text-gray-600 mb-4">
                            Explore homes thoughtfully designed to suit your family's unique needs, lifestyle, and future aspirations.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                        <Home className="w-12 h-12 text-purple-500 mb-4" />
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality Homes</h4>
                        <p className="text-gray-600 mb-4">
                            We uphold the highest standards, ensuring you access only the finest properties with unmatched value.
                        </p>
                        <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center gap-1.5 transition-colors">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                    </div>
                    
            </div>
        </section>
    );
};

export default Midsection;

