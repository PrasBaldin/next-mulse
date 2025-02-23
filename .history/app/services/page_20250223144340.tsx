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
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service1.svg" alt="Konstruksi Bangunan" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Konstruksi Bangunan
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.
                                    </p>
                                </div>
                                {/* Card Layanan 4 */}
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
                                {/* Card Layanan 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service2.svg" alt="Pengadaan Material" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Pengadaan Material
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Pengadaan material berkualitas dengan proses cepat dan efisien untuk mendukung setiap proyek konstruksi.
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
                                {/* Card Layanan 5 */}
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
                                {/* Card Layanan 6 */}
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
                                    <div className="mb-4 flex justify-center">
                                        <img src="/img/service6.svg" alt="Manajemen Proyek" className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                                        Manajemen Proyek
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Layanan manajemen proyek terintegrasi yang memastikan pengawasan dan koordinasi setiap aspek proyek secara optimal.
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