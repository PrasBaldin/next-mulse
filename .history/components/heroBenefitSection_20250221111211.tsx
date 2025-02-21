import { useEffect, useRef } from "react";
import "./hero.css";

import IconStar from "@/app/_assets/icon/iconStar";
import IconTeam from "@/app/_assets/icon/iconTeam";
import IconThumbUp from "@/app/_assets/icon/iconThumbUp";

const HeroBenefitSection = () => {
  const translateThreshold = 350;
  const benefitRef1 = useRef<HTMLDivElement>(null);
  const benefitRef2 = useRef<HTMLDivElement>(null);
  const benefitRef3 = useRef<HTMLDivElement>(null);

  const benefitRefs = [benefitRef1, benefitRef2, benefitRef3];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          const progress = Math.min(scrollPos / translateThreshold, 1);

          // Benefit Elements Translation
          benefitRefs.forEach((ref, index) => {
            if (ref.current) {
              const initialTranslate = 1000 * (index + 1);
              const translateX = -initialTranslate + initialTranslate * progress;
              ref.current.style.transform = `translateX(${translateX}px)`;
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [benefitRefs]);

  const benefitData = [
    {
      class: "bg-sky-400 dark:bg-sky-800 duration-300 z-[4]",
      title: "100% Quality",
      description:
        "Dengan melalui serangkaian proses kontrol kualitas yang ketat, kami memastikan setiap detail diperhatikan demi kepuasan Anda.",
      Icon: IconStar,
    },
    {
      class: "bg-sky-300 dark:bg-sky-700 duration-500 z-[3]",
      title: "Qualified Team",
      description:
        "Dengan kombinasi pengetahuan yang mendalam dan dedikasi tinggi, kami siap memberikan solusi terbaik untuk kebutuhan Anda.",
      Icon: IconTeam,
    },
    {
      class: "bg-sky-200 dark:bg-sky-600 duration-700 z-[2]",
      title: "Guaranteed",
      description:
        "Jika Anda merasa tidak puas, kami siap memberikan solusi atau pengembalian dana sesuai ketentuan yang berlaku.",
      Icon: IconThumbUp,
    },
  ];

  return (
    <div className="benefit-section">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7">
        <div className="bg-sky-400 dark:bg-sky-800 transition duration-300 ease-in-out p-6 hidden xl:block xl:col-span-1 z-[5]" />
        {benefitRefs.map((ref, index) => {
          const IconComponent = benefitData[index].Icon;
          const initialTranslate = 1000 * (index + 1);
          return (
            <div key={index} ref={ref} className={`benefit-card ${benefitData[index].class}`} style={{ transform: `translateX(-${initialTranslate}px)` }}>
              <div className="flex items-center">
                <div className="text-center mb-4 px-[2rem]">
                  <IconComponent />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-sky-900 dark:text-gray-100 transition duration-300 ease-in-out">
                    {benefitData[index].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100 mt-2 transition duration-300 ease-in-out">
                    {benefitData[index].description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  )
}

export default HeroBenefitSection