import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/SEO/LocalBusinessSchema";
import StyledComponentsRegistry from '@/lib/registry';
import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Debbie Santos - Licensed Professional Counselor",
  description: "Professional counseling services for individuals, couples, and families in Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Default Open Graph & Twitter Card tags */}
        <meta property="og:title" content="Debbie Santos Counseling" />
        <meta property="og:description" content="Empowering you to thrive with compassionate, expert support in College Station, TX." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://debbiesantos.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debbie Santos Counseling" />
        <meta name="twitter:description" content="Empowering you to thrive with compassionate, expert support in College Station, TX." />
        <meta name="twitter:image" content="/og-image.png" />
        <LocalBusinessSchema />
      </head>
      <body className={inter.variable}>
        <StyledComponentsRegistry>
          <ThemeRegistry>
            <MainLayout header={<Header />} footer={<Footer />}>
              {children}
            </MainLayout>
          </ThemeRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
