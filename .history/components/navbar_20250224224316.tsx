"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MulseSvg from "@/public/img/mulse.svg";
import "./navbar.css";

// import ToggleLanguage from "./toggleLanguage";
import ToggleDarkMode from "./toggleDarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-full flex">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-media-link hover:text-sky-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 rounded"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-media-link hover:text-sky-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="social-media-link hover:text-sky-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                </svg>
              </a>
            </div>
            <div className="utility-content">
              {/* <ToggleLanguage /> */}
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-sky-500 dark:text-gray-100 flex items-center transition duration-500 ease-in-out py-3"
            >
              <Image src={MulseSvg} alt="img" className="w-12 mr-4" />
              Mulse Citra Nusa
            </Link>

            <div className="hidden lg:flex space-x-6 items-center">
              <Link href="/" className="nav-link">
                Beranda
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="nav-link flex items-center">Layanan</button>
                <div
                  className={`nav-dropdown ${
                    isDropdownOpen
                      ? "opacity-100 visible scale-100 translate-y-0"
                      : "opacity-0 invisible scale-95 translate-y-3"
                  }`}
                >
                  <Link href="/pengadaan-barang" className="nav-link-dropdown">
                    Pengadaan Barang
                  </Link>
                  <Link href="/jasa-konstruksi" className="nav-link-dropdown">
                    Jasa Konstruksi
                  </Link>
                </div>
              </div>
              <a
                href="https://katalog.inaproc.id/mulse-citra-nusa"
                target="_blank"
                className="nav-link"
              >
                E-Catalog
              </a>
              <Link href="/gallery" className="nav-link">
                Galeri
              </Link>
              <Link href="/about" className="nav-link">
                Tentang Kami
              </Link>
              <Link href="/contact" className="nav-link">
                Kontak
              </Link>
            </div>

            <button
              className="lg:hidden relative w-8 h-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`hamburger ${
                  isOpen
                    ? "rotate-45 top-1/2 transform -translate-y-1/2"
                    : "top-2"
                }`}
              ></div>
              <div
                className={`hamburger ${
                  isOpen ? "opacity-0" : "top-1/2 transform -translate-y-1/2"
                }`}
              ></div>
              <div
                className={`hamburger ${
                  isOpen
                    ? "-rotate-45 bottom-1/2 transform translate-y-1/2"
                    : "bottom-2"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Sidebar */}
      <div
        className={`lg:hidden fixed top-18 left-0 w-full h-full bg-black/50 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-[9] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`bg-white dark:bg-gray-800 lg:hidden fixed top-18 mt-[72px] right-0 w-64 h-full shadow-lg transform transition-transform duration-500 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <Link
            href="/"
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </Link>

          <div>
            <button
              className="nav-link-mobile flex items-center w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Layanan
              <span
                className={`dropdown-arrow ${
                  isDropdownOpen
                    ? "rotate-45 absolute right-9 mb-2"
                    : "-rotate-45 absolute right-9"
                }`}
              ></span>
            </button>
            <div
              className={`bg-white dark:bg-gray-800 ml-4 space-y-2 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                isDropdownOpen
                  ? "max-h-[500px] opacity-100 p-2 mt-2"
                  : "max-h-0 opacity-0 p-0 mt-0"
              }`}
            >
              <Link
                href="/pengadaan-barang"
                className="nav-link-mobile block"
                onClick={() => setIsOpen(false)}
              >
                Pengadaan Barang
              </Link>
              <Link
                href="/jasa-konstruksi"
                className="nav-link-mobile block"
                onClick={() => setIsOpen(false)}
              >
                Jasa Konstruksi
              </Link>
            </div>
          </div>
          <Link
            href="https://katalog.mulse.id"
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            E-Katalog
          </Link>
          <Link
            href="/gallery"
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            Galeri
          </Link>
          <Link
            href="/about"
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            href="/contact"
            className="nav-link-mobile"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </Link>
          {/* <ToggleLanguage /> */}
          <ToggleDarkMode />
        </div>
      </div>
    </>
  );
};

export default Navbar;
