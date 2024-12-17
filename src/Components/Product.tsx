"use client";

import React, { useState } from "react";
import { FaShareAlt, FaHeart, FaBalanceScale, FaShare } from "react-icons/fa";

const Productour = () => {
  // State for the cart sidebar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const products = [
    { id: 1, image: "chair.jpg", name: "Product 1", price: "$100", cutPrice: "$150" },
    { id: 2, image: "chair.jpg", name: "Product 2", price: "$200", cutPrice: "$250" },
    { id: 3, image: "chair.jpg", name: "Product 3", price: "$300", cutPrice: "$350" },
    { id: 4, image: "chair.jpg", name: "Product 4", price: "$400", cutPrice: "$450" },
    { id: 5, image: "chair.jpg", name: "Product 5", price: "$500", cutPrice: "$550" },
    { id: 6, image: "chair.jpg", name: "Product 6", price: "$600", cutPrice: "$650" },
    { id: 7, image: "chair.jpg", name: "Product 7", price: "$700", cutPrice: "$750" },
    { id: 8, image: "chair.jpg", name: "Product 8", price: "$800", cutPrice: "$850" },
    { id: 9, image: "chair.jpg", name: "Product 1", price: "$100", cutPrice: "$150" },
    { id: 10, image: "chair.jpg", name: "Product 2", price: "$200", cutPrice: "$250" },
    { id: 11, image: "chair.jpg", name: "Product 3", price: "$300", cutPrice: "$350" },
    { id: 12, image: "chair.jpg", name: "Product 4", price: "$400", cutPrice: "$450" },
    { id: 13, image: "chair.jpg", name: "Product 5", price: "$500", cutPrice: "$550" },
    { id: 14, image: "chair.jpg", name: "Product 6", price: "$600", cutPrice: "$650" },
    { id: 15, image: "chair.jpg", name: "Product 7", price: "$700", cutPrice: "$750" },
    { id: 16, image: "chair.jpg", name: "Product 8", price: "$800", cutPrice: "$850" },
  ];

  return (
    <section className="py-10 sm:mx-10 lg:mx-20">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      {/* Product Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white p-4 rounded-lg overflow-hidden group">
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center opacity-0 group-hover:opacity-100 m-4 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <button
                className="bg-white px-6 py-2 rounded-md self-center"
                onClick={toggleSidebar}
              >
                Add to Cart
              </button>

              {/* Share, Like, Compare Section */}
              <div className="mt-4 mx-3 text-center text-white">
                <div className="flex justify-center gap-4">
                  {/* Share Icon */}
                  <div className="flex items-center gap-1">
                    <FaShare className="text-lg" />
                    <span className="text-sm">Share</span>
                  </div>

                  {/* Like Icon */}
                  <div className="flex items-center gap-1">
                    <FaHeart className="text-lg hover:text-red-500 cursor-pointer transition-all" />
                    <span className="text-sm">Like</span>
                  </div>

                  {/* Compare Icon */}
                  <div className="flex items-center gap-1">
                    <FaBalanceScale className="text-lg hover:text-yellow-500 cursor-pointer transition-all" />
                    <span className="text-sm">Compare</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="px-4 bg-gray-100 p-2 rounded-b-lg">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-green-500">{product.price}</span>
                <span className="text-sm line-through text-gray-500">{product.cutPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center space-x-2 mt-6">
        {/* Pagination Button */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className="bg-transparent border-2 border-[#faa83e] text-[#faa83e] px-4 py-2 rounded-md hover:bg-[#faa83e] hover:text-white transition duration-300"
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button className="bg-transparent border-2 border-[#faa83e] text-[#faa83e] px-4 py-2 rounded-md hover:bg-[#faa83e] hover:text-white transition duration-300">
          Next
        </button>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-gray-900 shadow-xl w-80 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Cart Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <img src="chair.jpg" alt="Product" className="w-12 h-12 rounded-md" />
              <div>
                <p className="font-bold">Product 1</p>
                <p className="text-gray-500">Quantity: 1</p>
              </div>
              <p>$100.00</p>
            </div>
            <div className="flex items-center justify-between">
              <img src="chair.jpg" alt="Product" className="w-12 h-12 rounded-md" />
              <div>
                <p className="font-bold">Product 2</p>
                <p className="text-gray-500">Quantity: 2</p>
              </div>
              <p>$200.00</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="bg-[#faa83e] w-full py-3 mt-6 rounded-md font-bold hover:bg-[#f7922e]">
            Checkout
          </button>
        </div>
      </div>

      {/* Full-page Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </section>
  );
};

export default Productour;
