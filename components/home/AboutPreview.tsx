"use client";

/**
 * AboutPreview section for the Home page, with a sample image, bio, and CTA button.
 * @returns {JSX.Element}
 */
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";
import { Button } from "@/components/atomic/Button";
import Image from "next/image";

const Section = styled.section`
  padding: 2rem 1rem;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const Bio = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const AboutPreview: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
        <Title>Serenity Prayer</Title>
        <Bio>
          God grant me the serenity<br />
          To accept the things I cannot change;<br />
          Courage to change the things I can;<br />
          And wisdom to know the difference.
        </Bio>
      </Card>
    </Section>
  );
};

export default AboutPreview; 