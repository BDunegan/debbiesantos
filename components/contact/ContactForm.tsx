"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "@/lib/theme";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.purple};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.font.base};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral500};
    font-family: ${({ theme }) => theme.font.base};
    font-size: ${({ theme }) => theme.font.size.md};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.purpleLight}40;
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.space.md};
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.font.lineHeight.normal};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.font.base};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral500};
    font-family: ${({ theme }) => theme.font.base};
    font-size: ${({ theme }) => theme.font.size.md};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.purpleLight}40;
  }
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.space.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.maroon};
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral400};
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.maroon};
  font-size: 0.9rem;
  margin-top: ${({ theme }) => theme.space.xs};
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.purpleLight}20;
  border: 2px solid ${({ theme }) => theme.colors.purpleLight};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.space.lg};
  margin-top: ${({ theme }) => theme.space.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.purple};
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Log form data to console
      console.log("Form submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSubmitted) {
    return (
      <SuccessMessage>
        <h3>Thank You for Your Message!</h3>
        <p>
          I have received your inquiry and will get back to you as soon as possible.
          Your message details have been logged to the console.
        </p>
      </SuccessMessage>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name *</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email *</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Phone *</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 555-5555"
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="subject">Subject *</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
        />
        {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message *</Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide details about your inquiry..."
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </FormGroup>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </Form>
  );
} 