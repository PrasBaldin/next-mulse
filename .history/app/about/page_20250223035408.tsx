const AboutPage = () => {
    return (
        <>
            <section className="relative">
                {/* Background dan mask */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/about-bg-1.webp')" }} >
                    <div className="about-mask absolute inset-0 bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
                </div>
                {/* Konten */}
                <div className="container relative z-[2] pt-0 md:pt-[16rem] lg:pt-[15rem] xl:pt-[13rem] pb-[3rem]">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Kolom gambar */}
                        <div className="w-full lg:w-1/2 p-4 max-h-[500px] overflow-hidden">
                            <img src="/img/about-profile.webp" alt="About image" className="rounded shadow h-[500px] w-full" />
                        </div>
                        {/* Kolom deskripsi */}
                        <div className="w-full lg:w-1/2 p-4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out">
                            <h1 className="text-3xl font-bold mb-4">Solusi Konstruksi &amp; Pengadaan Barang</h1>
                            <p className="mb-4">
                                Kami adalah perusahaan yang mengintegrasikan layanan konstruksi terdepan dengan solusi pengadaan barang berkualitas tinggi untuk setiap proyek Anda.
                            </p>
                            <p className="mb-4">
                                Didirikan sejak tahun 2017, perusahaan kami telah tumbuh secara konsisten dengan semangat inovasi dan dedikasi tinggi terhadap kualitas. Kami terus mengembangkan layanan serta solusi terbaik guna memenuhi kebutuhan pasar yang dinamis dalam industri konstruksi dan pengadaan barang.
                            </p>
                            <p className="mb-4">
                                Dengan dukungan tim profesional dan komitmen untuk memberikan hasil optimal, kami optimis bahwa perjalanan pertumbuhan kami akan terus berlanjut, membuka peluang baru dan menetapkan standar keunggulan di masa depan.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Visi Misi Section dengan Aksen Garis Biru */}
                <div className="py-16 bg-gradient-to-b from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 z-[2]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-100 mb-12 relative inline-block">
                            Visi &amp; Misi Kami
                            <div className="w-full h-1 rounded mb-4 bg-gradient-to-r from-sky-400 to-transparant" />
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
                            {/* Card Visi */}
                            <div className="flex-1 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                                    Visi
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Menjadi mitra terpercaya dalam setiap proyek dengan mengutamakan profesionalisme, inovasi, dan kepuasan klien.
                                </p>
                            </div>
                            {/* Card Misi */}
                            <div className="flex-1 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                                    Misi
                                </h3>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                                    <li>Pelayanan konstruksi berkualitas tinggi</li>
                                    <li>Pengadaan barang andal dan tepat waktu</li>
                                    <li>Komitmen terhadap inovasi dan kepuasan klien</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
