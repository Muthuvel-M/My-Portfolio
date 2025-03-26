import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap">

        {/* Profile */}
      <div className="flex items-center space-x-2">
          <img 
            src="src\assets\images\profile icon.jpg" 
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <a href="Home.jsx" className="text-2xl font-bold text-white">Muthu</a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-white transition-transform transform hover:scale-110">Home</a>
            <a href="#" className="text-white hover:text-white transition-transform transform hover:scale-110">About</a>
            <a href="#" className="text-white hover:text-white transition-transform transform hover:scale-110">Services</a>
            <a href="#" className="text-white hover:text-white transition-transform transform hover:scale-110">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-md absolute w-full left-0 top-[50px] p-4 space-y-4 flex flex-col items-center ">
          <a href="#" className="block text-white hover:">Home</a>
          <a href="#" className="block text-white hover:">About</a>
          <a href="#" className="block text-white hover:">Services</a>
          <a href="#" className="block text-white hover:">Contact</a>
        </div>
      )}
    </nav>
  );
}
