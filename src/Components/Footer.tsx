import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* First Column: Brand and Description */}
        <div>
          <h3 className="text-2xl text-black font-bold mb-4">YourBrand</h3>
          <p className="text-gray-400">
            Discover high-quality furniture that blends style with comfort. Our mission is to bring elegance to your spaces.
          </p>
        </div>

        {/* Second Column: Links */}
        <div>
          {/* <h4 className="text-xl font-bold mb-4">Quick Links</h4> */}
          <ul className="space-y-2  text-center">
            <li>
              <a href="#" className="text-gray-400  hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-400  hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="text-gray-400  hover:text-white">Contact</a>
            </li>
            <li>
              <a href="#" className="text-gray-400  hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Third Column: Links */}
        <div>
          {/* <h4 className="text-xl font-bold mb-4">Resources</h4> */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Blog</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Support</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Newsletter */}
        <div>
          {/* <h4 className="text-xl font-bold mb-4">Newsletter</h4> */}
          <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md text-white border border-[#f7922e] focus:outline-none focus:ring-2 focus:ring-[#faa83e]"
            />
            <button className="bg-[#faa83e] hover:bg-[#f7922e] text-white font-bold py-3 px-6 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} YourBrand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
