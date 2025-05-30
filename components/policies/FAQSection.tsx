"use client";

import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
`;
const Q = styled.dt`
  font-weight: bold;
  margin-top: 1rem;
`;
const A = styled.dd`
  margin-bottom: 1rem;
`;

export default function FAQSection() {
  return (
    <Section>
      <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
        <Title>Frequently Asked Questions</Title>
        <dl>
          <Q>How is my privacy protected?</Q>
          <A>Your information is kept confidential according to HIPAA guidelines.</A>
          <Q>Where can I find your office policies?</Q>
          <A>All office and privacy policies are available on this page and as downloadable forms.</A>
        </dl>
      </Card>
    </Section>
  );
} 