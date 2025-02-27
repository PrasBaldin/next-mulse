import React from "react";

import AnimationFadeIn from "@/components/animationFadeIn";

const VisiMisi = () => {
  return (
    <>
      {/* Visi Misi */}
      <div className="pt-1 lg:pt-4 pb-20 bg-gradient-to-b from-white to-gray-200 dark:from-gray-900 dark:to-gray-800 z-[2]">
        <div className="container mx-auto px-4">
          <h4 className="mb-10 text-xl text-sky-500 font-bold tracking-[.25em] uppercase relative inline-block text-center w-full">
            Visi &amp; Misi
          </h4>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {/* Card Visi */}
            <AnimationFadeIn
              className="flex-1 h-full"
              delay={0.2}
              duration={1}
              direction="up"
              triggerOnExit
            >
              <div className="bg-white dark:bg-gradient-to-br dark:form-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                  Visi
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Menjadi mitra terpercaya dalam setiap proyek dengan
                  mengutamakan profesionalisme, inovasi, dan kepuasan klien.
                </p>
              </div>
            </AnimationFadeIn>
            {/* Card Misi */}
            <AnimationFadeIn
              className="flex-1 h-full"
              delay={0.3}
              duration={1}
              direction="down"
              triggerOnExit
            >
              <div className="bg-white dark:bg-gradient-to-bl dark:form-gray-700 dark:to-gray-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-sky-400 z-[2]">
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
                  Misi
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Pelayanan konstruksi berkualitas tinggi</li>
                  <li>Pengadaan barang andal dan tepat waktu</li>
                  <li>Komitmen terhadap inovasi dan kepuasan klien</li>
                </ul>
              </div>
            </AnimationFadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
