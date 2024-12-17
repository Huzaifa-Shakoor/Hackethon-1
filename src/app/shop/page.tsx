import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
import Productour from "@/Components/Product";

export default function ShopPage() {
  return (
    <div>
      {/* Full-Width Banner Section */}
      <div
        className="relative w-full h-[350px] bg-cover bg-center sm:h-[250px]"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          {/* Shop Title */}
          <h1 className="text-4xl font-bold mb-2 sm:text-2xl">Shop</h1>

          {/* Breadcrumb Navigation */}
          <nav className="text-sm">
            <ul className="flex flex-wrap space-x-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white">Shop</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="flex flex-wrap justify-between items-center bg-gray-100 px-4 py-4 border-b border-gray-300 md:px-10">
        {/* Left Side: Filters and Total Products */}
        <div className="flex items-center space-x-4 mb-4 sm:w-full sm:justify-between">
          {/* Filter Button */}
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 5a1 1 0 000 2h14a1 1 0 100-2H3zM3 10a1 1 0 000 2h10a1 1 0 100-2H3zM3 15a1 1 0 000 2h6a1 1 0 100-2H3z" />
            </svg>
            <span>Filter</span>
            <span>|</span>
          </button>

          {/* Total Products */}
          <span className="text-gray-600 sm:text-sm">
            Showing <strong>8</strong> products of <strong>24</strong> products
          </span>
        </div>

        {/* Right Side: Sort By */}
        <div className="flex items-center space-x-2 sm:w-full sm:justify-between sm:mt-2">
          <label htmlFor="sort-by" className="text-gray-600 sm:text-sm">
            Sort By:
          </label>
          <select
            id="sort-by"
            className="border border-gray-300 px-2 py-1 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200 sm:text-sm"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <Productour />

      {/* Before Footer Content */}
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
