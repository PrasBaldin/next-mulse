const ServicesPage = () => {
    return (
        <>
            <section className="w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 bg-sky-200">
                    <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] ml-auto mr-auto lg:mr-0 px-4 lg:pr-10">
                        <div className="py-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Card Layanan 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                <svg className="w-6 h-6" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xmlSpace="preserve">
<g>
	<path d="M360.102,240.012l10.156-10.266c0,0,15.609-13.406,33.406-7.328c30.984,10.578,66.781-0.875,91.609-25.734
		c7.063-7.063,15.641-21.234,15.641-21.234c0.984-1.344,1.328-3.047,0.922-4.672l-1.922-7.906c-0.359-1.484-1.313-2.75-2.625-3.531
		c-1.313-0.766-2.891-0.969-4.344-0.547l-60.984,16.969c-2.266,0.625-4.688-0.219-6.063-2.109l-28.015-38.594
		c-0.859-1.172-1.219-2.641-1.016-4.063l5.641-41c0.297-2.234,1.891-4.047,4.063-4.656l64.406-17.922
		c2.906-0.813,4.672-3.813,3.953-6.766l-2.547-10.359c-0.344-1.469-1.281-2.719-2.563-3.5c0,0-5.047-3.344-8.719-5.234
		c-36.578-18.891-82.64-13.031-113.312,17.656c-22.656,22.656-31.531,53.688-27.375,83.156c3.203,22.656,1.703,34.703-8.078,45.047
		c-0.891,0.922-3.703,3.734-8.047,8L360.102,240.012z"/>
	<path d="M211.383,295.418C143.024,361.652,68.461,433.715,68.461,433.715c-2.547,2.438-4,5.797-4.047,9.313
		c-0.047,3.5,1.344,6.891,3.813,9.375l31.938,31.938c2.5,2.484,5.875,3.859,9.391,3.813c3.516-0.031,6.859-1.5,9.281-4.031
		l139.328-140.953L211.383,295.418z"/>
	<path d="M501.43,451.371c2.484-2.484,3.859-5.859,3.813-9.375c-0.031-3.516-1.5-6.859-4.031-9.297L227.415,166.246
		l-43.953,43.969L450.805,483.09c2.438,2.547,5.781,4,9.297,4.047s6.891-1.344,9.391-3.828L501.43,451.371z"/>
	<path d="M254.196,32.621c-32.969-12.859-86.281-14.719-117.156,16.141c-24.313,24.313-59.875,59.891-59.875,59.891
		c-12.672,12.656-0.906,25.219-10.266,34.563c-9.359,9.359-24.313,0-32.734,8.422L3.29,182.527c-4.391,4.375-4.391,11.5,0,15.891
		l43.016,43.016c4.391,4.391,11.516,4.391,15.906,0l30.875-30.875c8.438-8.422-0.938-23.375,8.438-32.719
		c12.609-12.625,26.375-10.484,34.328-2.547l15.891,15.891l17.219,4.531l43.953-43.953l-5.063-16.688
		c-14.016-14.031-16.016-30.266-7.234-39.047c13.594-13.594,36.047-33.234,57.078-41.656
		C271.102,49.012,267.055,35.668,254.196,32.621z M194.571,103.48c-0.063,0.047,5.859-7.281,5.969-7.375L194.571,103.48z"/>
</g>
</svg>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Konstruksi Bangunan
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.
                                    </p>
                                </div>
                                {/* Card Layanan 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service4.svg" alt="Renovasi &amp; Perbaikan" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Renovasi &amp; Perbaikan
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Layanan renovasi dan perbaikan bangunan dengan pendekatan profesional dan efisien untuk meningkatkan nilai properti Anda.
                                    </p>
                                </div>
                                {/* Card Layanan 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service3.svg" alt="Desain Arsitektur" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Desain Arsitektur
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menyediakan layanan desain arsitektur kreatif dan inovatif untuk menciptakan bangunan yang unik dan fungsional.
                                    </p>
                                </div>
                                {/* Card Layanan 4 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service5.svg" alt="Konsultasi Proyek" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Konsultasi Proyek
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menawarkan konsultasi menyeluruh untuk memastikan setiap tahap proyek berjalan dengan lancar dan tepat sasaran.
                                    </p>
                                </div>
                                {/* Card Layanan 5 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service2.svg" alt="Pengadaan Material" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Waterproofing
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menyediakan solusi waterproofing yang handal dan tahan lama untuk melindungi bangunan dari kebocoran serta kerusakan akibat kelembapan.
                                    </p>
                                </div>
                                {/* Card Layanan 6 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service6.svg" alt="Manajemen Proyek" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Electrical Engineering
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menyediakan layanan perancangan dan instalasi sistem kelistrikan yang aman, efisien, dan sesuai standar untuk mendukung infrastruktur modern.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-gray-800 text-gray-100">
                    <div className="sm:max-w-[640px] md:max-w-[768px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] ml-auto mr-auto lg:ml-0 px-4 lg:pl-10">
                        <div className="py-20">
                            <h3 className="mb-4 text-4xl font-bold">Our Services</h3>
                            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae commodi magnam soluta illum laboriosam exercitationem modi aperiam dolorum eligendi nemo!</p>
                            <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas at laudantium ipsum culpa, voluptatum sapiente hic tempora cum quaerat? Odit id ullam sint cumque rerum a sed quae nulla incidunt sapiente esse at, minima corporis earum animi adipisci repellat temporibus excepturi sunt! Voluptatibus tempore fuga aut ipsa recusandae omnis consectetur?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore adipisci numquam obcaecati. Repellat nesciunt dolorum tenetur, dolor unde veritatis aliquam reiciendis quas, et veniam eius id placeat sequi? Maxime voluptate velit officia ducimus totam.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="Services container"> 
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 py-16 bg-gradient-to-b from-sky-200 to-sky-500 dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">
                        <div className="container">
                            <div className="Services-left">
                                <span>content</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 bg-gradient-to-b from-gray-700 to-gray-900 dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">
                        <div className="container">
                            <div className="Services-right">
                                <span>content right</span>
                            </div>
                        </div>
                    </div>
                </div> 
                </section>*/}
        </>
    );
};

export default ServicesPage;

// <section className="py-16 bg-gray-50 dark:bg-gray-900">
//     <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 relative inline-block">
//             Layanan Kami
//             <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></span>
//         </h1>
        
//     </div>
// </section>