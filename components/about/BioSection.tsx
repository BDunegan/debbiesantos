"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const Bio = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

export default function BioSection() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>About</Title>
        <Bio>
          Today you are one step closer to a new you where you feel empowered and on a positive path to growth and well-being.<br /><br />
          As a solution-focused therapist, I aim to help you uncover your true potential and lead a life worth celebrating. While we can't change past difficult situations, we can work together to better understand and resolve challenges in your life. By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.<br /><br />
          If you're looking for extra support and guidance through a challenging situation, or you're just ready to move in a new direction in your life, I look forward to working with you to achieve your goals.
        </Bio>
      </Card>
    </Section>
  );
} 