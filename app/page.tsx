import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <main className="bg-white relative w-full min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAre />
    </main>
  );
}
