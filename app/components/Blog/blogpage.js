'use client';

import React from 'react'
import Link from 'next/link';
import Footer from '../homepage/Footer';
import Navbar from '../homepage/Navbar';
import { Clock, User ,ArrowDown} from 'lucide-react'; 
import FadeInWrapper from '../FadeInWrapper';
import Image from 'next/image';

function Blogpage() {
    const blogPosts = [
        {
            id: 1,
            title: "5 Tips for First-Time Home Buyers in Today's Market",
            description: "A home inspection is a crucial step in the buying process. Learn what to expect and how to prepare for it.",
            image: "/images/image copy 6.png",
            category: "Home Buying",
        },
        {
            id: 2,
            title: "Real Estate Investment Strategies for Beginners",
            description: "Learn about different real estate investment approaches that are suitable for beginners, from rental properties to REITs.",
            image: "/images/pexels-olivernt-3786322.jpg",
            category: "Investment",
        },
        {
            id: 3,
            title: "Understanding the Home Inspection Process",
            description: "A home inspection is a crucial step in the buying process. Learn what to expect and how to prepare for it.",
            image: "/images/pexels-talalih-4948973.jpg",
            category: "Home Buying",
        },
        {
            id: 4,
            title: "The Benefits of Living in a Smart Home",
            description: "Discover how smart home technology can enhance your living experience, from energy efficiency to security.",
            image: "/images/pexels-expect-best-79873-323780 (1).jpg",
            category: "Smart Home",
        },
        {
            id: 5,
            title: "Top 10 Neighborhoods to Buy a Home in 2023",
            description: "Explore the best neighborhoods for homebuyers in 2023, considering factors like affordability, amenities, and community.",
            image: "/images/pexels-pixabay-302769.jpg",
            category: "Neighborhoods",
        },
        {
            id: 6,
            title: "How to Stage Your Home for a Quick Sale",
            description: "Staging your home can significantly impact its sale. Learn effective staging tips to attract potential buyers.",
            image: "/images/pexels-binyaminmellish-106399.jpg",
            category: "Home Selling",
        },
        ]
  return (
    <div>
      <Navbar />

      <FadeInWrapper>
      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-5xl font-extrabold mb-4 text-black">Our Blog Posts</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-center text-xl">
            Your Guide to Smarter Property Decisions
            </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full h-100 relative">
          <Image
            src="/images/image copy 10.png" 
            alt="House"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Right: Content */}
        <div className="p-6 flex flex-col justify-between md:w-1/2">
          {/* Tag + time */}
          <div className="flex items-center space-x-4 mb-2">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Market Trends
            </span>
            <span className="text-sm text-gray-500">5 min read</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">
            2024 Real Estate Market Predictions: What Buyers Need to Know
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Discover the key trends shaping the real estate market this year and how they impact your
            buying decisions. From interest rates to housing inventory, we break down everything you
            need to know.
          </p>

          {/* Author */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/real-estate-flat-concept-with-man-buying-house-from-broker-vector-illustration_1284-81414.jpg" 
                alt="Author"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-600">Sarah Johnson</p>
                <p className="text-gray-500">March 15, 2024</p>
              </div>
            </div>

            <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
              Read More <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
          
        <div className="text-center mt-40">
          <h2 className="text-3xl font-extrabold mb-4 text-black">Latest Articles</h2>
            <p className="text-gray-500 text-center text-xl">
            Explore our latest insights and tips on real estate
            </p>
        </div>

        {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-68 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.category}</span>
                <Link href="" className="text-blue-600 hover:underline">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

    <div className="text-center bg-blue-600 text-white px-6 py-16">
          <h2 className="text-3xl font-extrabold mb-4">Stay Updated</h2>
            <p className="text-center text-xl">
            Get the latest news and insights delivered to your inbox weekly
            </p>
          <div className='flex justify-center items-center mt-6'>
          <input type='email' placeholder='Enter your email' className='bg-white text-gray-400 rounded-sm text-left text-md p-2'/>
          <button className='bg-white text-blue-600 px-4 py-2 rounded-sm ml-2 hover:bg-gray-100'>Subscribe</button>
          </div>
        </div>
    <Footer />
    </FadeInWrapper>
    </div>
    )  
    }

export default Blogpage;
