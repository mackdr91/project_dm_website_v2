"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  return (

      <nav className="sticky bg-white top-0 z-50 flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-xl mr-6 font-bold sm:text-xl sm:text-center">
         <Link href="/">Domonick Mack</Link>
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
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
           <Link href="/"
            className={`${
              pathname === "/"
                ? "bg-orange-500 text-white"
                : "text-orange-500 hover:bg-orange-700 hover:text-white"
            } px-3 py-2 rounded-md text-sm font-medium`}
           >
              Home
           </Link>
          </li>
          <li>
           <Link href="/about"
            className={`${
              pathname === "/about"
                ? "bg-orange-500 text-white"
                : "text-orange-500 hover:bg-orange-700 hover:text-white"
            } px-3 py-2 rounded-md text-sm font-medium`}
           >
              About
           </Link>
          </li>
          <li>
           <Link href="/projects"
           className={`${
            pathname === "/projects"
              ? "bg-orange-500 text-white"
              : "text-orange-500 hover:bg-orange-700 hover:text-white"
          } px-3 py-2 rounded-md text-sm font-medium`}

           >
              Projects
           </Link>
          </li>
          <li>
           <Link href="/contact"
            className={`${
              pathname === "/contact"
                ? "bg-orange-500 text-white"
                : "text-orange-500 hover:bg-orange-700 hover:text-white"
            } px-3 py-2 rounded-md text-sm font-medium`}
           >
              Contact
           </Link>
          </li>

          {session && (
            <li>
             <Link href="/projects/add"
            className={`${
              pathname === "/projects/add"
                ? "bg-orange-500 text-white"
                : "text-orange-500 hover:bg-orange-700 hover:text-white"
            } px-3 py-2 rounded-md text-sm font-medium`}
             >
                Add Project
             </Link>
            </li>

          )}
          {session && (
            <li>
             <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
            </li>

          )}
        </ul>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        {menuOpen && (
          <ul className=" p-10 bottom-10 left-1/2 backdrop-blur-lg rounded-lg  md:hidden">
            <li>
             <Link
                href="/"
                className="block py-2 text-center hover:text-blue-500"
              >
                Home
             </Link>
            </li>
            <li>
             <Link
                href="#about"
                className="block py-2 text-center hover:text-blue-500"
              >
                About
             </Link>
            </li>
            <li>
             <Link
                href="/projects"
                className="block py-2 text-center hover:text-blue-500"
              >
                Projects
             </Link>
            </li>
            <li>
             <Link
                href="#contact"
                className="block  text-center hover:text-blue-500"
              >
                Contact
             </Link>
            </li>
          </ul>
        )}
      </nav>

  );
};

export default Navbar;
