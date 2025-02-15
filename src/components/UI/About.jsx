import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-700 py-30 text-center text-white">
        <h1 className="text-5xl font-extrabold">
          About <span className="text-yellow-300">Fork & Flavour</span>
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Bringing the best food experiences to your plate with a fusion of flavors, culture, and love.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center">
          <img
            src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Story"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-green-600">Our Story</h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              <strong>Fork & Flavour</strong> was born from a simple yet powerful vision—
              to create a dining experience that blends <strong>authenticity, innovation,</strong> and a love for flavors.
              The name itself represents our core belief: <strong>every forkful of food should be a burst of flavor</strong> that lingers in memory.
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              What started as a <strong>humble kitchen experiment</strong> soon turned into a passion-driven culinary journey.
              From carefully sourcing <strong>organic, high-quality ingredients</strong> to ensuring that every dish is crafted with precision,
              our team at Fork & Flavour is dedicated to delivering <strong>not just meals, but moments worth savoring.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">What makes us stand out?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-500">Authentic Flavors</h3>
            <p className="text-gray-600 mt-2">
              Every dish is prepared using <strong>traditional recipes</strong> and fresh ingredients.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-500">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Get your favorite dishes <strong>delivered hot and fresh</strong> within minutes.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-500">Quality Service</h3>
            <p className="text-gray-600 mt-2">
              Our team ensures a <strong>top-notch dining</strong> and delivery experience.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">Meet the Team</h2>
          <p className="text-gray-600 mt-2">The people behind Fork & Flavour</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://ts2.mm.bing.net/th?id=OIP.6xZ4JMEGlijyxbcf-R4U7gHaFo&pid=15.1"
              alt="Manager"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Maherin Shaikh</h3>
            <p className="text-gray-600">Restaurant Manager</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://th.bing.com/th/id/OIP.9qGWJyzSzyry6gdD-Q-IqAHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Marketing"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Masir Jafri</h3>
            <p className="text-gray-600">Co-Founder & Full Stack Developer</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img
              src="https://st.depositphotos.com/1158045/3086/i/950/depositphotos_30861025-stock-photo-chef-cooking-in-his-kitchen.jpg"
              alt="Chef"
              className="w-32 h-32 mx-auto rounded-full border-4 border-green-500 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Alex Johnson</h3>
            <p className="text-gray-600">Head Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
}
