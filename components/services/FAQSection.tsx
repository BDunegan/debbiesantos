"use client";
import React, { useState } from "react";
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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.purpleLight};
  padding: ${({ theme }) => theme.space.md} 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }
`;

const Question = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 600;
  padding: ${({ theme }) => theme.space.sm} 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.maroon};
  }

  &::after {
    content: '${({ $isOpen }) => $isOpen ? '−' : '+'}';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  padding: ${({ $isOpen, theme }) => ($isOpen ? theme.space.md : '0')} 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
`;

const faqs = [
  {
    question: "What can I expect in the first session?",
    answer: "The first session is an opportunity for us to get to know each other and discuss your goals. We'll review your history, current concerns, and develop a plan for moving forward. This session helps establish a foundation for our therapeutic relationship."
  },
  {
    question: "How long are therapy sessions?",
    answer: "Standard therapy sessions are 53 minutes long. Extended sessions of 90 minutes are available for EMDR protocols. The frequency of sessions is typically weekly, but we can adjust based on your needs and progress."
  },
  {
    question: "Do you accept insurance?",
    answer: "I accept most insurances under Headway and Sondermind platforms, some Medicaid plans."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee. This policy helps ensure that appointment times are available for those who need them."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer: "Therapy can be beneficial for anyone looking to improve their mental health, relationships, or overall well-being. If you're experiencing challenges in your life, feeling stuck, or want to make positive changes, therapy can provide the support and tools you need."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Title>Frequently Asked Questions</Title>
      <ContentWrapper>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <Question $isOpen={openIndex === index}>
              {faq.question}
            </Question>
            <Answer $isOpen={openIndex === index}>
              {faq.answer}
            </Answer>
          </FAQItem>
        ))}
      </ContentWrapper>
    </Section>
  );
} 