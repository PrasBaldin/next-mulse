const AboutPage = () => {
    return (
        <>
            <section className="mt-0 pt-0 md:pt-[16rem] lg:pt-[15rem] xl:pt-[13rem] pb-[6rem]" style={{ backgroundImage: "url('/img/about-bg-1.webp')" }}>
                <div className="mas" />
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Kolom gambar */}
                        <div className="w-full lg:w-1/2 p-4 max-h-[500px] overflow-hidden">
                            <img
                                src="/img/about-profile.webp"
                                alt="About image"
                                className="rounded shadow h-[500px] w-[100%]"
                            />
                        </div>
                        {/* Kolom deskripsi */}
                        <div className="w-full lg:w-1/2 p-4">
                            <h1 className="text-3xl font-bold mb-4">Solusi Konstruksi & Pengadaan Barang</h1>
                            <p className="mb-4">
                                Kami adalah perusahaan yang mengintegrasikan layanan konstruksi terdepan dengan solusi pengadaan barang berkualitas tinggi untuk setiap proyek Anda.
                            </p>
                            <p className="mb-4">
                                Didirikan sejak tahun 2017, perusahaan kami telah tumbuh secara konsisten dengan semangat inovasi dan dedikasi tinggi terhadap kualitas. Kami terus mengembangkan layanan serta solusi terbaik guna memenuhi kebutuhan pasar yang dinamis dalam industri konstruksi dan pengadaan barang.
                            </p>
                            <p className="mb-4">
                                Dengan dukungan tim profesional dan komitmen untuk memberikan hasil optimal, kami optimis bahwa perjalanan pertumbuhan kami akan terus berlanjut, membuka peluang baru dan menetapkan standar keunggulan di masa depan.
                            </p>
                            <p className="mb-4">
                                Visi kami adalah menjadi mitra terpercaya bagi setiap proyek, dengan selalu mengutamakan profesionalisme, inovasi, dan kepuasan klien. Misi kami meliputi penyediaan solusi konstruksi yang efisien serta pengadaan barang yang tepat waktu dan berkualitas.
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Pelayanan konstruksi berkualitas tinggi</li>
                                <li>Pengadaan barang andal dan tepat waktu</li>
                                <li>Komitmen terhadap inovasi dan kepuasan klien</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage
