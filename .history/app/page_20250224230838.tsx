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
    <AboutContent />
    <ServicesPage />
    <RecentWork />
    <ClientPartner />
    <ContactContent />
  </>
);

export default IndexPage;
