"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import MulseSVG from "../assets/img/mulse.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect untuk mengatur dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        <Link href="/" className="text-2xl font-bold text-[#3bbced] dark:text-blue-300 flex items-center">
                            <Image src={MulseSVG} alt="img" className="w-12 mr-4 dark:invert" />Mulse Citra Nusa
                        </Link>

                        <div className="flex items-center gap-4">
                            {/* Desktop Menu */}
                            <div className="hidden md:flex space-x-6 items-center">
                                {/* ... (semua Link di dalam desktop menu) */}
                                {/* Tambahkan dark mode toggle di desktop */}
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {isDarkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button className="md:hidden relative w-8 h-8">
                                {/* ... (kode existing mobile button) */}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-16 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col space-y-4">
                    {/* ... (semua Link di mobile menu) */}

                    {/* Dark Mode Toggle untuk Mobile */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {isDarkMode ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;