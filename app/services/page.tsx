import ServicesList from "@/components/services/ServicesList";
import TargetAudienceSection from "@/components/services/TargetAudienceSection";
import FAQSection from "@/components/services/FAQSection";
import CallToAction from "@/components/services/CallToAction";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Counseling Services | Debbie Santos Counseling",
  description: "Explore individual, couples, family therapy, and group counseling services offered by Debbie Santos in College Station, TX.",
};

export default function ServicesPage() {
  return (
    <PageContainer>
      <ServicesList />
      <TargetAudienceSection />
      <FAQSection />
      <CallToAction />
    </PageContainer>
  );
} 