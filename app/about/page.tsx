import BioSection from "@/components/about/BioSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import QualificationsList from "@/components/about/QualificationsList";
import CallToAction from "@/components/about/CallToAction";

export const metadata = {
  title: "About Debbie Santos | Debbie Santos Counseling",
  description: "Learn about Debbie Santos, her philosophy, and qualifications as a licensed counselor in College Station, TX.",
};

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <PhilosophySection />
      <QualificationsList />
      <CallToAction />
    </>
  );
} 