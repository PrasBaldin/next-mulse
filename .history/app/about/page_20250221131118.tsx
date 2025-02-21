const AboutPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Kolom gambar */}
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="https://via.placeholder.com/500"
                            alt="Perusahaan kami"
                            className="rounded shadow"
                        />
                    </div>
                    {/* Kolom deskripsi */}
                    <div className="w-full md:w-1/2 p-4">
                        <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
                        <p className="mb-4">
                            Kami adalah perusahaan yang bergerak di bidang jasa konstruksi dan pengadaan barang. Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan layanan terbaik dalam mewujudkan proyek konstruksi yang inovatif dan berkualitas.
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
        </>
    )
}

export default AboutPage
