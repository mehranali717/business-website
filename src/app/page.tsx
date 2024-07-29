import ArtShowcase from "@/components/ArtShowcase";
import BeforeProcess from "@/components/before-process";
import BookAudit from "@/components/book-audit";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LetsTalk from "@/components/lets-talk";
import OurProcess from "@/components/our-process";
import OurResult from "@/components/our-result";
import MyScript from "@/components/script";
import SuccessSolution from "@/components/success-solution";
import WeWill from "@/components/we-will";

export default function Home() {
  return (
    <main className="">
      <MyScript />
      <HeroSection />
      <ArtShowcase />
      <BookAudit />
      <Clients />
      <WeWill />
      <BeforeProcess />
      <OurProcess />
      <SuccessSolution />
      <OurResult />
      <FAQ />
      <LetsTalk />
      <Footer />
    </main>
  );
}
