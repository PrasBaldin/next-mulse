import Image from "next/image";
import MulseSvg from "@/public/img/mulse.svg"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <Image src={MulseSvg} alt="img" className="w-12 mr-4" />
                    <p className="text-sm mt-2">
                        PT MULSE CITRA NUSA adalah perusahaan yang bergerak di bidang teknologi dan inovasi,
                        menyediakan solusi digital terbaik untuk kebutuhan bisnis Anda.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-lg font-semibold">Navigasi</h2>
                    <nav className="flex flex-col mt-2 space-y-2">
                        <a href="#" className="hover:underline">Beranda</a>
                        <a href="#" className="hover:underline">Tentang Kami</a>
                        <a href="#" className="hover:underline">Layanan</a>
                        <a href="#" className="hover:underline">Kontak</a>
                    </nav>
                </div>

                {/* Contact & Social Media */}
                <div>
                    <h2 className="text-lg font-semibold">Kontak</h2>
                    <p className="text-sm mt-2">Email: info@mulsecitranusa.com</p>
                    <p className="text-sm">Telepon: +62 812-3456-7890</p>
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
