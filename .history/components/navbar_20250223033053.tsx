"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import MulseSvg from "@/public/img/mulse.svg";
import "./navbar.css";

import ToggleLanguage from "./toggleLanguage";
import ToggleDarkMode from "./toggleDarkMode";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <div className="utility-bar">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="w-auto">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-sky-400 transition-colors duration-300" >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-sky-400 transition-colors duration-300" >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" /><path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor" />
                                </svg>
                            </a>
                            <Link href="/" className="social-media-link">Instagram</Link>
                        </div>
                        <div className="utility-content">
                            <ToggleLanguage />
                            <ToggleDarkMode />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-sky-500 dark:text-gray-100 flex items-center transition duration-500 ease-in-out py-3">
                            <Image src={MulseSvg} alt="img" className="w-12 mr-4" />Mulse Citra Nusa
                        </Link>

                        <div className="hidden lg:flex space-x-6 items-center">
                            <Link href="/" className="nav-link">
                                {("navbar.home")}
                            </Link>

                            <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                                <button className="nav-link flex items-center">
                                    {("navbar.services")}
                                </button>
                                <div className={`nav-dropdown ${isDropdownOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 translate-y-3"}`} >
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
            <div className={`lg:hidden fixed top-16 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-[9] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`
            } onClick={() => setIsOpen(false)}></div>

            {/* Sidebar Menu */}
            < div className={`bg-white dark:bg-gray-800 lg:hidden fixed top-16 right-0 w-64 h-full shadow-lg transform transition-transform duration-500 ease-in-out z-10 ${isOpen ? "translate-x-0" : "translate-x-full"}`}  >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>
                        {("navbar.home")}
                    </Link>

                    <div>
                        <button className="nav-link-mobile flex items-center w-full" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                            {("navbar.services")}
                            <span className={`dropdown-arrow ${isDropdownOpen ? "rotate-45 absolute right-9 mb-2" : "-rotate-45 absolute right-9"}`} ></span>
                        </button>
                        <div className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? "max-h-[500px] opacity-100 p-2 mt-2" : "max-h-0 opacity-0 p-0 mt-0"}`} >
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
