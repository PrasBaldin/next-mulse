"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

                    {/* Tombol Menu Mobile dengan Animasi */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <motion.div
                            key={isOpen ? "close" : "menu"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </button>
                </div>

                {/* Menu Mobile dengan Animasi */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden flex flex-col space-y-3 pb-4 ${isOpen ? "block" : "hidden"
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
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
