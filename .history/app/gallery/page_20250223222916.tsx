import React from "react";

const GalleryPage = () => {
  return (
    <>
      <section className="bg-sky-600 py-20">
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
