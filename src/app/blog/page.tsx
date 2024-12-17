import React from "react";

const BlogPage = () => {
  return (
    <div>
      {/* Overlay Section */}
      <div className="relative bg-gray-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to Our Blog</h1>
        <p className="text-lg mt-2">Stay updated with the latest posts</p>
      </div>

      {/* Blog Section: Main Content and Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 md:px-16 bg-white">
        {/* Left Side: Blog Post Image and Content */}
        <div className="col-span-2">
          {/* Post 1 Image */}
          <div className="mb-8">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Blog Post Image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Post 1 Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Blog Post Title</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo, eros id elementum tincidunt, lorem felis dapibus arcu, at
              vestibulum purus magna id nunc. Nulla facilisi. Integer non volutpat
              augue, et lacinia mauris.
            </p>
            <p className="text-gray-700 mb-6">
              Nam laoreet ultricies nisl, sit amet feugiat purus euismod eu. Curabitur
              vulputate gravida elit, non mollis ante elementum sit amet. Integer vehicula
              urna id diam venenatis, id volutpat odio blandit. Donec euismod dui eu libero
              tincidunt, et feugiat nisi vehicula.
            </p>
          </div>
          {/* Post 1 Image */}
          <div className="mb-8">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Blog Post Image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Post 1 Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Blog Post Title</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo, eros id elementum tincidunt, lorem felis dapibus arcu, at
              vestibulum purus magna id nunc. Nulla facilisi. Integer non volutpat
              augue, et lacinia mauris.
            </p>
            <p className="text-gray-700 mb-6">
              Nam laoreet ultricies nisl, sit amet feugiat purus euismod eu. Curabitur
              vulputate gravida elit, non mollis ante elementum sit amet. Integer vehicula
              urna id diam venenatis, id volutpat odio blandit. Donec euismod dui eu libero
              tincidunt, et feugiat nisi vehicula.
            </p>
          </div>
          {/* Post 1 Image */}
          <div className="mb-8">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Blog Post Image"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Post 1 Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Blog Post Title</h2>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo, eros id elementum tincidunt, lorem felis dapibus arcu, at
              vestibulum purus magna id nunc. Nulla facilisi. Integer non volutpat
              augue, et lacinia mauris.
            </p>
            <p className="text-gray-700 mb-6">
              Nam laoreet ultricies nisl, sit amet feugiat purus euismod eu. Curabitur
              vulputate gravida elit, non mollis ante elementum sit amet. Integer vehicula
              urna id diam venenatis, id volutpat odio blandit. Donec euismod dui eu libero
              tincidunt, et feugiat nisi vehicula.
            </p>
          </div>

         
        </div>

        {/* Right Side: Sidebar with Search, Categories, and Recent Posts */}
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#faa83e]"
            />
          </div>

          {/* Categories List */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
                  Health
                </a>
              </li>
              <li>
                <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
                  Business
                </a>
              </li>
            </ul>
          </div>

       {/* Recent Posts */}
<div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
  <ul className="space-y-3">
    <li className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Post Image"
        className="w-16 h-16 object-cover "
      />
      <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
        How to Start a Tech Blog
      </a>
    </li>
    <li className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Post Image"
        className="w-16 h-16 object-cover "
      />
      <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
        Top 5 Healthy Habits for a Better Life
      </a>
    </li>
    <li className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Post Image"
        className="w-16 h-16 object-cover "
      />
      <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
        The Future of Business in 2024
      </a>
    </li>
    <li className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Post Image"
        className="w-16 h-16 object-cover"
      />
      <a href="#" className="text-[#faa83e] hover:text-[#e09436]">
        Tips for Creating Great Content
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default BlogPage;
