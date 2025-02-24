import React from "react";
import Link from "next/link";

const GalleryPage = () => {
  return (
    <>
      <section className="py-20">
        <div className="banner py-50">
          <div className="container">
            <div className="banner-content">
              <h4>Gallery Page</h4>
              <ul className="breadcrumbs">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
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
