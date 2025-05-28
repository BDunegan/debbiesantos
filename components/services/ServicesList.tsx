"use client";
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";

const Section = styled.section`
  padding: 2rem 1rem 1rem 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const services = [
  "Addiction And Recovery",
  "Conflict Resolution",
  "Depression And Anxiety",
  "Eating Disorders",
  "Grief and Loss",
  "Grief Counseling",
  "Intimacy and Relationship Issues",
  "Panic Attacks and Panic Disorder",
  "Phobias",
  "Stress Management",
  "Work and Career Issues"
];

const ServicesList: React.FC = (): React.ReactElement => {
  return (
    <Section>
      <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
        <Title>Therapy for Individuals</Title>
        <h3 style={{ margin: '1rem 0 0.5rem 0' }}>Featured Services</h3>
        <List>
          {services.map((service) => (
            <Card key={service} boxShadow="0 2px 8px rgba(0,0,0,0.10)" style={{ margin: '0.5rem 0' }}>
              <strong>{service}</strong>
            </Card>
          ))}
        </List>
      </Card>
    </Section>
  );
};

export default ServicesList; 