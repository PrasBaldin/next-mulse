import Hero from "@/components/hero";
import AboutContent from "./about/aboutContent";
import ServicesContent from "./services/servicesContent";
import RecentWork from "./gallery/recentWork";
import ContactContent from "./contact/contactContent";
import ClientPartner from "./about/clientPartner";
import { setRequestLocale } from "next-intl/server";
import { useNotEdge } from "./useEdge";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

// export default function IndexPage() {
export default function IndexPage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  useNotEdge();

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
