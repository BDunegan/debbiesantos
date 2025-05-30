"use client";

/**
 * HeroSection for the Home page with a sample image, heading, subtitle, and CTA button.
 * @returns {JSX.Element}
 */
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atomic/Button";
import Image from "next/image";
import { Card } from "@/components/atomic/Card";
import { theme } from "@/lib/theme";
import HeroAboutPreview from "./HeroAboutPreview";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};
  text-align: center;
  background: linear-gradient(rgba(60, 0, 0, 0.45), rgba(60, 0, 0, 0.55)), url('/sunset.jpg') center center / cover no-repeat;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 700px) {
    min-height: 70vh;
    background-attachment: scroll;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.heading};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const HeroSection: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Card boxShadow={theme.shadow.md}>
        <HeroAboutPreview />
      </Card>
    </Wrapper>
  );
};

export default HeroSection; 