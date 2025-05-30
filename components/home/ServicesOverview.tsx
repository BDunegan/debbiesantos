"use client";
import React from "react";
import styled from "styled-components";
import { Card } from "@/components/atomic/Card";
import { Button } from "@/components/atomic/Button";
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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

const ServiceCard = styled(Card)<{ bg?: string }>`
  background: ${({ bg, theme }) => bg ? `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.55)), url('${bg}') center/cover no-repeat` : theme.colors.white};
  background-blend-mode: lighten;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral900};
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
  color: ${({ theme }) => theme.colors.neutral700};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.6;
`;

const ServiceLink = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.maroon};
  color: white;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`;

const services = [
  {
    title: "Individual Counseling",
    description: "Personalized therapy sessions focused on your unique needs and goals.",
    image: "/mountain.jpg",
    link: "/services#individual"
  },
  {
    title: "Couples & Family Therapy",
    description: "Strengthen relationships and improve communication within your family unit.",
    image: "/forest.jpg",
    link: "/services#couples"
  },
  {
    title: "Workshops & Groups",
    description: "Join supportive group sessions and educational workshops for shared growth.",
    image: "/sunset.jpg",
    link: "/services#groups"
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
              <ServiceLink href={service.link}>
                Learn More
              </ServiceLink>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesList>
      <Button as="a" href="/services" variant="secondary">
        View All Services
      </Button>
    </Section>
  );
} 