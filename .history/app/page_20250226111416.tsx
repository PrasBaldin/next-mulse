"use client";
import Hero from "@/components/hero";
import AboutContent from "./about/aboutContent";
import ServicesPage from "./services/page";
import RecentWork from "./gallery/recentWork";
import ContactContent from "./contact/contactContent";
import ClientPartner from "./about/clientPartner";

const IndexPage = () => (
  <>
    <Hero />
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/about-bg-1.webp')" }}
      >
        <div className="about-mask absolute inset-0 bg-white bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-90 transition duration-500 ease-in-out" />
      </div>
      <AboutContent />
    </section>
    <ServicesPage />
    <RecentWork />
    <ClientPartner />
    <ContactContent />
  </>
);

export default IndexPage;
