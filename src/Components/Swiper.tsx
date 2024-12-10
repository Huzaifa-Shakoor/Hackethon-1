"use client"
import React, { useState } from 'react';

const GalleryWithContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
    'chair.jpg',
  ];

  const totalImages = images.length;

  // Go to the next image (slide)
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Go to the previous image (slide)
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <div className="flex p-8 space-x-8 bg-gray-100">
      {/* Left Side - Heading, Content, and Button */}
      <div className="w-1/3 p-7 py-auto my-auto">
        <h2 className="text-2xl font-bold mb-4">Heading for Left Section</h2>
        <p className="mb-4">
          This is some content describing the image gallery on the right side.
        </p>
        <button className="bg-[#faa83e] text-white py-2 px-4 rounded hover:bg-[#ff9000] transition duration-300">
          Explore More
        </button>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="w-2/3 flex flex-col items-center justify-center space-y-4 relative">
        {/* Image Gallery */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 260}px)`, // Move left by 260px per image
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[250px] h-[350px] mx-2 transition-transform duration-500 ease-in-out"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &lt;
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextImage}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryWithContent;
