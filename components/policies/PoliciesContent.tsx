"use client";

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
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

export default function PoliciesContent() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Helpful Forms</Title>
        <Text>Click here to view and print forms for your appointment</Text>
      </Card>
    </Section>
  );
} 