import Image from "next/image";
import React from "react";

const ClientPartner = () => {
  const clients = [
    {
      img: "/img/client-1.png",
    },
    {
      img: "/img/client-2.png",
    },
    {
      img: "/img/client-3.png",
    },
    {
      img: "/img/client-4.png",
    },
    {
      img: "/img/client-5.png",
    },
  ];
  return (
    <>
      <section className="py-20">
        <div className="container text-center">
          <h4 className="mb-3 text-sky-500 font-semibold tracking-[.25em] uppercase">
            Client & Partner
          </h4>
          <h3 className="w-full text-gray-700 dark:text-gray-100 text-3xl md:text-4xl font-bold">
            Menanamkan kepercayaan antar sesama
          </h3>
          <div className="py-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              {clients.map((item, index) => (
                <div key={index} className="items-center text-center">
                  <Image
                    src={item.img}
                    alt="client & partner"
                    width={200}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPartner;
