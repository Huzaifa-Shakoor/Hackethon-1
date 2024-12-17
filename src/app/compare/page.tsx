import React from "react";

const ProductComparison = () => {
  return (
    <div>
      {/* Overlay Section */}
      <div className="relative bg-gray-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Product Comparison</h1>
        <p className="text-lg mt-2">Compare your favorite products side by side</p>
      </div>

      {/* First Section: Comparison Header */}
      <div className="grid grid-cols-4 gap-4 py-12 px-6 md:px-16 bg-gray-100 items-center">
        {/* Column 1: Link to More Products */}
        <div className="text-center">
          <a
            href="#"
            className="text-[#faa83e] underline hover:text-[#e09436] font-semibold"
          >
            Browse More Products
          </a>
        </div>

        {/* Column 2: Product 1 Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 1"
            className="h-32 w-32 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Column 3: Product 2 Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 2"
            className="h-32 w-32 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Column 4: Add Product Button */}
        <div className="text-center">
          <button className="bg-[#faa83e] text-white py-2 px-6 rounded-lg hover:bg-[#e09436]">
            + Add a Product
          </button>
        </div>
      </div>

      {/* Second Section: Comparison Details */}

      {/* Third Section: Product Comparison with Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 md:px-16 bg-white">
        {/* Column 1: Specification Titles */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">General</h3>
          <p className="font-medium text-lg">Model Number</p>
          <p className="font-medium text-lg">Material</p>
          <p className="font-medium text-lg">Finish Type</p>
          <p className="font-medium text-lg">Adjustable Headrest</p>
          <p className="font-medium text-lg">Maximum Load</p>
          <p className="font-medium text-lg">Original Manufacturer</p>

          <h3 className="text-xl font-semibold mt-8">Dimensions</h3>
          <p className="font-medium text-lg">Width</p>
          <p className="font-medium text-lg">Depth</p>
          <p className="font-medium text-lg">Height</p>
          <p className="font-medium text-lg">Seat Height</p>
          <p className="font-medium text-lg">Leg Height</p>

          <h3 className="text-xl font-semibold mt-8">Warranty</h3>
          <p className="font-medium text-lg">Warranty Summary</p>
          <p className="font-medium text-lg">Warranty Type</p>
          <p className="font-medium text-lg">Covered in Warranty</p>
        </div>

        {/* Column 2: Product 1 Details */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Product 1</h3>
          <p className="text-gray-700 mb-2"><strong>Model Number:</strong> TCRS/AS2B5595</p>
          <p className="text-gray-700 mb-2"><strong>Material:</strong> Solid Wood</p>
          <p className="text-gray-700 mb-2"><strong>Finish Type:</strong> Bright Grey & Lion</p>
          <p className="text-gray-700 mb-2"><strong>Adjustable Headrest:</strong> No</p>
          <p className="text-gray-700 mb-2"><strong>Maximum Load:</strong> 200 kg</p>
          <p className="text-gray-700 mb-2"><strong>Original Manufacturer:</strong> India</p>

          <h3 className="text-xl font-semibold mt-8">Dimensions</h3>
          <p className="text-gray-700 mb-2"><strong>Width:</strong> 263.13 cm</p>
          <p className="text-gray-700 mb-2"><strong>Depth:</strong> 97.6 cm</p>
          <p className="text-gray-700 mb-2"><strong>Height:</strong> 101.8 cm</p>
          <p className="text-gray-700 mb-2"><strong>Seat Height:</strong> 48.5 cm</p>
          <p className="text-gray-700 mb-2"><strong>Leg Height:</strong> 54.0 cm</p>

          <h3 className="text-xl font-semibold mt-8">Warranty</h3>
          <p className="text-gray-700 mb-2"><strong>Warranty Summary:</strong> 1 Year Manufacturing Warranty</p>
          <p className="text-gray-700 mb-2"><strong>Warranty Type:</strong> Manufacturing Defects</p>
          <p className="text-gray-700 mb-2"><strong>Covered in Warranty:</strong> Manufacturing Defects</p>

          {/* Add to Cart Button */}
          <div className="text-center mt-6">
            <button className="bg-[#faa83e] text-white py-2 px-6 rounded-lg hover:bg-[#e09436]">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Column 3: Product 2 Details */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Product 2</h3>
          <p className="text-gray-700 mb-2"><strong>Model Number:</strong> DFTS/AS2B3555</p>
          <p className="text-gray-700 mb-2"><strong>Material:</strong> Solid Wood</p>
          <p className="text-gray-700 mb-2"><strong>Finish Type:</strong> Bright Grey & Lion</p>
          <p className="text-gray-700 mb-2"><strong>Adjustable Headrest:</strong> No</p>
          <p className="text-gray-700 mb-2"><strong>Maximum Load:</strong> 300 kg</p>
          <p className="text-gray-700 mb-2"><strong>Original Manufacturer:</strong> India</p>

          <h3 className="text-xl font-semibold mt-8">Dimensions</h3>
          <p className="text-gray-700 mb-2"><strong>Width:</strong> 263.13 cm</p>
          <p className="text-gray-700 mb-2"><strong>Depth:</strong> 97.6 cm</p>
          <p className="text-gray-700 mb-2"><strong>Height:</strong> 101.8 cm</p>
          <p className="text-gray-700 mb-2"><strong>Seat Height:</strong> 48.5 cm</p>
          <p className="text-gray-700 mb-2"><strong>Leg Height:</strong> 54.0 cm</p>

          <h3 className="text-xl font-semibold mt-8">Warranty</h3>
          <p className="text-gray-700 mb-2"><strong>Warranty Summary:</strong> 12 Year Manufacturing Warranty</p>
          <p className="text-gray-700 mb-2"><strong>Warranty Type:</strong> Manufacturing Defects</p>
          <p className="text-gray-700 mb-2"><strong>Covered in Warranty:</strong> Manufacturing Defects</p>

          {/* Add to Cart Button */}
          <div className="text-center mt-6">
            <button className="bg-[#faa83e] text-white py-2 px-6 rounded-lg hover:bg-[#e09436]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
