"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import MulseSVG from "../public/img/mulse.svg";
import "./navbar.css";

import ToggleLanguage from "./toggleLanguage";
import ToggleDarkMode from "./toggleDarkMode";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <div className="utility-bar md:hidden py-1 bg-gray-100 dark:bg-gray-900 transition duration-500 ease-in-out">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="social-media w-auto">
                            <span className="mr-3 text-gray-700 dark:text-gray-100">facebook</span>
                            <span className="mr-3 text-gray-700 dark:text-gray-100">Instagram</span>
                            <span className="mr-3 text-gray-700 dark:text-gray-100">Tiktok</span>
                        </div>
                        <div className="utility w-auto flex gap-2">
                            <ToggleLanguage />
                            <ToggleDarkMode />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-[#3bbced] dark:text-gray-100 flex items-center transition duration-500 ease-in-out py-3">
                            <Image src={MulseSVG} alt="img" className="w-12 mr-4" />Mulse Citra Nusa
                        </Link>

                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/" className="nav-link">
                                {("navbar.home")}
                            </Link>

                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="nav-link flex items-center">
                                    {("navbar.services")}
                                </button>
                                <div className={`bg-white dark:bg-gray-800 absolute top-8 -left-2 w-56 pt-2 p-3 border-2 border-blue-500 shadow-xl rounded-lg overflow-visible transition-all duration-300 ${isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`} >
                                    <Link href="/pengadaan-barang" className="nav-link-dropdown" >
                                        {("navbar.service.procurement")}
                                    </Link>
                                    <Link href="/jasa-konstruksi" className="nav-link-dropdown" >
                                        {("navbar.service.construction")}
                                    </Link>
                                </div>
                            </div>
                            <Link href="https://katalog.mulse.id" legacyBehavior>
                                <a target="_blank" className="nav-link">
                                    {("navbar.catalog")}
                                </a>
                            </Link>
                            <Link href="/gallery" className="nav-link">
                                {("navbar.gallery")}
                            </Link>
                            <Link href="/about" className="nav-link">
                                {("navbar.about")}
                            </Link>
                            <Link href="/contact" className="nav-link">
                                {("navbar.contact")}
                            </Link>
                        </div>

                        <button className="lg:hidden relative w-8 h-8" onClick={() => setIsOpen(!isOpen)}>
                            <div className={`hamburger ${isOpen ? "rotate-45 top-1/2 transform -translate-y-1/2" : "top-2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"}`} ></div>
                            <div className={`hamburger ${isOpen ? "-rotate-45 bottom-1/2 transform translate-y-1/2" : "bottom-2"}`} ></div>
                        </button>
                    </div>
                </div>
            </nav >

            {/* Overlay Sidebar */}
            <div className={`lg:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            } onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu */}
            < div className={`bg-white dark:bg-gray-800 lg:hidden fixed top-16 right-0 w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.home")}
                    </Link>

                    <div>
                        <button className="nav-link-mobile flex items-center w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            {("navbar.services")}
                            <span className={`dropdown-arrow ${isDropdownOpen ? "rotate-45 absolute right-9 mb-2" : "-rotate-45 absolute right-9"}`} ></span>
                        </button>
                        <div className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"}`} >
                            <Link href="/pengadaan-barang" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                {("navbar.service.procurement")}
                            </Link>
                            <Link href="/jasa-konstruksi" className="nav-link-mobile block" onClick={() => setIsOpen(false)} >
                                {("navbar.service.construction")}
                            </Link>
                        </div>
                    </div>
                    <Link href="https://katalog.mulse.id" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.catalog")}
                    </Link>
                    <Link href="/gallery" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.gallery")}
                    </Link>
                    <Link href="/about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.about")}
                    </Link>
                    <Link href="/contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.contact")}
                    </Link>
                    <ToggleLanguage />
                    <ToggleDarkMode />
                </div>
            </div >
        </>
    );
};

export default Navbar;
