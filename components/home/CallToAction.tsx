"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atomic/Button";
import { Card } from "@/components/atomic/Card";
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

export default function HomeCallToAction() {
  return (
    <CallToAction
      title="Start the journey now. The best is yet to come."
      description="The future depends on what you do in the present."
      buttonText="APPOINTMENT REQUEST"
      buttonHref="/contact"
    />
  );
} 