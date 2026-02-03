"use client";

import { ContactForm } from "@/components/contact-form";
import { GoogleMapEmbed } from "@/components/google-map-embed";

export default function ContactPage() {
  return (
    <>
      {/* Full-width Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Get in touch with our team to discuss your training needs or learn more about our programs.
            </p>
          </div>

          {/* Two-column layout: Form (left) + Map (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact Form - Left Column */}
            <div className="bg-card rounded-xl border border-border p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Google Map - Right Column */}
            <div className="h-full min-h-[500px] lg:min-h-0">
              {/* 
                To change the map location:
                1. Go to Google Maps and find your location
                2. Click "Share" → "Embed a map"
                3. Copy the src URL and pass it as mapSrc prop
              */}
              <GoogleMapEmbed 
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0547891234!2d28.0565!3d-26.1075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSpaces%20-%20Sandton%2C%20Atrium%20on%205th!5e0!3m2!1sen!2sza!4v1234567890"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
