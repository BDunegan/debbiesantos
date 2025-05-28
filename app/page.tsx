import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import AboutPreview from "@/components/home/AboutPreview";
import CallToAction from "@/components/home/CallToAction";

export const metadata = {
  title: "Debbie Santos Counseling | College Station, TX",
  description: "Empowering you to thrive with compassionate, expert counseling in College Station, TX. Individual, couples, and family therapy.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <CallToAction />
    </>
  );
}
