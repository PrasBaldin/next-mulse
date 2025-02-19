"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Image from 'next/image';
import MulseSVG from "../assets/img/mulse.svg";

import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

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
            <nav className="navbar">
                <div className="container">
                    <div className="flex justify-between items-center py-3">
                        <Link href="/" className="text-2xl font-bold text-[#3bbced] dark:text-gray-100 flex items-center">
                            <Image src={MulseSVG} alt="img" className="w-12 mr-4" />Mulse Citra Nusa
                        </Link>

                        {/* Menu untuk Desktop */}
                        <div className="hidden md:flex space-x-6 items-center">
                            <Link href="/" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Home
                            </Link>

                            {/* Menu Services dengan Dropdown (Hover di Desktop) */}
                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="nav-link border-b-2 border-transparent hover:border-blue-500 flex items-center">
                                    Services
                                </button>
                                <div className={`bg-white dark:bg-gray-800 absolute top-8 -left-2 w-56 pt-2 p-3 border-2 border-blue-500 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`} >
                                    <Link href="/pengadaan-barang" className="nav-link border-b border-gray-200 hover:border-blue-500 block px-2" >
                                        Pengadaan Barang
                                    </Link>
                                    <Link href="/jasa-konstruksi" className="nav-link border-b border-gray-200 hover:border-blue-500 block px-2" >
                                        Jasa Konstruksi
                                    </Link>
                                </div>
                            </div>
                            <Link href="https://katalog.mulse.id" target="blank" className="nav-link">
                                Catalog
                            </Link>
                            <Link href="/gallery" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Gallery
                            </Link>
                            <Link href="/about" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                About
                            </Link>
                            <Link href="/contact" className="nav-link border-b-2 border-transparent hover:border-blue-500">
                                Contact
                            </Link>
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

                        {/* Tombol Menu Mobile */}
                        <button className="md:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`hamburger ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"}`} ></div>
                        </button>
                    </div>
                </div>
            </nav >

            {/* Overlay saat Sidebar terbuka (Hanya di bawah Navbar) */}
            <div className={`md:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            } onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            < div className={`bg-white dark:bg-gray-800 md:hidden fixed top-16 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Menu Services dengan Dropdown di Sidebar (Klik untuk Buka) */}
                    <div>
                        <button className="pb-2 border-b border-gray-200 flex items-center text-gray-700 hover:text-blue-500 transition w-full text-left" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            Services
                            <span
                                className={`ml-2 w-3 h-3 border-b-2 border-r-2 border-gray-700 transition-all duration-300 ${isDropdownOpen ? "rotate-45 absolute right-6 mb-2" : "-rotate-45 absolute right-6"
                                    }`}
                            ></span>
                        </button>
                        <div className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"}`} >
                            <Link href="/pengadaan-barang" className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)} >
                                Pengadaan Barang
                            </Link>
                            <Link href="/jasa-konstruksi" className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)} >
                                Jasa Konstruksi
                            </Link>
                        </div>
                    </div>
                    <Link href="https://katalog.mulse.id" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Catalog
                    </Link>
                    <Link href="/gallery" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Gallery
                    </Link>
                    <Link href="/about" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
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
            </div >
        </>
    );
};

export default Navbar;
