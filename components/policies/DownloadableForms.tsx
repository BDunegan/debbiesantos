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
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
`;

export default function DownloadableForms() {
  return (
    <Section>
      <Card style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
        <Title>Downloadable Forms</Title>
        <List>
          <li><a href="#" download>Client Intake Form (PDF)</a></li>
          <li><a href="#" download>Consent to Treatment (PDF)</a></li>
        </List>
      </Card>
    </Section>
  );
} 