import React from "react";
import Link from "next/link";

const GalleryPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner py-[100px] bg-sky-100 text-center">
          <div className="container">
            <div className="banner-content">
              <h4 className="text-3xl font-semibold text-gray-800">
                Gallery Page
              </h4>
              <ul className="breadcrumbs flex justify-center gap-2">
                <li>
                  <Link href="/" className="text-sky-700">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/gallery" className="text-gray-800">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <h3>Recent Work</h3>
          </div>
          <div className="card bg-white shadow-md rounded p-4">
            <span>gambar 1</span>
          </div>
          <div className="card bg-white shadow-md rounded p-4">
            <span>gambar 2</span>
          </div>
          <div className="card bg-white shadow-md rounded p-4">
            <span>gambar 3</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
