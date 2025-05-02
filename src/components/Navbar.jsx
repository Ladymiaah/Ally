import { useState } from "react";

import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 relative">
      {/* Logo */}
      <div className="flex gap-1 items-center z-10">
        <img
          src="images/logo.png"
          alt="logo"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <h1 className="font-bold text-lg md:text-xl">AI Ally</h1>
      </div>

      {/* Centered Navigation Links - Desktop */}
      <div className="hidden md:flex flex-grow justify-center gap-8 font-bold items-center mx-4">
        <p className="hover:text-[#babeba] font-poppins  cursor-pointer">
          Home
        </p>
        <HashLink
          to="#features"
          className="hover:text-[#babeba] font-poppins cursor-pointer"
        >
          Features
        </HashLink>
        <HashLink
          to="#pricing"
          className="hover:text-[#babeba] font-poppins cursor-pointer"
        >
          Pricing
        </HashLink>
        <HashLink
          to="#testimonial"
          className="hover:text-[#babeba] font-poppins cursor-pointer"
        >
          Testimonials
        </HashLink>
      </div>

      {/* Sign In Button - Desktop */}
      <div className="hidden md:block z-10">
        <button className="bg-[#66FF66] py-2 px-5 rounded-full hover:bg-[#55DD55] transition-colors">
          Sign In
        </button>
      </div>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden focus:outline-none z-10"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <div className="flex flex-col gap-4 font-bold items-center">
            <p className="hover:text-[#66FF66] cursor-pointer py-2">Home</p>
            <p className="hover:text-[#66FF66] cursor-pointer py-2">Features</p>
            <p className="hover:text-[#66FF66] cursor-pointer py-2">Pricing</p>
            <p className="hover:text-[#66FF66] cursor-pointer py-2">
              Testimonials
            </p>
            <button className="bg-[#66FF66] py-2 px-5 rounded-full hover:bg-[#55DD55] transition-colors w-full max-w-xs">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
