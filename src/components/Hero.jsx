import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const date = new Date().toUTCString().slice(0, 16);

  return (
    <>
    <section className="relative bg-green-600 text-white py-20 px-6 rounded-xl shadow-lg mx-6 mb-12 mt-12 overflow-hidden flex flex-col lg:flex-row items-center">
  <div className="absolute top-0 left-0 w-full h-full bg-green-700 opacity-20 rounded-xl"></div>

  <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2">
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-lg lg:text-xl font-medium opacity-80">{date}</h3>
      <h1 className="text-5xl lg:text-6xl font-bold mt-4">
        Fork & <span className="text-yellow-400">Flavour</span>
      </h1>
      <p className="text-xl opacity-90 mt-4 max-w-lg">
        Elevate your <span className="text-yellow-400 font-semibold">dining experience</span> with a perfect blend of flavors and irresistible recipes.  
      </p>
      <NavLink to={"menu"}>
        <button
          className="mt-8 px-8 py-4 text-lg font-semibold bg-yellow-400 text-green-900 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500"
        >
          Explore Menu 🍽️
        </button>
      </NavLink>
    </motion.div>
  </div>

  <motion.div 
    className="relative hidden lg:block lg:w-1/2"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <video autoPlay loop muted className="rounded-xl shadow-lg w-full h-auto">
      <source src="https://media.istockphoto.com/id/606042756/video/taking-a-slice-of-pizza-from-the-plate.mp4?s=mp4-640x640-is&k=20&c=nT6yzT3u2EnDz0fa-DUE9LGhvqanro4t0zIznJjlZuA=" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
</section>


      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">What makes us stand out from the rest?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Authentic Flavors", description: "Every dish is prepared using traditional recipes and fresh ingredients." },
            { title: "Fast Delivery", description: "Get your favorite dishes delivered hot and fresh within minutes." },
            { title: "Quality Service", description: "Our team ensures a top-notch dining and delivery experience." }
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-green-500">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600">Meet the Team</h2>
          <p className="text-gray-600 mt-2">The people behind Fork & Flavour</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Alex Johnson", role: "Head Chef", img: "https://st.depositphotos.com/1158045/3086/i/950/depositphotos_30861025-stock-photo-chef-cooking-in-his-kitchen.jpg" },
            { name: "Masir Jafri", role: "Full Stack Developer", img: "https://th.bing.com/th/id/OIP.9qGWJyzSzyry6gdD-Q-IqAHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
            { name: "Maherin Shaikh", role: "Restaurant Manager", img: "https://ts2.mm.bing.net/th?id=OIP.6xZ4JMEGlijyxbcf-R4U7gHaFo&pid=15.1" }
          ].map((member, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src={member.img}
                alt={member.role}
                className="w-35 h-35 mx-auto rounded-full border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
