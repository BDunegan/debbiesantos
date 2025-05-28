import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import PageContainer from "@/components/PageContainer";

export const metadata = {
  title: "Contact Debbie Santos | Debbie Santos Counseling",
  description: "Contact Debbie Santos for counseling appointments, questions, or more information. Serving College Station, TX and surrounding areas.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactForm />
      <ContactDetails />
    </PageContainer>
  );
} 