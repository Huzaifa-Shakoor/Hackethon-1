"use client"
import React, { useState } from "react";

const CartSidebar = () => {
  // State to manage the visibility of the sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Button to open/close the cart */}
      <button
        onClick={toggleSidebar}
        className="bg-[#faa83e] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[#f7922e]"
      >
        Open Cart
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white shadow-xl w-80 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Cart Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

          {/* Example Cart Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Product 1</p>
                <p className="text-gray-400">Quantity: 1</p>
              </div>
              <p>$25.00</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Product 2</p>
                <p className="text-gray-400">Quantity: 2</p>
              </div>
              <p>$50.00</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="bg-[#faa83e] w-full py-3 mt-6 rounded-md font-bold hover:bg-[#f7922e]">
            Checkout
          </button>
        </div>
      </div>

      {/* Overlay (optional for better UX) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
        ></div>
      )}
    </div>
  );
};

export default CartSidebar;
