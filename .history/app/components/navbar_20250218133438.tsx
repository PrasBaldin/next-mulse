"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu Mobile */}
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-3 pb-4">
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
                )}
            </div>
        </nav>
    );
};

export default Navbar;
