"use client";

import { useEffect, useRef } from "react";
import "./hero.css";

export default function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (parallaxRef.current) {
                const translateY = scrollPos * 0.5;
                const scale = 1 + scrollPos * 0.00005;

                parallaxRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="hero-wrap min-h-[40rem]">
                <div className="flex justify-center items-center">
                    <div ref={parallaxRef} className="relative h-[110vh] min-h-[40rem] w-full bg-cover bg-center bg-fixed translate-y-[-0.2px]" style={{ backgroundImage: `url('/img/parallax.jpg')` }} >
                        <div className="hero-mask" />
                    </div>
                </div>
                <div className="container">
                    <div className="p-3 w-full lg:w-[55vw] absolute top-[35vh] max-lg:left-0 max-lg:right-0 text-gray-100 transition duration-300 ease-in-out">
                        <div className=" py-5">
                            <h3 className="text-xl lg:text-2xl font-semibold">PT. Mulse Citra Nusa</h3>
                            <h1 className="text-4xl lg:text-7xl font-bold pb-5">Jasa Kontruksi dan Pengadaan Barang</h1>
                            <p className="md:text-xl font-medium">Solusi konstruksi berkualitas yang memenuhi standar industri terbaik dan didukung oleh tim profesional berpengalaman yang menangani setiap proyek dengan ketelitian serta keahlian. Dengan komitmen terhadap kualitas, kami menciptakan bangunan yang kokoh, fungsional, dan estetis untuk kepuasan maksimal.</p>
                            <div className="pt-5">
                                <button className="btn bg-sky-600 hover:bg-sky-700 dark:hover:bg-sky-700 text-gray-100 font-medium">E-Katalog</button>
                                <button className="btn ml-3 bg-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400 text-gray-700 font-medium">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-full md:max-w-[85rem] mx-auto md:absolute top-[100vh]">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7">
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 hidden xl:block xl:col-span-1" />
                    <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="text-center mb-4 px-[2rem]">
                                <svg className="w-[85px] h-[85px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C" />
                                    <path d="M10.4127 8.49812L10.5766 8.20419C11.2099 7.06807 11.5266 6.5 12 6.5C12.4734 6.5 12.7901 7.06806 13.4234 8.20419L13.5873 8.49813C13.7672 8.82097 13.8572 8.98239 13.9975 9.0889C14.1378 9.19541 14.3126 9.23495 14.6621 9.31402L14.9802 9.38601C16.2101 9.66428 16.825 9.80341 16.9713 10.2739C17.1176 10.7443 16.6984 11.2345 15.86 12.215L15.643 12.4686C15.4048 12.7472 15.2857 12.8865 15.2321 13.0589C15.1785 13.2312 15.1965 13.4171 15.2325 13.7888L15.2653 14.1272C15.3921 15.4353 15.4554 16.0894 15.0724 16.3801C14.6894 16.6709 14.1137 16.4058 12.9622 15.8756L12.6643 15.7384C12.337 15.5878 12.1734 15.5124 12 15.5124C11.8266 15.5124 11.663 15.5878 11.3357 15.7384L11.0378 15.8756C9.88633 16.4058 9.31059 16.6709 8.92757 16.3801C8.54456 16.0894 8.60794 15.4353 8.7347 14.1272L8.76749 13.7888C8.80351 13.4171 8.82152 13.2312 8.76793 13.0589C8.71434 12.8865 8.59521 12.7472 8.35696 12.4686L8.14005 12.215C7.30162 11.2345 6.88241 10.7443 7.02871 10.2739C7.17501 9.80341 7.78994 9.66427 9.01977 9.38601L9.33794 9.31402C9.68743 9.23495 9.86217 9.19541 10.0025 9.0889C10.1428 8.98239 10.2328 8.82097 10.4127 8.49812Z" fill="#1C274C" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition duration-300 ease-in-out">100% Quality</h2>
                                <p className="text-gray-600 dark:text-gray-100 mt-2 transition duration-300 ease-in-out">Dengan melalui serangkaian proses kontrol kualitas yang ketat, kami memastikan setiap detail diperhatikan demi kepuasan Anda.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sky-300 dark:bg-sky-700 transition duration-500 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="mb-4 px-[2rem]">
                                <svg className="w-[85px] h-[85px]" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512" xmlSpace="preserve">
                                    <g>
                                        <path className="st0" d="M435.95,287.525c32.51,0,58.87-26.343,58.87-58.853c0-32.51-26.361-58.871-58.87-58.871
		c-32.502,0-58.863,26.361-58.863,58.871C377.088,261.182,403.448,287.525,435.95,287.525z"/>
                                        <path className="st0" d="M511.327,344.251c-2.623-15.762-15.652-37.822-25.514-47.677c-1.299-1.306-7.105-1.608-8.673-0.636
		c-11.99,7.374-26.074,11.714-41.19,11.714c-15.099,0-29.184-4.34-41.175-11.714c-1.575-0.972-7.373-0.67-8.672,0.636
		c-2.757,2.757-5.765,6.427-8.698,10.683c7.935,14.94,14.228,30.81,16.499,44.476c2.27,13.7,1.533,26.67-2.138,38.494
		c13.038,4.717,28.673,6.787,44.183,6.787C476.404,397.014,517.804,382.987,511.327,344.251z"/>
                                        <path className="st0" d="M254.487,262.691c52.687,0,95.403-42.716,95.403-95.402c0-52.67-42.716-95.386-95.403-95.386
		c-52.678,0-95.378,42.716-95.378,95.386C159.109,219.975,201.808,262.691,254.487,262.691z"/>
                                        <path className="st0" d="M335.269,277.303c-2.07-2.061-11.471-2.588-14.027-1.006c-19.448,11.966-42.271,18.971-66.755,18.971
		c-24.466,0-47.3-7.005-66.738-18.971c-2.555-1.583-11.956-1.055-14.026,1.006c-16.021,16.004-37.136,51.782-41.384,77.288
		c-10.474,62.826,56.634,85.508,122.148,85.508c65.532,0,132.639-22.682,122.165-85.508
		C372.404,329.085,351.289,293.307,335.269,277.303z"/>
                                        <path className="st0" d="M76.049,287.525c32.502,0,58.862-26.343,58.862-58.853c0-32.51-26.36-58.871-58.862-58.871
		c-32.511,0-58.871,26.361-58.871,58.871C17.178,261.182,43.538,287.525,76.049,287.525z"/>
                                        <path className="st0" d="M115.094,351.733c2.414-14.353,9.225-31.253,17.764-46.88c-2.38-3.251-4.759-6.083-6.955-8.279
		c-1.299-1.306-7.097-1.608-8.672-0.636c-11.991,7.374-26.076,11.714-41.182,11.714c-15.108,0-29.202-4.34-41.183-11.714
		c-1.568-0.972-7.382-0.67-8.681,0.636c-9.887,9.854-22.882,31.915-25.514,47.677c-6.468,38.736,34.924,52.762,75.378,52.762
		c14.437,0,29.016-1.777,41.459-5.84C113.587,379.108,112.757,365.835,115.094,351.733z"/>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out">Qualified Team</h2>
                                <p className="text-gray-700 dark:text-gray-100 mt-2 transition duration-500 ease-in-out">Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi, kami siap memberikan solusi terbaik untuk kebutuhan Anda.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-sky-200 dark:bg-sky-600 transition duration-700 ease-in-out p-6 xl:col-span-2">
                        <div className="flex items-center">
                            <div className="mb-4 px-[2rem]">
                                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="800px" height="800px" viewBox="0 0 512 512" xmlSpace="preserve">
                                    <g>
                                        <path className="st0" d="M512,331.117c0-11.141-3.813-21.484-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375
		c5-7.625,7.969-16.703,7.969-26.484c0-26.859-21.75-48.641-48.625-48.641h-35.5h-0.047h-0.5h-2.078c-1.516,0-2.078,0-2.078,0
		c-0.422,0-0.797,0-1.313,0h-25.875c-6.688-0.297-13.406-1.047-18.766-2.469c-5.484-1.391-9.234-3.547-10.813-5.313
		c-2.766-3.141-3.328-5.141-3.438-8.438c-0.031-2.797,0.844-6.594,2.688-10.922c2.719-6.5,7.453-13.953,12.219-21.156
		c2.391-3.609,4.781-7.188,6.938-10.781s4.125-7.125,5.594-11.094c4.547-12.641,14.391-35.781,14.406-63.984
		c0.016-11.859-1.75-24.672-6.375-37.813c-3.953-11.281-10.063-20.344-17.766-26.609c-7.672-6.281-17-9.625-26.266-9.594
		c-11.031-0.016-21.719,4.641-29.875,12.719c-8.188,8.063-13.922,19.469-16.188,33.109c-0.719,4.453-2.969,12.453-6.594,21.891
		c-5.422,14.203-13.891,32.016-24.688,49.422c-10.781,17.422-23.969,34.422-38.469,47.219
		c-18.359,16.234-35.828,29.953-50.734,42.016c-14.922,12.141-27.234,22.344-35.766,32.828c-1.813,2.281-5.047,4.797-9.078,6.953
		c-6.016,3.266-13.641,5.688-19.578,7.094c-2.969,0.719-5.531,1.219-7.313,1.531c-0.469,0.078-0.719,0.109-1.063,0.172v-5.203
		H36.469C16.313,259.554,0,275.882,0,296.023v162.938c0,20.141,16.313,36.469,36.469,36.469h43.5
		c13.438,0,24.313-10.875,24.313-24.313v-1.203c0.031,0,9.594,0,38.906,0c5.375-0.047,16.094,1.625,28.75,4.391
		c19.156,4.109,43.328,10.453,66.859,15.969c23.609,5.484,46.344,10.219,64.266,10.906c19.047,0.719,33.078,1.016,44.203,1.016
		c23.703,0.031,34.531-1.469,50.734-3.266l0.406-0.063l22.75-3.266l0.219-0.047c23.078-3.75,40.75-23.656,40.75-47.875
		c0-3.141-0.406-6.156-1-9.094c6.219-2.688,11.875-6.5,16.406-11.391c8-8.578,12.953-20.219,12.938-32.907
		c0.016-7.313-1.656-14.219-4.563-20.391C501.344,365.804,512,349.82,512,331.117z M51.281,456.586c-9.25,0-16.75-7.5-16.75-16.75
		s7.5-16.75,16.75-16.75s16.75,7.5,16.75,16.75S60.531,456.586,51.281,456.586z M464.719,354.632
		c-5.078,0.297-9.453,3.609-11.094,8.422c-1.625,4.797-0.188,10.094,3.625,13.422c5.156,4.516,8.297,10.719,8.313,17.813
		c-0.016,6.234-2.359,11.719-6.266,15.922c-3.922,4.219-9.328,7-15.422,7.531c-4.188,0.359-7.969,2.859-9.938,6.578
		c-1.969,3.703-1.938,8.219,0.125,11.906c2.031,3.641,3.156,7.438,3.156,11.453c0,11.766-8.563,21.391-19.844,23.281l-22.313,3.219
		c-16.594,1.828-25.125,3.078-47.797,3.109c-10.672,0-24.422-0.297-43.297-1c-9.5-0.344-22.609-2.375-37.031-5.313
		c-21.656-4.422-46.375-10.813-68.547-16.156c-11.109-2.672-21.578-5.078-30.859-6.859c-9.344-1.766-17.313-2.938-24.344-2.969
		c-11.875,0-20.375,0-26.438,0V287.695c2.875-0.656,6.109-1.484,9.609-2.563c5.578-1.719,11.703-4.016,17.688-7.234
		c5.953-3.219,11.875-7.344,16.656-13.234c5.859-7.328,17.391-17.281,32.063-29.109c14.688-11.891,32.547-25.922,51.547-42.719
		c22.688-20.078,40.75-46.766,53.969-71.578c6.594-12.406,11.969-24.344,15.969-34.844c4.016-10.563,6.688-19.469,7.906-26.703
		c1.531-9.219,5.125-15.531,9.094-19.453c4-3.906,8.297-5.516,12.375-5.531c3.453,0.016,6.938,1.109,10.531,4
		c3.594,2.906,7.25,7.797,9.969,15.516c3.609,10.297,4.984,20.156,5,29.578c0,22.469-7.969,42.031-12.906,55.438
		c-0.656,1.891-2.688,5.578-5.406,9.813c-4.109,6.453-9.703,14.313-14.469,23.016c-4.719,8.734-9,18.438-9.094,29.672
		c-0.094,8.656,3.219,18.156,10.172,25.453c6.484,6.844,14.641,10.25,22.688,12.406c8.125,2.125,16.484,2.922,24.328,3.266
		l0.531,0.016h26.109c0.516,0,0.891,0,1.313,0c0,0,1,0,2.078,0c0.094,0,0.172,0,0.281,0c0.719,0,1.344,0,1.797,0
		c0.234,0,0.453,0,0.5,0h0.047h35.5c13.078,0.016,23.688,10.625,23.703,23.719c0,8.109-4.078,15.203-10.328,19.531
		c-4,2.75-6.031,7.547-5.25,12.328c0.813,4.781,4.281,8.641,8.953,9.953c5.016,1.391,9.406,4.391,12.5,8.359
		c3.078,3.984,4.891,8.859,4.891,14.328C487.094,343.679,477.219,353.882,464.719,354.632z"/>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition duration-700 ease-in-out">Guaranteed</h2>
                                <p className="text-gray-700 dark:text-gray-100 mt-2 transition duration-700 ease-in-out">Jika Anda merasa tidak puas, kami siap memberikan solusi atau pengembalian dana sesuai ketentuan yang berlaku.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
