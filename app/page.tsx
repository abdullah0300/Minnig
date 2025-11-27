import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import CoreExpertise from "@/components/CoreExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white relative w-full min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <CoreExpertise />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
