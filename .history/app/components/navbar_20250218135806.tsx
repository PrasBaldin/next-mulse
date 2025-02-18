"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        <div className="hidden md:flex space-x-6">
                            <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
                                Contact
                            </Link>
                        </div>

                        {/* Tombol Menu Mobile */}
                        <button className="md:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div
                                className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"
                                    }`}
                            ></div>
                            <div
                                className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"
                                    }`}
                            ></div>
                            <div
                                className={`absolute w-6 h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"
                                    }`}
                            ></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay saat Sidebar terbuka (Hanya di bawah Navbar) */}
            <div
                className={`fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Menu (Di bawah Navbar) */}
            <div
                className={`fixed top-16 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
