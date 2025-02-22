import Image from "next/image";
import MulseSvg from "@/public/img/mulse.svg";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info & Social Media */}
                    <div>
                        <Image src={MulseSvg} alt="Mulse Logo" className="w-32 mb-4" />
                        <p className="text-sm">
                            PT MULSE CITRA NUSA adalah perusahaan yang bergerak di bidang teknologi dan inovasi, menyediakan solusi digital terbaik untuk kebutuhan bisnis Anda.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.939v5.666h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.372-1.849 3.604 0 4.27 2.371 4.27 5.455v6.285zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 01.001 4.124zM6.998 20.452H3.676V9h3.322v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.205 24 24 23.229 24 22.277V1.723C24 .771 23.205 0 22.225 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Menu</h2>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Beranda</Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Katalog</Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Galeri</Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Tentang Kami</Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Kontak</Link>
                        </nav>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Layanan</h2>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Jasa Kontruksi</Link>
                            <Link href="#" className="hover:text-sky-400 transition-colors duration-300">Pengadaan Barang</Link>
                        </nav>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Kontak</h2>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.03-1.17 4.03-3 6.36C9.17 13.03 7 11.03 7 9z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                                <span>Jl. SMA 14 B, Cililitan, Keramat Jati, Jakarta Timur</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>info@mulse.id</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.32 2.1A7.93 7.93 0 0012 0C5.37 0 0 5.37 0 12a11.91 11.91 0 001.64 6.06L0 24l5.94-1.64A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12 0-2.02-.5-3.93-1.68-5.62a7.98 7.98 0 00-4-4z" />
                                </svg>
                                <span>+62 852 6006 2002</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.27 1.11l-2.18 2.23z" />
                                </svg>
                                <span>021 2204 9859</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    &copy; {new Date().getFullYear()} PT MULSE CITRA NUSA. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
