import { useState, useEffect } from "react";
import Image from "next/image";
import MulseSvg from "@/public/img/mulse.svg";

const Footer = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <footer
            className={`py-10 transition-colors duration-500 ${theme === "dark"
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                    : "bg-gradient-to-r from-gray-100 to-white text-gray-900"
                }`}
        >
            <div className="container mx-auto px-4">
                {/* Dark Mode Toggle */}
                <div className="flex justify-end">
                    <button
                        onClick={toggleTheme}
                        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded-full text-sm"
                    >
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    {/* Company Info */}
                    <div className="flex items-center space-x-4">
                        <Image
                            src={MulseSvg}
                            alt="Logo PT MULSE CITRA NUSA"
                            className="w-16 h-16"
                        />
                        <div>
                            <h2 className="text-xl font-bold">PT MULSE CITRA NUSA</h2>
                            <p className="text-sm mt-1">
                                Perusahaan yang bergerak di bidang teknologi dan inovasi, menyediakan
                                solusi digital terbaik untuk kebutuhan bisnis Anda.
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Navigasi</h2>
                        <nav className="flex flex-col space-y-2">
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Beranda
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Tentang Kami
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Layanan
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Kontak
                            </a>
                        </nav>
                    </div>

                    {/* Contact & Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Kontak</h2>
                        <p className="text-sm">Email: info@mulsecitranusa.com</p>
                        <p className="text-sm">Telepon: +62 812-3456-7890</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
                &copy; {new Date().getFullYear()} PT MULSE CITRA NUSA. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
