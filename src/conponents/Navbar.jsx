import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
// import { NavLink, Link } from 'react-router-dom'
// NavLink

export default function Navbar() {

    const [darkMode, setDarkMode] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])


    return (
        <nav className=' top-0 left-0 w-full z-50 bg-white/60 dark:bg-[#0B061A]/96 backdrop-blur-md shadow-md '>
            <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center '>
                {/* Logo */}
                <a href="/">
                    <div className='flex items-center space-x-2'>
                        <div className='h-10 w-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg'>
                            AK
                        </div>
                        <span className=' text-2xl font-semibold text-black dark:text-gray-50'>
                            Animesh Khanra
                        </span>
                    </div>
                </a>

                {/* Desktop MENU */}
                <ul className='hidden md:flex space-x-7 text-gray-900 dark:text-gray-100 '>

                    <li>
                        <a href="/" className='relative group inline-block ' >
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                        </a>

                    </li>
                    <li>
                        <a href="/about" className='relative group inline-block '
                        >
                            About
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                        </a>

                    </li>
                    <li>
                        <a href="/skills" className='relative group inline-block '
                        >
                            Skills
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                        </a>

                    </li>
                    <li>
                        <a href="/projects" className='relative group inline-block '
                        >
                            Projects
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                        </a>

                    </li>
                    <li>
                        <a href="/contact" className='relative group inline-block '
                        >
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full"></span>
                        </a>

                    </li>
                </ul>

                {/* Theme Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    {darkMode ?
                        (
                            <Sun className="text-yellow-400 w-5 h-5" />
                        ) :
                        (
                            <Moon className="text-gray-800 w-5 h-5" />
                        )}
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800 dark:text-gray-100 ml-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white dark:bg-[#0B061A] text-gray-800 dark:text-gray-100 font-medium">
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    )
}
