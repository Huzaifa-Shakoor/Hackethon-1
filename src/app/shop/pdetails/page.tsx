"use client"; // Add this line at the top

import { useState } from "react";

export default function ProductDetails() {
  // State to manage selected image, active tab, selected color, size, and quantity
  const [selectedImage, setSelectedImage] = useState("../living.jpg");
  const [selectedColor, setSelectedColor] = useState("gray");  // Default color is gray
  const [quantity, setQuantity] = useState(1);  // Default quantity is 1
  const [selectedSize, setSelectedSize] = useState("XL");  // Default size is XL
  const [activeTab, setActiveTab] = useState("description"); // Active tab

  // List of product images, colors, and sizes
  const images = [
    "../living.jpg",
    "../living.jpg",
    "../living.jpg",
    "../living.jpg",
  ];

  const colors = ["gray", "blue", "green", "black"];
  const sizes = ["XL", "XXL", "XXXL"];  // Available sizes

  // Handle Quantity Increment/Decrement
  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      {/* Top Section: Product Image, Name, Price, etc. */}
      <div className="lg:grid lg:grid-cols-2 gap-8">
        {/* Left Section: Product Images */}
        <div className="flex items-center px-3 space-y-4">
          {/* Small Image Thumbnails (Vertical) */}
          <div className="flex flex-col space-y-4 mr-4"> {/* Added margin-right */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className={`w-16 h-16 cursor-pointer object-cover ${
                  selectedImage === img ? "border-[#faa83e]" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Large Image: Show Selected Image */}
          <div className="mt-4">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-96 object-contain"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-6">
          {/* Product Name */}
          <h1 className="text-2xl font-semibold mt-4 lg:mt-0">Asgaard Sofa</h1>

          {/* Price */}
          <p className="text-xl font-semibold text-gray-800 mt-2">₨ 250,000</p>

          {/* Star Rating */}
          <div className="flex items-center space-x-1 mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.197c.969 0 1.371 1.24.588 1.81l-3.398 2.47a1 1 0 00-.364 1.118l1.286 3.951c.3.92-.755 1.688-1.538 1.118l-3.398-2.47a1 1 0 00-1.176 0l-3.398 2.47c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.119L2.83 9.377c-.783-.57-.38-1.81.588-1.81h4.196a1 1 0 00.951-.69l1.286-3.95z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500">(12 Reviews)</span>
          </div>

          {/* Small Description */}
          <p className="text-sm text-gray-600 mt-2">
            A comfortable and stylish sofa that fits perfectly into your living room. Available in multiple colors and sizes.
          </p>

          {/* Size Selector */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Select Size</h3>
            <div className="flex space-x-4 mt-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                    selectedSize === size
                      ? "bg-[#faa83e] text-white border-[#faa83e]"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-4 py-2 bg-gray-200 rounded-full"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-4 py-2 bg-gray-200 rounded-full"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex space-x-4">
            <button className="px-6 py-3 bg-[#faa83e] text-white rounded-lg hover:bg-[#f88f32]">
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400">
              Compare
            </button>
          </div>

          {/* Color Switcher */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Select Color</h3>
            <div className="flex space-x-4 mt-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 ${
                    selectedColor === color
                      ? `border-${color}-500`
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="mt-12">
        {/* Tab Navigation */}
        <div className="flex space-x-8 justify-center ">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 ${activeTab === "description" ? "bg-[#faa83e] text-white" : "text-gray-700"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("additional")}
            className={`py-2 px-4 ${activeTab === "additional" ? "bg-[#faa83e] text-white" : "text-gray-700"}`}
          >
            Additional Information
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 ${activeTab === "reviews" ? "bg-[#faa83e] text-white" : "text-gray-700"}`}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
  <div className="mt-4">
    <h3 className="text-lg font-semibold">Product Description</h3>
    <p className="text-gray-600">
      Embracing the modern, minimalist style, the Asgaard sofa combines sleek lines with cozy comfort. 
      This elegant piece features a durable frame and soft cushions that provide long-lasting comfort and style.
    </p>

    {/* Images displayed side by side */}
    <div className="mt-6 flex space-x-4">
      {/* First Image */}
      <img
        src="../living.jpg"  // Replace with your image path
        alt="Living Room Setup"
        className="w-1/2 h-auto object-cover rounded-lg"
      />

      {/* Second Image */}
      <img
        src="../living.jpg"  // Replace with your image path
        alt="Close-up of Sofa"
        className="w-1/2 h-auto object-cover rounded-lg"
      />
    </div>
  </div>
)}

        {activeTab === "additional" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Material: Fabric</li>
              <li>Dimensions: 90" x 40" x 30"</li>
              <li>Warranty: 5 years</li>
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
