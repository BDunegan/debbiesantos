"use client";
import React from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";
import HorizontalLine from "../atomic/HorizontalLine";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.sm};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
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

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`;

const QualificationColumn = styled.div`
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

const qualifications = {
  education: [
    "Master's in Counseling Psychology",
    "Bachelor's in Psychology",
    "Advanced Certification in Family Therapy"
  ],
  licenses: [
    "Licensed Professional Counselor (LPC)",
    "Certified Family Therapist",
    "State Board Certified"
  ],
  experience: [
    "10+ years of clinical experience",
    "Specialized in trauma-informed care",
    "Expert in solution-focused therapy"
  ]
};

export default function QualificationsList() {
  return (
    <Section>
      <Title>Professional Qualifications</Title>
      <HorizontalLine />
      <ContentWrapper>
        <QualificationColumn>
          <CategoryTitle>Education</CategoryTitle>
          <List>
            {qualifications.education.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </QualificationColumn>
        <QualificationColumn>
          <CategoryTitle>Licenses & Certifications</CategoryTitle>
          <List>
            {qualifications.licenses.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </QualificationColumn>
        <QualificationColumn>
          <CategoryTitle>Experience</CategoryTitle>
          <List>
            {qualifications.experience.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </QualificationColumn>
      </ContentWrapper>
    </Section>
  );
} 