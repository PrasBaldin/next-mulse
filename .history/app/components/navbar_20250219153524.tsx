"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Image from 'next/image';
import MulseSVG from "../assets/img/mulse.svg";

import "./navbar.css";

import IconDarkMode from "../assets/icon/iconDarkmode";
import IconLightMode from "../assets/icon/iconLightmode";
import IconEN from "../assets/icon/iconEN";
import IconID from "../assets/icon/iconID";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Cek localStorage untuk tema
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    // Effect untuk bahasa (simpan preferensi ke localStorage)
    useEffect(() => {
        localStorage.setItem('language', isEnglish ? 'en' : 'id');
    }, [isEnglish]);

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

                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>

                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="nav-link flex items-center">
                                    Services
                                </button>
                                <div className={`bg-white dark:bg-gray-800 absolute top-8 -left-2 w-56 pt-2 p-3 border-2 border-blue-500 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`} >
                                    <Link href="/pengadaan-barang" className="nav-link-dropdown" >
                                        Pengadaan Barang
                                    </Link>
                                    <Link href="/jasa-konstruksi" className="nav-link-dropdown" >
                                        Jasa Konstruksi
                                    </Link>
                                </div>
                            </div>
                            <Link href="https://katalog.mulse.id" target="blank" className="nav-link">
                                Catalog
                            </Link>
                            <Link href="/gallery" className="nav-link">
                                Gallery
                            </Link>
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                            <button onClick={() => setIsEnglish(!isEnglish)} className="btn font-medium text-gray-700 dark:text-gray-300">
                                {isEnglish ? <IconEN /> : <IconID />}
                            </button>
                            <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn w-11 h-11 relative overflow-hidden">
                                {/* Icon Light Mode */}
                                <div
                                    className={`absolute flex items-center justify-center transition-all duration-300 transform ${isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                                        }`}
                                >
                                    <IconLightMode />
                                </div>
                                {/* Icon Dark Mode */}
                                <div
                                    className={`absolute flex items-center justify-center transition-all duration-300 transform ${isDarkMode ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                                        }`}
                                >
                                    <IconDarkMode />
                                </div>
                            </button>
                            {/* <button onClick={() => setIsDarkMode(!isDarkMode)} className="btn" >
                                {isDarkMode ? (<IconLightMode />) : (<IconDarkMode />)}
                            </button> */}
                        </div>

                        {/* Tombol Menu Mobile */}
                        <button className="lg:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`hamburger ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"}`} ></div>
                        </button>
                    </div>
                </div>
            </nav >

            {/* Overlay saat Sidebar terbuka (Hanya di bawah Navbar) */}
            <div className={`lg:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            } onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            < div className={`bg-white dark:bg-gray-800 lg:hidden fixed top-16 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Menu Services dengan Dropdown di Sidebar (Klik untuk Buka) */}
                    <div>
                        <button className="nav-link-mobile flex items-center w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            Services
                            <span className={`dropdown-arrow ${isDropdownOpen ? "rotate-45 absolute right-9 mb-2" : "-rotate-45 absolute right-9"}`} ></span>
                        </button>
                        <div className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"}`} >
                            <Link href="/pengadaan-barang" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                Pengadaan Barang
                            </Link>
                            <Link href="/jasa-konstruksi" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                Jasa Konstruksi
                            </Link>
                        </div>
                    </div>
                    <Link href="https://katalog.mulse.id" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Catalog
                    </Link>
                    <Link href="/gallery" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Gallery
                    </Link>
                    <Link href="/about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <button onClick={() => setIsEnglish(!isEnglish)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" >
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            {isEnglish ? <IconEN /> : <IconID />}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                            {isEnglish ? 'Change language' : 'Ubah bahasa'}
                        </span>
                    </button>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        {isDarkMode ? (
                            <>
                                <IconLightMode />
                                <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
                            </>
                        ) : (
                            <>
                                <IconDarkMode />
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
