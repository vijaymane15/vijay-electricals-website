
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-brand-white text-brand-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-4 md:px-6">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/" className="flex flex-col md:flex-row items-center">
              <img 
                src="/lovable-uploads/aeb6c367-c6af-4891-9ec6-78e209e1575a.png" 
                alt="Vijay Electricals Logo" 
                className="h-20 mr-3" 
              />
              <div className="flex flex-col items-center md:items-start">
                <div className="text-3xl font-bold text-brand-black">
                  Vijay <span className="text-brand-red">Electricals</span>
                </div>
                <span className="text-xs text-gray-600 hover:text-brand-red hover:font-medium transition-all duration-300 group">
                  Lighting Up Lives
                  <span className="block h-0.5 max-w-0 bg-brand-red transition-all duration-500 group-hover:max-w-full"></span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Link to="/contact">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-brand-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-brand-black" />
              ) : (
                <Menu className="h-6 w-6 text-brand-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-brand-white border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
              <Link to="/contact">
                <Button className="bg-brand-red hover:bg-brand-red/90 text-brand-white w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Navigation links component for desktop
const NavLinks = () => {
  return (
    <>
      <Link to="/" className="hover:text-brand-red transition-colors text-brand-black">
        Home
      </Link>
      <Link to="/about" className="hover:text-brand-red transition-colors text-brand-black">
        About Us
      </Link>
      <Link to="/products" className="hover:text-brand-red transition-colors text-brand-black">
        Products
      </Link>
      <Link to="/services" className="hover:text-brand-red transition-colors text-brand-black">
        Services
      </Link>
      <Link to="/testimonials" className="hover:text-brand-red transition-colors text-brand-black">
        Testimonials
      </Link>
    </>
  );
};

// Navigation links component for mobile
const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Link
        to="/"
        className="block py-2 px-2 hover:bg-gray-100 rounded text-brand-black"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block py-2 px-2 hover:bg-gray-100 rounded text-brand-black"
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link
        to="/products"
        className="block py-2 px-2 hover:bg-gray-100 rounded text-brand-black"
        onClick={closeMenu}
      >
        Products
      </Link>
      <Link
        to="/services"
        className="block py-2 px-2 hover:bg-gray-100 rounded text-brand-black"
        onClick={closeMenu}
      >
        Services
      </Link>
      <Link
        to="/testimonials"
        className="block py-2 px-2 hover:bg-gray-100 rounded text-brand-black"
        onClick={closeMenu}
      >
        Testimonials
      </Link>
    </>
  );
};

export default Navbar;
