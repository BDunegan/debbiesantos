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

export default function TargetAudienceSection() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Who I Help</Title>
        <Text>Adults, teens, couples, and families seeking support for anxiety, depression, relationships, and personal growth.</Text>
      </Card>
    </Section>
  );
} 