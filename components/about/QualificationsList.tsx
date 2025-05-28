"use client";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
`;
const List = styled.ul`
  list-style: disc inside;
  font-size: 1rem;
  margin: 0 auto;
  max-width: 340px;
  padding-left: 1rem;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
`;

export default function QualificationsList() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Qualifications</Title>
        <List>
          <li>Licensed Professional Counselor (LPC)</li>
          <li>Master's in Counseling Psychology</li>
          <li>10+ years of clinical experience</li>
          <li>Certified Family Therapist</li>
        </List>
      </Card>
    </Section>
  );
} 