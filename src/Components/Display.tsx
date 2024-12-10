const Display = () => {
    return (
      <section className="pt-10 pb-5">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-3">Product Categories</h2>
  
        {/* Paragraph below the heading */}
        <p className="text-lg text-center mb-3">
          Explore our wide range of product categories that suit your needs.
        </p>
  
        {/* Product Categories Cards */}
        <div className="flex flex-wrap justify-center gap-4 px-10">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-4 rounded-lg">
            {/* Image Section */}
            <div className="w-full h-[350px] overflow-hidden rounded-lg flex justify-center items-center">
              <img
                src="dining.jpg"
                alt="Category 1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Caption */}
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold">Category 1</h4>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-4 rounded-lg">
            {/* Image Section */}
            <div className="w-full h-[350px] overflow-hidden rounded-lg flex justify-center items-center">
              <img
                src="living.jpg"
                alt="Category 2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Caption */}
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold">Category 2</h4>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-4 rounded-lg">
            {/* Image Section */}
            <div className="w-full h-[350px] overflow-hidden rounded-lg flex justify-center items-center">
              <img
                src="chair.jpg"
                alt="Category 3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Caption */}
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold">Category 3</h4>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Display;
  