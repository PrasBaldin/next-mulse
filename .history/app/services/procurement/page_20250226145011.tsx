import Link from "next/link";
import Image from "next/image";

const ProcurementPage = () => {
  const procurement = [
    {
      title: "Alat Perlengkapan Kantor",
      img: "/img/proc-office.webp",
    },
    {
      title: "Alat Kesehatan",
      img: "/img/proc-medical.webp",
    },
    {
      title: "Alat Kebersihan",
      img: "/img/proc-cleaning.webp",
    },
    {
      title: "Alat Elektronik",
      img: "/img/proc-electronic.webp",
    },
    {
      title: "Seragam dan Pakaian",
      img: "/img/proc-apparel.webp",
    },
    {
      title: "Souvenir",
      img: "/img/proc-souvenir.webp",
    },
  ];

  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner">
          <div className="banner-mask"></div>
          <div className="container z-[1] relative">
            <div className="banner-content">
              <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition duration-500 ease-in-out">
                Pengadaan Barang
              </h4>
              <ul className="breadcrumbs">
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="text-gray-900 dark:text-gray-100 transition duration-500 ease-in-out">
                  /
                </li>
                <li>
                  <Link href="/gallery" className="text-sky-500">
                    Procurement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container text-center">
          <div className="text-center">
            <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
              Pengadaan Barang
            </h4>
            <h3 className="py-2 my-2 mx-auto w-3/4 text-gray-700 dark:text-gray-100 transition duration-500 ease-in-out text-xl">
              Kami menyediakan berbagai kebutuhan barang untuk mendukung
              operasional bisnis dan organisasi Anda
            </h3>
          </div>
        </div>
        <div className="service-content grid grid-cols-2 lg:grid-cols-3 gap-3">
          {procurement.map((procurement, index) => (
            <div
              key={index}
              className="card bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-500 ease-in-out rounded"
            >
              <div className="card-img rounded">
                <Image
                  src={procurement.img}
                  alt="img"
                  width={1000}
                  height={100}
                  className="rounded-t"
                />
              </div>
              <div className="p-8">
                <div className="card-title text-xl font-semibold pb-3 flex gap-2 items-center">
                  {/* <procurement.icon /> */}
                  <h4>{procurement.title}</h4>
                </div>
                <div className="card-desc pb-3">
                  {/* <p>{procurement.desc}</p> */}
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=6285260062002&text=Hallo%20Mulse!%20saya%20membutuhkan%20bantuan%20terkait%20layanan%20di%20mulse.id"
                  target="_blank"
                >
                  <button className="btn btn-primary">Hubungi Kami</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProcurementPage;
