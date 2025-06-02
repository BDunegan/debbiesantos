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
  width: 100%;
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
  width: 100%;
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const ServiceCard = styled(Card)<{ bg?: string }>`
  background: ${({ bg, theme }) => bg ? `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.55)), url('${bg}') center/cover no-repeat` : theme.colors.white};
  background-blend-mode: lighten;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

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
  padding: ${({ theme }) => theme.space.lg};
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.subheading};
  color: ${({ theme }) => theme.colors.maroon};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.6;
`;


const services = [
  {
    title: "Individual Counseling",
    description: "Personalized therapy sessions focused on your unique needs and goals.",
    image: "/mountain.jpg",
    link: "/services#individual"
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
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesList>
      <Button as="a" href="/services">
        View All Services
      </Button>
    </Section>
  );
} 