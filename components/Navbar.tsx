"use client";

import { useState, useEffect } from "react";
import { Film } from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Film className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-2xl font-bold text-white">Glopixs</span>
          </Link>

          {/* Navigation Links */}
          <div className="ml-auto flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog & News
            </Link>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
