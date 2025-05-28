"use client";
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";
import { Button } from "@/components/atomic/Button";

const Section = styled.section`
  padding: 2rem 1rem;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;
const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

export default function ServicesOverview() {
  return (
    <Section>
      <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
        <Title>Our Services</Title>
        <ServicesList>
          <Card>Individual Counseling</Card>
          <Card>Couples & Family Therapy</Card>
          <Card>Workshops & Groups</Card>
        </ServicesList>
        <Button as="a" href="/services" variant="secondary" style={{ marginTop: '2rem' }}>
          View All Services
        </Button>
      </Card>
    </Section>
  );
} 