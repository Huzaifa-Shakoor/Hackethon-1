"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons from FontAwesome pack

const Nav = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
     <a className="flex items-center text-3xl font-bold leading-none" href="#">
        <img src="logo.png" alt="" className="h-10 w-auto mr-2" />
        Furniro
      </a>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center text-blue-600 p-3"
          onClick={toggleMenu} // Toggle menu when clicked
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="blog">
            About Us
          </Link>
        </li>
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="checkout">
            Services
          </Link>
        </li>
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="shop">
            Pricing
          </Link>
        </li>
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="text-sm text-black hover:text-gray-500" href="Contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-center mt-4 mb-6">
          {/* Logo and Text above the menu */}
          <img
            src="logo.png" // Replace with your actual logo path
            alt="Furniro Logo"
            className="h-10 w-auto mr-2" // Adjust size as needed
          />
          <span className="text-2xl font-bold text-black">Furniro</span>
        </div>

        <ul className="py-4 space-y-4 px-6">
          <li>
            <Link className="text-sm text-black hover:text-gray-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-sm text-black hover:text-gray-500" href="blog">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-sm text-black hover:text-gray-500" href="shop">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-sm text-black hover:text-gray-500" href="shop/pdetails">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="text-sm text-black hover:text-gray-500" href="Contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons inside the mobile slide bar (Aligned inline) */}
        <div className="mt-auto px-6 py-4 flex space-x-4">
          <Link href="/profile" className="text-black hover:text-gray-500">
            <FaUser className="h-6 w-6" />
          </Link>
          <Link href="/search" className="text-black hover:text-gray-500">
            <FaSearch className="h-6 w-6" />
          </Link>
          <Link href="/wishlist" className="text-black hover:text-gray-500">
            <FaHeart className="h-6 w-6" />
          </Link>
          <Link href="cart" className="text-black hover:text-gray-500">
            <FaShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex space-x-4 items-center">
        <Link href="/profile" className="text-black hover:text-gray-500">
          <FaUser className="h-6 w-6" />
        </Link>
        <Link href="/search" className="text-black hover:text-gray-500">
          <FaSearch className="h-6 w-6" />
        </Link>
        <Link href="/wishlist" className="text-black hover:text-gray-500">
          <FaHeart className="h-6 w-6" />
        </Link>
        <Link href="/cart" className="text-black hover:text-gray-500">
          <FaShoppingCart className="h-6 w-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
