"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atomic/Button";
import CallToAction from "@/components/atomic/CallToAction";

const Section = styled.section`
  padding: 2rem 1rem 3rem 1rem;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.purple};
`;
const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

export default function AboutCallToAction() {
  return (
    <CallToAction
      title="Ready to connect?"
      buttonText="Contact Debbie"
      buttonHref="/contact"
    />
  );
} 