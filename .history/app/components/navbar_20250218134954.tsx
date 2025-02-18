"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
                    <button className="md:hidden relative w-5 h-5" onClick={() => setIsOpen(!isOpen)}>
                        <div
                            className={`absolute w-full h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"
                                }`}
                        ></div>
                        <div
                            className={`absolute w-full h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"
                                }`}
                        ></div>
                        <div
                            className={`absolute w-full h-[3px] bg-gray-800 rounded transition-all duration-300 ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"
                                }`}
                        ></div>
                    </button>
                </div>

                {/* Menu Mobile */}
                <div
                    className={`md:hidden flex flex-col space-y-3 pb-4 transition-all duration-300 ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                >
                    <Link href="/" className="block text-gray-700 hover:text-blue-500 transition">
                        Home
                    </Link>
                    <Link href="/about" className="block text-gray-700 hover:text-blue-500 transition">
                        About
                    </Link>
                    <Link href="/contact" className="block text-gray-700 hover:text-blue-500 transition">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
