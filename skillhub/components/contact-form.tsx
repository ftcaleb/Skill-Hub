"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Contact Form Component
 * 
 * Editable form fields:
 * - firstName, surname, email, phone, subject, message
 * - subscribeToUpdates checkbox
 * 
 * This is a static UI component - add your form submission logic
 * in the handleSubmit function.
 */

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  subscribeToUpdates: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribeToUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribeToUpdates: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add your form submission logic here
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        surname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        subscribeToUpdates: false,
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* First Name & Surname - 2 column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="surname" className="sr-only">
            Surname
          </label>
          <Input
            id="surname"
            name="surname"
            type="text"
            required
            value={formData.surname}
            onChange={handleInputChange}
            placeholder="Surname"
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      {/* Email & Phone - 2 column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      {/* Subject - Full width */}
      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject"
          className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Message - Full width textarea */}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          className="resize-none bg-background border-border focus:border-primary focus:ring-primary"
        />
      </div>

      {/* Subscribe Checkbox */}
      <div className="flex items-start gap-3">
        <Checkbox
          id="subscribeToUpdates"
          checked={formData.subscribeToUpdates}
          onCheckedChange={handleCheckboxChange}
          className="mt-0.5"
        />
        <label
          htmlFor="subscribeToUpdates"
          className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
        >
          Subscribe to receive promotions, discounts and updates.
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-12 text-base font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
