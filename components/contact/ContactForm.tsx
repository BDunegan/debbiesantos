"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@/components/atomic/Button";
import { Alert } from "@/components/atomic/Alert";
import { Card } from "@/components/atomic/Card";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem 1rem 1rem 1rem;
`;
const Label = styled.label`
  font-weight: 500;
  text-align: left;
`;
const Input = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.neutral400};
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.neutral400};
  font-size: 1rem;
  min-height: 100px;
`;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <Card boxShadow="0 4px 24px rgba(0,0,0,0.18)">
      <Form onSubmit={handleSubmit} aria-live="polite">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={form.name} onChange={handleChange} required />
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" value={form.message} onChange={handleChange} required />
        <Button type="submit">Send Message</Button>
        {status === "success" && <Alert type="success">Thank you! Your message has been sent.</Alert>}
        {status === "error" && error && <Alert type="error">{error}</Alert>}
      </Form>
    </Card>
  );
} 