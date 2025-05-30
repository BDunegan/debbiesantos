import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutPreview from "@/components/home/AboutPreview";
import CallToAction from "@/components/home/CallToAction";
import HorizontalLine from "@/components/atomic/HorizontalLine";

export const metadata = {
  title: "Debbie Santos Counseling | College Station, TX",
  description: "Empowering you to thrive with compassionate, expert counseling in College Station, TX. Individual, couples, and family therapy.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HorizontalLine />
      <ServicesOverview />
      <HorizontalLine />
      <AboutPreview />
      <HorizontalLine />
      <CallToAction />
    </>
  );
}
