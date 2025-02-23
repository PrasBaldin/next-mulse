const ServicesPage = () => {
    return (
        <>
            <section className="Services container">
                <section class="w-full flex">
                    <div class="w-1/2 bg-blue-500">
                        <div class="container mx-auto p-4">
                            <p>Konten di sisi kiri</p>
                        </div>
                    </div>
                    <div class="w-1/2 bg-red-500">
                        <div class="container mx-auto p-4">
                            <p>Konten di sisi kanan</p>
                        </div>
                    </div>
                </section>

                {/* <div className="flex flex-col lg:flex-row items-center">
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
                </div> */}
            </section>
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
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Card Layanan 1 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service1.svg" alt="Konstruksi Bangunan" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Konstruksi Bangunan
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Menyediakan solusi konstruksi bangunan yang inovatif dan berkualitas tinggi untuk berbagai proyek.
//                 </p>
//             </div>
//             {/* Card Layanan 2 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service2.svg" alt="Pengadaan Material" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Pengadaan Material
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Pengadaan material berkualitas dengan proses cepat dan efisien untuk mendukung setiap proyek konstruksi.
//                 </p>
//             </div>
//             {/* Card Layanan 3 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service3.svg" alt="Desain Arsitektur" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Desain Arsitektur
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Menyediakan layanan desain arsitektur kreatif dan inovatif untuk menciptakan bangunan yang unik dan fungsional.
//                 </p>
//             </div>
//             {/* Card Layanan 4 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service4.svg" alt="Renovasi &amp; Perbaikan" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Renovasi &amp; Perbaikan
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Layanan renovasi dan perbaikan bangunan dengan pendekatan profesional dan efisien untuk meningkatkan nilai properti Anda.
//                 </p>
//             </div>
//             {/* Card Layanan 5 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service5.svg" alt="Konsultasi Proyek" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Konsultasi Proyek
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Menawarkan konsultasi menyeluruh untuk memastikan setiap tahap proyek berjalan dengan lancar dan tepat sasaran.
//                 </p>
//             </div>
//             {/* Card Layanan 6 */}
//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-2xl transition duration-300">
//                 <div className="mb-4 flex justify-center">
//                     <img src="/img/service6.svg" alt="Manajemen Proyek" className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
//                     Manajemen Proyek
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-center">
//                     Layanan manajemen proyek terintegrasi yang memastikan pengawasan dan koordinasi setiap aspek proyek secara optimal.
//                 </p>
//             </div>
//         </div>
//     </div>
// </section>