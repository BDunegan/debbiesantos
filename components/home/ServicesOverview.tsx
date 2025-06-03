"use client";
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";
import Button from "@/components/atomic/Button";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/lib/theme";

const Section = styled.section`
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.sm};
  text-align: center;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.subheading};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.maroon};
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
  padding: 0 ${({ theme }) => theme.space.sm};
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const ServiceCard = styled(Card)<{ bg?: string }>`
  background: ${({ bg, theme }) => bg ? `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.75)), url('${bg}') center/cover no-repeat` : theme.colors.white};
  background-blend-mode: lighten;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.space.xl};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ServiceContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.lg};
  line-height: 1.6;
`;

const DescriptionBlock = styled.div`
  max-width: 800px;
  margin: ${({ theme }) => theme.space.xl} auto 0;
  padding: 0 ${({ theme }) => theme.space.md};
  text-align: center;
`;

const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.md};
`;

const SpecialtiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

const SpecialtyItem = styled.li`
  background: ${({ theme }) => theme.colors.maroon}15;
  color: ${({ theme }) => theme.colors.maroon};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.font.small};
  font-weight: 500;
`;

const services = [
  {
    title: "Individual Counseling",
    specialties: [
      "Anxiety & Depression",
      "Trauma & PTSD",
      "Life Transitions",
      "Self-Esteem & Personal Growth"
    ],
    image: "/forest.jpg",
    link: "/services#individual"
  },
  {
    title: "Expert Approach",
    specialties: [
      "EMDR Therapy",
      "Trauma-Informed Care",
      "Anxiety Treatment",
      "Solution-Focused Therapy"
    ],
    image: "/mountain.jpg",
    link: "/services#approach"
  },
  {
    title: "Your Journey",
    specialties: [
      "Personalized Treatment",
      "Holistic Well-being",
      "Coping Strategies",
      "Long-term Growth"
    ],
    image: "/forest-two.jpg",
    link: "/services#journey"
  }
];

export default function ServicesOverview() {
  return (
    <Section>
      <Title>Our Services</Title>
      <ServicesList>
        {services.map((service) => (
          <ServiceCard key={service.title} bg={service.image}>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <SpecialtiesList>
                {service.specialties.map((specialty) => (
                  <SpecialtyItem key={specialty}>{specialty}</SpecialtyItem>
                ))}
              </SpecialtiesList>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesList>
      <Button as="a" href="/services">
        View All Services
      </Button>
      <DescriptionBlock>
        <DescriptionText>
          I provide personalized therapy sessions focused on your unique needs and goals, using evidence-based approaches like EMDR, CBT, and Solution-Focused therapy to help you overcome challenges and achieve personal growth.
        </DescriptionText>
        <DescriptionText>
          As a certified trauma professional and anxiety treatment specialist, I create a safe, non-judgmental space where you can explore your thoughts and feelings freely. Together, we'll work to identify practical solutions and strategies that help you overcome challenges and achieve your personal growth goals.
        </DescriptionText>
      </DescriptionBlock>
    </Section>
  );
} 