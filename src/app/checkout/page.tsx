"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 50000,
      quantity: 1,
    },
    {
      id: 2,
      name: "Nordic Table",
      price: 25000,
      quantity: 1,
    },
  ]);

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      {/* Overlay Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('../living.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold">Checkout</h1>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
  {/* First Name */}
  <div>
    <label className="block text-gray-700 mb-1">First Name</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  {/* Last Name */}
  <div>
    <label className="block text-gray-700 mb-1">Last Name</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  {/* Country */}
  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Country</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  {/* Street Address */}
  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Street Address</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  {/* Additional Fields */}
  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Postal Code</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Phone</label>
    <input
      type="text"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Email Address</label>
    <input
      type="email"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-gray-700 mb-1">Additional Information</label>
    <textarea
      rows="4"
      className="w-full border border-black rounded-lg p-2 px-4 mx-2 focus:outline-none"
      placeholder="Notes about your order, e.g., special delivery instructions."
    ></textarea>
  </div>
</form>

        </div>

        {/* Right Side: Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₨ {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>₨ 500</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>₨ {(totalPrice + 500).toLocaleString()}</span>
          </div>

          {/* Policies Checkbox */}
          <div className="mb-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-[#faa83e]" />
              <span className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-[#faa83e]">
                  terms and conditions
                </a>
              </span>
            </label>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-[#faa83e] text-white py-3 rounded-lg hover:bg-[#e09433]">
            Place Order
          </button>
        </div>
      </div>
      <div className="bg-gray-50 py-10 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Warranty */}
          <div className="flex items-center space-x-4">
            <img
              src="trophy.png"
              alt="Warranty"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">High Quality</h3>
              <p className="text-gray-600 text-sm">1-year warranty for every product.</p>
            </div>
          </div>

          {/* Card 2: Trusted Company */}
          <div className="flex items-center space-x-4">
            <img
              src="abc.png"
              alt="Company"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">Warrenty Protection</h3>
              <p className="text-gray-600 text-sm">Delivering quality for over 20 years.</p>
            </div>
          </div>

          {/* Card 3: 24/7 Service */}
          <div className="flex items-center space-x-4">
            <img
              src="box.png"
              alt="Service"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Customer support around the clock.</p>
            </div>
          </div>

          {/* Card 4: Satisfaction Guarantee */}
          <div className="flex items-center space-x-4">
            <img
              src="support.png"
              alt="Satisfaction"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">24/7 Service</h3>
              <p className="text-gray-600 text-sm">We ensure 100% satisfaction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
