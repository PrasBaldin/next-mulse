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
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            MyLogo
                        </Link>

                        {/* Menu untuk Desktop */}
                        <div className="hidden md:flex space-x-6 items-center">
                            <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
                                Home
                            </Link>

                            {/* Menu Services dengan Dropdown (Hover di Desktop) */}
                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="flex items-center text-gray-700 hover:text-blue-500 transition">
                                    Services
                                </button>
                                {/* Dropdown Area bergaya bubble percakapan */}
                                <div
                                    className={`absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen
                                            ? "opacity-100 visible scale-100"
                                            : "opacity-0 invisible scale-95"
                                        }`}
                                >
                                    {/* Tail bubble yang keluar dari bubble */}
                                    <div className="absolute -top-3 left-6 w-4 h-4 bg-white border border-gray-200 transform rotate-45 z-10"></div>
                                    <Link
                                        href="/pengadaan-barang"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-200 transition"
                                    >
                                        Pengadaan Barang
                                    </Link>
                                    <Link
                                        href="/jasa-konstruksi"
                                        className="block px-4 py-3 text-gray-700 hover:bg-blue-200 transition"
                                    >
                                        Jasa Konstruksi
                                    </Link>
                                </div>
                            </div>

                            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
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
            <div className={`fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            <div className={`fixed top-16 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="pb-2 border-b border-gray-200 text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Menu Services dengan Dropdown di Sidebar (Klik untuk Buka) */}
                    <div>
                        <button className="pb-2 border-b border-gray-200 flex items-center text-gray-700 hover:text-blue-500 transition w-full text-left" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2 p-2 rounded-lg">
                                <Link href="/pengadaan-barang" className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)} >
                                    Pengadaan Barang
                                </Link>
                                <Link href="/jasa-konstruksi" className="pb-2 border-b border-gray-200 block text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)} >
                                    Jasa Konstruksi
                                </Link>
                            </div>
                        )}
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
