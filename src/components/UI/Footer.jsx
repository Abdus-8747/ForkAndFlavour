import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-12 shadow-md">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Logo & Description */}
        <div className="flex flex-col">
          <img src="https://i.fbcd.co/products/resized/resized-1500-1000/e9dcaec4c69ea1a9634fe430035b28610f1cc9b5983fa0849e64adcd1f735aeb.webp" alt="Fork & Flavour Logo" className="w-25 h-auto mb-3 transition-transform duration-300 hover:scale-105" />
          <h2 className="text-2xl font-bold text-green-600 hover:text-green-700 transition-all duration-300">Fork & Flavour</h2>
          <p className="mt-2 text-gray-600 max-w-xs">
            Bringing the best flavors to your plate with fresh and delicious recipes. 
          </p>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-green-600">Follow Us</h3>
          <div className="flex space-x-6 mt-3">
            <a href="#" className="text-gray-600 text-2xl transition-all duration-300 hover:text-green-500 hover:scale-110"><FaFacebook /></a>
            <a href="#" className="text-gray-600 text-2xl transition-all duration-300 hover:text-green-500 hover:scale-110"><FaTwitter /></a>
            <a href="#" className="text-gray-600 text-2xl transition-all duration-300 hover:text-green-500 hover:scale-110"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Section: Credits & Personal Links */}
        <div className="text-right">
          <p className="text-gray-600">Made by 
            <span className="text-green-600 hover:text-green-700 transition-all duration-300 cursor-pointer"> Abdus Samad</span>
          </p>
          <div className="flex justify-end space-x-4 mt-3">
            <a href="https://github.com/abdus-8747" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 text-5xl transition-all duration-300 hover:text-green-500 hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdus-samad-shamsi-a61161286/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 text-5xl transition-all duration-300 hover:text-green-500 hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Fork & Flavour. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
