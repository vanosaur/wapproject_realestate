'use client';

import React from 'react'
import Link from 'next/link';
import Footer from '../homepage/Footer';
import Navbar from '../homepage/Navbar';
import { Clock, User } from 'lucide-react'; 

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

      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-4xl font-bold mb-4 text-black">Our Blog Posts</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className='relative'>
            <img src="/images/breno-assis-r3WAWU5Fi5Q-unsplash.jpg" alt="Vision" className="w-full h-[750] rounded-2xl mb-6" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 text-white px-4 justify-center text-right items-end flex flex-col">
                <p className="text-5xl font-bold mb-8 leading-tight w-180 p-15">
                Buying a home is one of the biggest decisions you'll ever make.
                 From setting a budget to choosing the right neighborhood,
                 here's everything you need to know to make the right choice.
                </p>
            </div>
        
        </div>
          

        {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-40">

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
    <Footer />

    </div>
    )  
    }

export default Blogpage;
