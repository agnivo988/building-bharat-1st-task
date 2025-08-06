'use client'

import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 md:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Building Bharat" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-primary font-medium">Home</a>
          <a href="#" className="hover:text-primary">Courses</a>
          <a href="#" className="hover:text-primary">For College</a>
          <a href="#" className="hover:text-primary">Internships</a>
          <a href="#" className="hover:text-primary">Blogs</a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
            Start Learning
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <a href="#" className="block text-primary font-medium">Home</a>
          <a href="#" className="block hover:text-primary">Courses</a>
          <a href="#" className="block hover:text-primary">For College</a>
          <a href="#" className="block hover:text-primary">Internships</a>
          <a href="#" className="block hover:text-primary">Blogs</a>
          <button className="w-full mt-2 border-2 border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
            Start Learning
          </button>
        </div>
      )}
    </header>
  )
}

