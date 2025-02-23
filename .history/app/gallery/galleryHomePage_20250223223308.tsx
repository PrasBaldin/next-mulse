import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-sky-400 py-10"></div>
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

export default GalleryHomePage;
