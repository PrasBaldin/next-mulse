import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-sky-500 py-20 flex justify-center text-center">
          <h3 className="text-3xl font-semibold">Recent Work</h3>
        </div>
        <div className="container">
          <div></div>
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
