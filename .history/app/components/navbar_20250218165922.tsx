"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-gray-900 py-1">
                            Mulse Citra Nusa
                        </Link>

                        {/* Menu untuk Desktop */}
                        <div className="hidden md:flex space-x-6 items-center">
                            <Link href="/" className="py-1 text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500">
                                Home
                            </Link>

                            {/* Menu Services dengan Dropdown (Hover di Desktop) */}
                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="flex items-center py-1 text-gray-700 group-hover:text-blue-500 transition border-b-2 border-transparent">
                                    Services
                                </button>
                                <div className={`absolute top-8 -left-2 w-56 pt-2 p-3 bg-white border-2 border-blue-500 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`} >
                                    <Link href="/pengadaan-barang" className="border-b border-gray-200 block px-2 py-1 text-gray-700 hover:bg-blue-200 transition" >
                                        Pengadaan Barang
                                    </Link>
                                    <Link href="/jasa-konstruksi" className="border-b border-gray-200 block px-2 py-1 text-gray-700 hover:bg-blue-200 transition" >
                                        Jasa Konstruksi
                                    </Link>
                                </div>
                            </div>

                            <Link href="/about" className="py-1 text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500">
                                About
                            </Link>
                            <Link href="/contact" className="py-1 text-gray-700 hover:text-blue-500 transition border-b-2 border-transparent hover:border-blue-500">
                                Contact
                            </Link>
                        </div>

                        {/* Tombol Menu Mobile */}
                        <button className="md:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"}`} ></div>
                            <div className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`} ></div>
                            <div className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"}`} ></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay saat Sidebar terbuka (Hanya di bawah Navbar) */}
            <div className={`md:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            <div className={`md:hidden fixed top-16 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Menu Services dengan Dropdown di Sidebar (Klik untuk Buka) */}
                    <div>
                        <button
                            className="pb-2 border-b border-gray-200 flex items-center text-gray-700 hover:text-blue-500 transition w-full text-left"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            Services
                            <span
                                className={`ml-2 w-3 h-3 border-b-2 border-r-2 border-gray-700 transition-transform duration-300 ${isDropdownOpen ? "rotate-45 top-9" : "-rotate-45"
                                    }`}
                            ></span>
                        </button>
                        <div
                            className={`ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"
                                }`}
                        >
                            <Link
                                href="/pengadaan-barang"
                                className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Pengadaan Barang
                            </Link>
                            <Link
                                href="/jasa-konstruksi"
                                className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Jasa Konstruksi
                            </Link>
                        </div>
                    </div>


                    <Link href="/about" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
