import Image from "next/image";
import MulseSvg from "@/public/img/mulse.svg";
import Link from "next/link";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info & Social Media */}
                    <div>
                        <div className="flex items-center">
                            <Image src={MulseSvg} alt="Mulse Logo" className="w-16" />
                            <span className="ml-4 font-bold text-xl bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">PT. MULSE CITRA NUSA</span>
                        </div>
                        <p className="text-sm">
                            Perusahaan yang bergerak di bidang teknologi dan inovasi, menyediakan solusi digital terbaik untuk kebutuhan bisnis Anda.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-300" >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-300" >
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M7.5 2C4.467 2 2 4.467 2 7.5v9C2 19.533 4.467 22 7.5 22h9c3.033 0 5.5-2.467 5.5-5.5v-9C22 4.467 19.533 2 16.5 2h-9zM20 16.5c0 1.378-1.122 2.5-2.5 2.5h-9C7.122 19 6 17.878 6 16.5v-9C6 6.122 7.122 5 8.5 5h9C18.878 5 20 6.122 20 7.5v9z" />
                                    <path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                                    <circle cx="17.5" cy="6.5" r="1.5" />
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="hover:text-black transition-colors duration-300" >
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
                                    <path d="M9 3v9.1a4.08 4.08 0 11-4-4V3h4z" />
                                    <path d="M13 7.66v8.34a6.33 6.33 0 106.33-6.33V7.66h-3v3h-3v-3h-3z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Kontak</h2>
                        <div className="w-12 md:w-[30%] h-1 rounded-r mb-4 bg-gradient-to-r from-sky-400 to-sky-200" />
                        <ul className="space-y-3 text-sm table">
                            <li className="table-row">
                                <div className="table-cell">
                                    <svg className="w-6 h-6 mr-2" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z" /><circle cx="96" cy="74" r="20" stroke="currentColor" stroke-width="12" /></svg>
                                </div>
                                <div className="table-cell">
                                    <a className="hover:text-sky-400 transition duration-300" href="https://goo.gl/maps/oJyAZpEak73gKhBG8" target="_blank">Jl. SMA 14 B, Kel. Cililitan, Keramat Jati, Jakarta Timur</a>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="table-cell">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <a className="hover:text-sky-400 transition duration-300" href="mailto:info@mulse.id" target="_blank">info@mulse.id</a>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="table-cell">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 30.667 30.667" >
                                        <g>
                                            <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                      c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                      c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                      c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                      c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                      c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                      c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                      c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                      c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                      c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                      C23.307,19.268,23.307,18.533,23.214,18.38z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <a className="hover:text-sky-400 transition duration-300" href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id" target="_blank">+62 852 6006 2002</a>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="table-cell">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.27 1.11l-2.18 2.23z" />
                                    </svg>
                                </div>
                                <div className="table-cell">
                                    <a className="hover:text-sky-400 transition duration-300" href="tel:+622122049859" target="_blank">021 2204 9859</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Menu</h2>
                        <div className="w-12 md:w-[30%] h-1 rounded-r mb-4 bg-gradient-to-r from-sky-400 to-sky-200" />
                        <div className="flex flex-col space-y-2">
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Beranda
                            </Link>
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Katalog
                            </Link>
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Galeri
                            </Link>
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Tentang Kami
                            </Link>
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Kontak
                            </Link>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Layanan</h2>
                        <div className="w-12 md:w-[30%] h-1 rounded-r mb-4 bg-gradient-to-r from-sky-400 to-sky-200" />
                        <div className="flex flex-col space-y-2">
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Jasa Kontruksi
                            </Link>
                            <Link className="hover:text-sky-400 transition-colors duration-300 flex gap-2 items-center" href="#">
                                <svg className="w-3 h-3" viewBox="-4.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-305.000000, -6679.000000)" fill="currentColor">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769" id="arrow_right-[#336]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Pengadaan Barang
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    &copy; {new Date().getFullYear()} PT MULSE CITRA NUSA. All rights reserved.
                </div>
            </div>
        </footer >
    );
};

export default Footer;
