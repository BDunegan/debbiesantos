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
const Info = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

export default function ContactDetails() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Contact</Title>
        <Info>Dickinson, TX 77539</Info>
        <Info>(281) 803-8155</Info>
        <Info>I look forward to hearing from you</Info>
      </Card>
    </Section>
  );
} 