"use client";
import Hero from "@/components/hero";
import AboutContent from "./about/aboutContent";
import ServicesPage from "./services/page";
import RecentWork from "./gallery/recentWork";
import ContactContent from "./contact/contactContent";

const IndexPage = () => (
  <>
    <Hero />
    <AboutContent />
    <ServicesPage />
    <RecentWork />
    <ContactContent />
  </>
);

export default IndexPage;
