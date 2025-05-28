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

const Wrapper = styled.section`
  padding: 3rem 1rem 2rem 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.maroon};
  color: #fff;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const HeroSection: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
        <Title>Welcome</Title>
        <Subtitle>
          Today you are one step closer to a new you where you feel empowered and on a positive path to growth and well-being.
        </Subtitle>
        <p style={{ marginBottom: '1.5rem' }}>
          As a solution-focused therapist, I aim to help you uncover your true potential and lead a life worth celebrating. While we can't change past difficult situations, we can work together to better understand and resolve challenges in your life. By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          If you're looking for extra support and guidance through a challenging situation, or you're just ready to move in a new direction in your life, I look forward to working with you to achieve your goals.
        </p>
      </Card>
    </Wrapper>
  );
};

export default HeroSection; 