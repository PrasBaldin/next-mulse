import Image from "next/image";
import MulseSvg from "@/public/img/mulse.svg"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <Image src={MulseSvg} alt="img" className="w-[8rem] mr-4" />
                    <p className="text-sm mt-2">
                        PT MULSE CITRA NUSA adalah perusahaan yang bergerak di bidang teknologi dan inovasi,
                        menyediakan solusi digital terbaik untuk kebutuhan bisnis Anda.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <nav className="flex flex-col mt-2 space-y-2">
                        <a href="#" className="hover:underline">Beranda</a>
                        <a href="#" className="hover:underline">Tentang Kami</a>
                        <a href="#" className="hover:underline">Layanan</a>
                        <a href="#" className="hover:underline">Kontak</a>
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-lg font-semibold">Kontak</h2>
                    <div className="mt-2">
                        <p className="text-sm">icon address with svg</p>
                        <p className="text-sm"> : </p>
                        <a href="maps/google.com/">Jl. SMA 14 B, Cililitan, Keramat Jati, Jakarta Timur</a>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm">icon email with svg</p>
                        <p className="text-sm"> : </p>
                        <a href="mailto:info@mulse.id">info@mulse.id</a>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm">icon whatsApp with svg</p>
                        <p className="text-sm"> : </p>
                        <a href="whatsapp/">+62 852 6006 2002</a>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm">icon telepon with svg</p>
                        <p className="text-sm"> : </p>
                        <a href="tel:02122049859">021 2204 9859</a>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Twitter</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
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
