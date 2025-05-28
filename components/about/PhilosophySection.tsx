"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const Text = styled.p`
  font-size: 1rem;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

export default function PhilosophySection() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Philosophy & Approach</Title>
        <Text>
          By applying complementary therapy approaches and techniques, we will unearth long-standing behavior patterns or negative perceptions that may be holding you back from experiencing a more fulfilling and meaningful life.
        </Text>
      </Card>
    </Section>
  );
} 