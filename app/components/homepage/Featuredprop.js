'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Heart, MapPin, BedDouble, Bath, Maximize, IndianRupee, Building,ArrowRight } from 'lucide-react';


export default function FeaturedProperties() {
    const properties = [
        {
          image: '/images/image copy 7.png',
          alt: 'Beachfront Villa in Mumbai',
          type: 'Villa',
          status: 'For buy',
          title: 'Beachfront Villa in Mumbai',
          location: 'Candolim Beach, Mumbai',
          beds: 4,
          baths: 4,
          sqft: '4500',
          price: '2,50,000',
        },
        {
          image: '/images/image copy 5.png',
          alt: 'Cozy House in Pune',
          type: 'House',
          status: 'For buy',
          title: 'Cozy House in Pune',
          location: 'Old Villa, Pune',
          beds: 3,
          baths: 3,
          sqft: '3500',
          price: '15,00,000',
        },
        {
          image: '/images/image copy 8.png',
          alt: 'Luxury Villa in Delhi',
          type: 'Villa',
          status: 'For buy',
          title: 'Luxury Villa in Delhi',
          location: 'South, Delhi',
          beds: 5,
          baths: 5,
          sqft: '7000',
          price: '3,00,00,000',
        },
        {
          image: '/images/pexels-expect-best-79873-323780 (1).jpg',
          alt: 'Seaside Apartment in Bangalore',
          type: 'Apartment',
          status: 'For buy',
          title: 'Seaside Apartment in Bangalore',
          location: 'Bangalore',
          beds: 4,
          baths: 4,
          sqft: '5000',
          price: '22,00,000',
        },
        {
          image: '/images/image copy 10.png',
          alt: 'Luxury Villa in Ahmedabad',
          type: 'Villa',
          status: 'For buy',
          title: 'Luxury Villa in Ahmedabad',
          location: 'Satellite, Ahmedabad',
          beds: 4,
          baths: 4,
          sqft: '3997',
          price: '2,00,00,000',
        },
        {
          image: '/images/image copy 9.png',
          alt: 'Villa in Surat',
          type: 'Villa',
          status: 'For rent',
          title: 'Villa in Surat',
          location: 'Vesu, Surat',
          beds: 4,
          baths: 4,
          sqft: '3700',
          price: '18,000',
        },
      ];
  return (
    <section className="bg-gray-50 pb-18">
      <div className="max-w-6xl mx-auto px-4 align">
        <div className='mb-8 items-center text-center'>
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase ">
                    Our Progress
                </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4 ">Featured Properties</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Discover Luxury Living Across India</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
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
                      Purchase
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-12">
                    <button onClick={() => window.location.href = '/properties'}  className="bg-blue-600 text-white items-center px-6 py-3 rounded-full text-sm  flex gap-2 hover:bg-blue-700 transition-colors duration-300">
                        Browse Our Properties
                        <ArrowRight className="w-4 h-4" />
                    </button>
        </div>
    </section>
  );
}

