"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  return (

      <nav className="sticky bg-white top-0 z-50 flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-xl mr-6 font-bold sm:text-xl sm:text-center">
          <a href="/">Domonick Mack</a>
        </h1>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {/* Hamburger Icon (Toggle this icon on click) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Hidden on mobile, visible on larger screens) */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>

          {session && (
            <li>
              <a href="/projects/add" className="hover:text-blue-500">
                Add Project
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {menuOpen && (
          <ul className=" p-10 bottom-10 left-1/2 backdrop-blur-lg rounded-lg  md:hidden">
            <li>
              <a
                href="/"
                className="block py-2 text-center hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-center hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block py-2 text-center hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block  text-center hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

  );
};

export default Navbar;
