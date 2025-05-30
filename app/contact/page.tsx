import { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Debbie Santos",
  description: "Get in touch with Debbie Santos for therapy and counseling services. Schedule a consultation or learn more about available services.",
};

export default function Contact() {
  return <ContactContent />;
} 