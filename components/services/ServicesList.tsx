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
  font-size: ${({ theme }) => theme.font.size['2xl']};
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.maroon};
    padding-bottom: ${({ theme }) => theme.space.xl};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.maroon};
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
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  position: relative;
  padding-left: ${({ theme }) => theme.space.lg};

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.colors.maroon};
    font-size: 1.2em;
  }
`;

const services = {
  treatmentApproach: [
    "Cognitive-Behavioral (CBT)",
    "Eye Movement Desensitization Reprocessing (EMDR)",
    "Mindfulness-Based Cognitive Therapy",
    "Person-Centered",
    "Psychoeducational",
    "Solution-Focused Brief (SFBT)",
    "Strength-Based",
    "Trauma Focused",
    "Eclectic",
    "Holistic"
  ],
  specialties: [
    "Anxiety",
    "Trauma",
    "Pre-teens/Teens",
    "Serving children (8-12), teens, and adults",
    "Offering telehealth and in-person appointments"
  ],
  concerns: [
    "ADHD",
    "Anger Management",
    "Anxiety",
    "Behavioral Issues",
    "Coping Skills",
    "Depression",
    "Divorce",
    "Emotional Disturbance",
    "Grief",
    "Life Transitions",
    "Interpersonal Communication",
    "Mindfulness",
    "Parenting",
    "Peer relationships",
    "Relationship Issues",
    "School Issues",
    "Self Esteem",
    "Self-Harming",
    "Stress",
    "Trauma",
    "Suicide Ideations",
    "LGBTQIA+"
  ]
};

export default function ServicesList() {
  return (
    <Section>
      <Title>Our Services</Title>
      <ContentWrapper>
        <ServiceColumn>
          <CategoryTitle>Treatment Approach</CategoryTitle>
          <List>
            {services.treatmentApproach.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
        <ServiceColumn>
          <CategoryTitle>Specialties</CategoryTitle>
          <List>
            {services.specialties.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
        <ServiceColumn>
          <CategoryTitle>Concerns</CategoryTitle>
          <List>
            {services.concerns.map((service) => (
              <ListItem key={service}>{service}</ListItem>
            ))}
          </List>
        </ServiceColumn>
      </ContentWrapper>
    </Section>
  );
} 