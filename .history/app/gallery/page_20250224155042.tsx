import React from "react";
import Link from "next/link";

const GalleryPage = () => {
  return (
    <>
      <section className="mt-[72px] lg:mt-[112px]">
        <div className="banner py-[100px] bg-sky-100">
          <div className="container">
            <div className="banner-content">
              <h4 className="text-3xl font-semibold text-gray-700">
                Gallery Page
              </h4>
              <ul className="breadcrumbs flex gap-2 font-medium">
                <li>
                  <Link href="/" className="text-sky-500">
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
      </section>
      <section className="py-20">
        <div className="container">
          <div className="text-center text-3xl font-semibold text-gray-700 mb-8">
            <h3>
              OUR
              <br />
              PROJECTS
            </h3>
            <div className="relative my-2">
              <div className="w-[150px] h-1 absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="card bg-white shadow-md rounded p-4">
              <span>gambar 1</span>
            </div>
            <div className="card bg-white shadow-md rounded p-4">
              <span>gambar 1</span>
            </div>
            <div className="card bg-white shadow-md rounded p-4">
              <span>gambar 1</span>
            </div>
            <div className="card bg-white shadow-md rounded p-4">
              <span>gambar 1</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
