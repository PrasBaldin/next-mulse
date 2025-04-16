"use client";
import Hero from "@/components/hero";
import AboutContent from "./about/aboutContent";
import ServicesContent from "./services/servicesContent";
import RecentWork from "./gallery/recentWork";
import ContactContent from "./contact/contactContent";
import ClientPartner from "./about/clientPartner";
import { setRequestLocale } from "next-intl/server";
import { use, useEffect } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

// export default function IndexPage() {
export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  useEffect(() => {
    const isEdge = navigator.userAgent.includes("Edg");

    // Pilih elemen yang akan dimodifikasi
    const container = document.querySelector(".container");
    const leftContainer = document.querySelector(".left-container");
    const rightContainer = document.querySelector(".right-container");

    if (isEdge) {
      // Jika browser adalah Edge, ubah ukuran max-width elemen layanan
      if (leftContainer) leftContainer.style.maxWidth = "529.400px";
      if (rightContainer) rightContainer.style.maxWidth = "494.600px";
    } else {
      // Jika browser adalah selain Edge (Chrome, Firefox, dll.), ubah margin dan padding
      if (container) {
        container.style.paddingLeft = "20px";
        container.style.paddingRight = "20px";
      }
      if (leftContainer) leftContainer.style.maxWidth = "524.400px";
      if (rightContainer) rightContainer.style.maxWidth = "489.600px";
    }
  }, []);

  return (
    <>
      <Hero />
      <section className="relative pb-10 pt-[4rem] md:pt-[16rem] lg:pt-[15rem] xl:pt-[13rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/about-bg-1.webp')" }}
        >
          <div className="about-mask absolute inset-0 bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
        </div>
        <AboutContent />
      </section>
      <ServicesContent />
      <RecentWork />
      <ClientPartner />
      <ContactContent />
    </>
  );
}
