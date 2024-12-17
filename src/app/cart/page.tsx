"use client";

import { useState } from "react";

export default function CartPage() {
  // Dummy product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 50000,
      quantity: 1,
      image: "../living.jpg",
    },
    {
      id: 2,
      name: "Nordic Table",
      price: 25000,
      quantity: 1,
      image: "../living.jpg",
    },
  ]);

  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      {/* Section 1: Background Image with Overlay */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('../living.jpg')", // Replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold">Cart</h1>
      </div>

      {/* Section 2: Cart Table and Checkout Summary */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Quantity</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  {/* Product Info */}
                  <td className="py-4 px-4 flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </td>

                  {/* Quantity */}
                  <td className="py-4 px-4">
                    <span>{product.quantity}</span>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4">₨ {product.price.toLocaleString()}</td>

                  {/* Total */}
                  <td className="py-4 px-4">
                    ₨ {(product.price * product.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <span>₨ 500</span> {/* Fixed shipping cost */}
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₨ {(totalPrice + 500).toLocaleString()}</span>
          </div>
          <button className="mt-6 w-full bg-[#faa83e] text-white py-3 rounded-lg hover:bg-[#e09433]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
