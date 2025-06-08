"use client";

import React, { useState } from 'react'
import Navbar from '../homepage/Navbar'
import { Mail, MapPin, Phone } from 'lucide-react';
import Footer from '../homepage/Footer';

function contactpage() {
  return (
    <div>
        <Navbar/>

        <div className="flex flex-col items-center justify-center py-35 bg-blue-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
            <p className="text-lg mb-8 text-black">We'd love to hear from you!</p>
            <form
            action="https://formspree.io/f/mjkwwjzr" 
            method="POST"
            className="w-full max-w-md"
            >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 mb-4 border rounded text-gray-500"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 mb-4 border rounded text-gray-500"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 mb-4 border rounded text-gray-500"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Send Message
            </button>
            </form>
        </div>
        </div>


        <section className="bg-white py-26 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-lg text-center md:text-left">
                <p className="text-green-600 font-medium mb-2">How can we help you?</p>
                <h2 className="text-3xl font-bold mb-4 text-black">Contact us</h2>
                <p className="text-gray-700 mb-6">
                We're here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
                <div className="flex items-start mb-3 gap-3">
                <MapPin className="mt-1 text-gray-800" />
                <span className='text-black'>Unit 503, Trade Tower, Magarpatta City, Hadapsar, Pune</span>
                </div>
                <div className="flex items-start mb-3 gap-3">
                <Phone className="mt-1 text-gray-800" />
                <span className='text-black'>+1 (234) 567-890</span>
                </div>
                <div className="flex items-start gap-3">
                <Mail className="mt-1 text-gray-800" />
                <a href="mailto:mail@sleeknote.com" className="text-blue-600 underline">
                    mail@urbhavennow.com
                </a>
                </div>
            </div>

            <div className="mt-10 md:mt-0 max-w-xs">
                <img
                src="/images/8690678_3969587.jpg"
                alt="Contact illustration"
                className="w-full"
                />
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default contactpage
