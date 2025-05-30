"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${theme.space.sm};
`;

const HeadshotImage = styled(Image)`
  border-radius: 50%;
  border: 3px solid ${theme.colors.purpleLight};
  box-shadow: ${theme.shadow.md};
  object-fit: cover; /* Ensure image covers the area, maintaining aspect ratio */
`;

const NameTitle = styled.h2`
  font-size: ${theme.font.subheading};
  color: ${theme.colors.maroon};
  margin-top: ${theme.space.xs};
  margin-bottom: ${theme.space.xs};
`;

const Snippet = styled.p`
  font-size: ${theme.font.size};
  line-height: 1.6;
  color: ${theme.colors.neutral700};
  max-width: 90%; /* Ensure text doesn't stretch too wide */
`;

const HeroAboutPreview: React.FC = () => {
  return (
    <PreviewWrapper>
      <HeadshotImage
        src="/headshot.jpg"
        alt="Debbie Santos - Counselor"
        width={150} // Increased size
        height={150} // Increased size, assuming square for circular display
        priority
      />
      <NameTitle>Debbie Santos, MA, LPC</NameTitle>
      <Snippet>
        Guiding you towards growth and well-being with compassionate,
        solution-focused therapy. Let\'s uncover your true potential.
      </Snippet>
    </PreviewWrapper>
  );
};

export default HeroAboutPreview; 