"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  heroContainerVariants,
  heroHeadlineVariants,
  heroSubtitleVariants,
  heroButtonContainerVariants,
  heroButtonVariants,
  buttonHoverScale,
  buttonTapScale,
} from "@/animations/variants";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "page";
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "default",
}: HeroSectionProps) {
  // Page variant - simpler animation
  if (variant === "page") {
    return (
      <section className="relative bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance"
            variants={heroHeadlineVariants}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty"
              variants={heroSubtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </section>
    );
  }

  // Default variant - full hero with animations
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary/20" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center"
        initial="hidden"
        animate="visible"
        variants={heroContainerVariants}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background leading-tight text-balance"
          variants={heroHeadlineVariants}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="mt-6 text-lg md:text-xl text-background/70 max-w-3xl mx-auto text-pretty"
            variants={heroSubtitleVariants}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroButtonContainerVariants}
          >
            {primaryCta && (
              <motion.div variants={heroButtonVariants}>
                <motion.div
                  whileHover={buttonHoverScale}
                  whileTap={buttonTapScale}
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href={primaryCta.href}>{primaryCta.label}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
            {secondaryCta && (
              <motion.div variants={heroButtonVariants}>
                <motion.div
                  whileHover={buttonHoverScale}
                  whileTap={buttonTapScale}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
