"use client"
import React from 'react';

const Banner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url("/banner.jpg")', // Use the correct path for your image
        backgroundPosition: 'center center',
        backgroundSize: 'cover', // Ensures the image fully covers the background
      }}
    >
      {/* Wrapper div with dynamic height based on screen size */}
      <div className="absolute inset-0 flex justify-end items-center px-6 sm:px-8 md:px-10 lg:px-16">
        <div className="bg-white p-6 sm:p-8 md:p-6 lg:p-10 w-full sm:w-80 md:w-[70%] lg:w-[500px] h-auto sm:h-72 md:h-auto flex flex-col justify-center items-start text-black rounded-lg shadow-2xl mt-8 mb-8">
          <h5 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-left text-black">
            New Arrival
          </h5>
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-left" style={{ color: '#faa83e' }}>
            Discover Our New Collections!
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-left">
            Get the best deals on your favorite products. Don't miss out on this limited-time offer!
          </p>
          <button className="bg-[#faa83e] text-white px-8 py-3 text-lg hover:bg-orange-600 focus:outline-none transition duration-300 text-left">
            Buy Now
          </button>
        </div>
      </div>

      {/* Height adjustments for different screen sizes */}
      <style jsx>{`
        .relative {
          height: 100vh; /* Full viewport height on large screens */
        }

        @media (max-width: 1024px) {
          .relative {
            height: 80vh; /* Slightly smaller on tablets */
          }
        }

        @media (max-width: 768px) {
          .relative {
            height: 70vh; /* Smaller on mobile screens */
          }
        }

        @media (max-width: 480px) {
          .relative {
            height: 50vh; /* Even smaller on very small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
