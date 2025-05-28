import PoliciesContent from "@/components/policies/PoliciesContent";
import DownloadableForms from "@/components/policies/DownloadableForms";
import FAQSection from "@/components/policies/FAQSection";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Policies & Forms | Debbie Santos Counseling",
  description: "Review privacy, office policies, and download client forms for Debbie Santos Counseling in College Station, TX.",
};

export default function PoliciesPage() {
  return (
    <PageContainer>
      <PoliciesContent />
      <DownloadableForms />
      <FAQSection />
    </PageContainer>
  );
} 