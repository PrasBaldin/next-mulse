import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-sky-500 dark:bg-sky-700 py-20 flex justify-center text-center">
          <h3 className="text-3xl font-semibold text-gray-100 mb-10 w-full">
            Recent Work
          </h3>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-0 relative top-[-100px]">
            <div className="card bg-red-100 shadow-md p-[10rem]">
              <span>gambar 1</span>
            </div>
            <div className="card bg-red-200 shadow-md p-[10rem]">
              <span>gambar 2</span>
            </div>
            <div className="card bg-red-300 shadow-md p-[10rem]">
              <span>gambar 3</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHomePage;
