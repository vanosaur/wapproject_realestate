// components/About/aboutpage.js
import React from 'react';
import Link from 'next/link';
import { Target, Eye ,Shield, CircleCheckBig, Clock, Linkedin, Twitter, Instagram , Home, Globe, Headphones, List } from 'lucide-react';
import Footer from '../homepage/Footer';

function TestPage() {
  const features = [
    {
      title: "Verified Properties",
      description: "Every property is thoroughly verified for quality and security.",
      icon: Home,
    },
    {
      title: "User-Friendly Platform",
      description: "Intuitive navigation and seamless property management.",
      icon: Globe,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries.",
      icon: Headphones,
    },
    {
      title: "Comprehensive Listings",
      description: "Wide range of properties to match every need and budget.",
      icon: List,
    },
  ];

  return (
    <div>
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50"> 
        <div className="flex items-center space-x-2">
          <span className="text-white-600 text-xl font-bold">UrbHaven</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-lg font-medium text-white-700">
          <Link href="/">Home</Link>
          <Link href="/Properties">Properties</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/Contact">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">Get started</button>
        </div>
      </nav>
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 opacity-60">
       
        <img src='/images/image copy 6.png'/>
      
        
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
          Building Your Future,<br />One Home at a Time
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed font-light">
          We're more than just a property platform - we're your partner in finding the perfect place to call home.
        </p>
        <div className="w-24 h-1 bg-white mx-auto mt-8" />
      </div>
    </div>

    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Purpose</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide a transparent and efficient property rental experience for all users. 
              We strive to make the process of finding your perfect home as seamless as possible, 
              while maintaining the highest standards of service and integrity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empowering millions of users to find their perfect home with ease and trust. 
              We envision a future where property search is not just about finding a place to live, 
              but about discovering a community to belong to.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Values</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            These core values guide everything we do at BuildEstate
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Trust</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We verify all property owners and renters to ensure a safe and reliable experience for everyone.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <CircleCheckBig className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Transparency</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Clear and honest property listings with accurate information and no hidden fees.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Efficiency</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Streamlined property search and listing process to save you time and effort.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Meet Our Team</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The passionate individuals behind BuildEstate's success
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Member 1 */}
            <div className="bg-blue-100 p-4 md:p-6 rounded-xl shadow-sm w-full max-w-sm mx-auto">
              <div className="flex flex-col items-center">
                <img
                  src="/images/WhatsApp Image 2025-03-12 at 19.33.14.jpeg"
                  alt="Nakul Lagad"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-3 md:mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold text-center mb-1 text-black">Vani Rudra</h3>
                <p className="text-blue-600 text-xs md:text-sm text-center mb-2 md:mb-3">
                  Founder &amp; CEO
                </p>
                <p className="text-gray-600 text-sm md:text-base text-center mb-3 md:mb-4">
                  With 15+ years in real estate, Vani leads our vision of transforming property search.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

          {/* Member 2 */}
            <div className="bg-blue-100 p-4 md:p-6 rounded-xl shadow-sm w-full max-w-sm mx-auto">
              <div className="flex flex-col items-center">
                <img
                  src="/images/Photo on 12-03-25 at 5.27 PM.jpg"
                  alt="Aayush Vaghela"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-3 md:mb-4 object-cover"
                />
                <h3 className="text-lg md:text-xl font-semibold text-center mb-1 text-black">Bulbul Agarwalla</h3>
                <p className="text-blue-600 text-xs md:text-sm text-center mb-2 md:mb-3">
                  Chief Technology Officer
                </p>
                <p className="text-gray-600 text-sm md:text-base text-center mb-3 md:mb-4">
                  Tech innovator driving our platform's cutting-edge solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

        </div>

      </div>
    </section>
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Why Choose BuildEstate?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference with our comprehensive property solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Footer />

      </div>
  );
}

export default TestPage;
