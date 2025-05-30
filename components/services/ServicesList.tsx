"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  padding: ${({ theme }) => theme.space.lg};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.space.xl};
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, ${({ theme }) => theme.colors.purpleLight}, transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:not(:first-child)::before {
      display: none;
    }
    border-bottom: 2px solid ${({ theme }) => theme.colors.purpleLight};
    padding-bottom: ${({ theme }) => theme.space.xl};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.neutral700};
  line-height: 1.5;
  position: relative;
  padding-left: ${({ theme }) => theme.space.lg};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.purpleLight};
  }
`;

const services = {
  individual: [
    "Addiction And Recovery",
    "Depression And Anxiety",
    "Eating Disorders",
    "Grief and Loss",
    "Panic Attacks and Panic Disorder",
    "Phobias",
    "Stress Management"
  ],
  relationships: [
    "Couples Counseling",
    "Family Therapy",
    "Conflict Resolution",
    "Intimacy and Relationship Issues",
    "Communication Skills",
    "Trust Building",
    "Blended Family Support"
  ],
  professional: [
    "Work and Career Issues",
    "Professional Development",
    "Work-Life Balance",
    "Leadership Skills",
    "Team Dynamics",
    "Career Transitions",
    "Burnout Prevention"
  ]
};

export default function ServicesList() {
  return (
    <Section>
      <Title>Our Services</Title>
      <ContentWrapper>
        <ServiceColumn>
          <CategoryTitle>Individual Counseling</CategoryTitle>
          <List>
            {services.individual.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
        <ServiceColumn>
          <CategoryTitle>Relationships</CategoryTitle>
          <List>
            {services.relationships.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
        <ServiceColumn>
          <CategoryTitle>Professional Development</CategoryTitle>
          <List>
            {services.professional.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
      </ContentWrapper>
    </Section>
  );
} 