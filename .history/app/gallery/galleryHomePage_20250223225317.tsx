import React from "react";

const GalleryHomePage = () => {
  return (
    <>
      <section>
        <div className="bg-sky-500 dark:bg-sky-700 py-20 flex justify-center text-center">
          <h3 className="text-3xl font-semibold text-gray-100 mb-20 w-full">
            Recent Work
          </h3>
          <p className="w-full">desc</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 gap-0 relative top-[-100px]">
            <div className="card bg-red-100 shadow-md px-4 p-[20rem]">
              <span>gambar 1</span>
            </div>
            <div className="card bg-red-200 shadow-md px-4 p-[20rem]">
              <span>gambar 2</span>
            </div>
            <div className="card bg-red-300 shadow-md px-4 p-[20rem]">
              <span>gambar 3</span>
            </div>
            <div className="card bg-red-400 shadow-md px-4 p-[20rem]">
              <span>gambar 4</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryHomePage;
