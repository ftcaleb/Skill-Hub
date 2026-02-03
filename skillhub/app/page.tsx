"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Briefcase,
  Building2,
  Monitor,
  Award,
  ArrowRight,
} from "lucide-react";
import { HeroSlider } from "@/components/hero-slider";
import { CourseCard } from "@/components/course-card";
import { EventCard } from "@/components/event-card";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/data/courses";
import { eventsData } from "@/data/events";
import { alumniData } from "@/data/alumni";
import { valuePropositions, accreditations } from "@/data/site";
import { AlumniSection } from "@/components/alumni-section";
import {
  sectionHeaderVariants,
  cardContainerVariants,
  valueCardVariants,
  cardVariants,
  logoContainerVariants,
  logoVariants,
  viewportSettings,
} from "@/animations/variants";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  users: Users,
  briefcase: Briefcase,
  building: Building2,
  monitor: Monitor,
  award: Award,
};

export default function HomePage() {
  const featuredCourses = coursesData.filter((c) => c.featured).slice(0, 3);
  const upcomingEvents = eventsData.filter((e) => e.featured).slice(0, 3);

  return (
    <>
      {/* Hero Slider - Full-width animated slider */}
      <HeroSlider />

      {/* Community Section - Full-width background with dark overlay */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/classOf25.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={sectionHeaderVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              Join Our Growing Community
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Thousands of professionals have transformed their careers through
              our training programs. Be part of a global network of industry
              leaders and innovators.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/courses">Explore Programs</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white text-white hover:bg-white hover:text-foreground"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions Section - Animated on scroll */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={sectionHeaderVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Why Choose Trajlon Group
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We combine global expertise with local insights to deliver
              training that makes a real difference.
            </p>
          </motion.div>

          {/* Value Cards Grid - Staggered fade + scale */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={cardContainerVariants}
          >
            {valuePropositions.map((item) => {
              const Icon = iconMap[item.icon] || Globe;
              return (
                <motion.div
                  key={item.title}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  variants={valueCardVariants}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section - Animated on scroll */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={sectionHeaderVariants}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Featured Courses
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Discover our most popular training programs designed to elevate
                your skills.
              </p>
            </div>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/courses" className="flex items-center gap-2">
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Course Cards Grid - Staggered slide from bottom */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={cardContainerVariants}
          >
            {featuredCourses.map((course) => (
              <motion.div key={course.slug} variants={cardVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section - Animated on scroll */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={sectionHeaderVariants}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Upcoming Events
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Join us at premier events and conferences around the world.
              </p>
            </div>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/events" className="flex items-center gap-2">
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Event Cards Grid - Staggered slide from bottom */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={cardContainerVariants}
          >
            {upcomingEvents.map((event) => (
              <motion.div key={event.slug} variants={cardVariants}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Alumni Success Stories Section */}
      <AlumniSection alumni={alumniData} />

      {/* Accreditations Section - Gentle fade on scroll */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={sectionHeaderVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Accreditations & Partners
            </h2>
            <p className="mt-4 text-muted-foreground">
              Internationally recognized certifications and partnerships
            </p>
          </motion.div>

          {/* Logo Grid - Staggered fade */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={logoContainerVariants}
          >
            {accreditations.map((item) => (
              <motion.div
                key={item.name}
                className="w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center px-4 hover:border-primary/50 transition-colors"
                variants={logoVariants}
                whileHover={{ opacity: 0.8 }}
              >
                <span className="text-xs text-muted-foreground text-center font-medium">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Animated on scroll */}
      <CTASection
        title="Advance Your Skills With Trajlon Group"
        subtitle="Partner with us to unlock the full potential of your organization through world-class training and development programs."
        primaryCta={{ label: "Explore Courses", href: "/courses" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
