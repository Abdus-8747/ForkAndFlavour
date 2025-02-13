import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo with Centered Placement */}
        <NavLink 
          to="/" 
          className="flex items-center space-x-2 text-3xl font-bold text-green-600 transition-all duration-300 hover:text-green-700 hover:scale-105"
        >
          <img src="https://i.fbcd.co/products/resized/resized-1500-1000/e9dcaec4c69ea1a9634fe430035b28610f1cc9b5983fa0849e64adcd1f735aeb.webp" alt="Fork & Flavour" className="h-11 w-20 object-contain" />
          <span className="hidden sm:inline-block">Fork & Flavour</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-20">
          <NavLink to="/" className="text-gray-700 hover:text-green-500 font-semibold transition-all duration-300">Home</NavLink>
          <NavLink to="menu" className="text-gray-700 hover:text-green-500 font-semibold transition-all duration-300">Menu</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-green-500 font-semibold transition-all duration-300">About</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-green-500 font-semibold transition-all duration-300">Contact</NavLink>
          <NavLink to="/github" className="text-gray-700 hover:text-green-500 font-semibold transition-all duration-300">Github</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setShow(!show)} 
          className="md:hidden text-3xl text-gray-700 transition-transform transform hover:scale-110"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 ${show ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* Mobile Menu */}
        <nav className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform ${show ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-6`}>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button onClick={() => setShow(false)} className="text-3xl text-gray-700 hover:text-red-500">
              <IoClose />
            </button>
          </div>
          <div className="mt-6 space-y-6">
            <NavLink to="/" className="block text-lg font-semibold text-gray-700 hover:text-green-500 transition-all duration-300" onClick={() => setShow(false)}>Home</NavLink>
            <NavLink to="menu" className="block text-lg font-semibold text-gray-700 hover:text-green-500 transition-all duration-300" onClick={() => setShow(false)}>Menu</NavLink>
            <NavLink to="/about" className="block text-lg font-semibold text-gray-700 hover:text-green-500 transition-all duration-300" onClick={() => setShow(false)}>About</NavLink>
            <NavLink to="/contact" className="block text-lg font-semibold text-gray-700 hover:text-green-500 transition-all duration-300" onClick={() => setShow(false)}>Contact</NavLink>
            <NavLink to="/github" className="block text-lg font-semibold text-gray-700 hover:text-green-500 transition-all duration-300" onClick={() => setShow(false)}>Github</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
