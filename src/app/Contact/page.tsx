import React from "react";

const Contact = () => {
  return (
    <>
    <div className="flex  flex-col  justify-between md:flex-row  items-center md:px-16 bg-gray-100">
      {/* Left Side: Icons and Content */}
      
      <div className="space-y-6  w-full md:w-1/2 ">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl text-[#faa83e]">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-600">123 Street Name, City, Country</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl text-[#faa83e]">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl text-[#faa83e]">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Working Hours</h3>
            <p className="text-gray-600">Open 24/7</p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="bg-white p-6 my-10 rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-black rounded-lg p-2 px-4 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-black rounded-lg p-2 px-4 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              className="w-full border border-black rounded-lg p-2 px-4 focus:outline-none"
              placeholder="Enter subject"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-black rounded-lg p-2 px-4 focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#faa83e] text-white py-2 px-6 rounded-lg hover:bg-[#e09436]"
            >
              Send Message
            </button>
          </div>
        </form>
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
    </>
    
  );
};

export default Contact;
