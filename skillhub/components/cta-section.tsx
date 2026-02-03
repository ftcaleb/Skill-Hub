"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ctaContainerVariants,
  ctaTextVariants,
  buttonHoverScale,
  buttonTapScale,
  viewportSettings,
} from "@/animations/variants";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "dark";
}

export function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "default",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 lg:py-24 ${isDark ? "bg-foreground" : "bg-primary"}`}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={ctaContainerVariants}
      >
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-balance ${isDark ? "text-background" : "text-primary-foreground"}`}
          variants={ctaTextVariants}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className={`mt-4 text-lg max-w-2xl mx-auto text-pretty ${isDark ? "text-background/70" : "text-primary-foreground/80"}`}
            variants={ctaTextVariants}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          variants={ctaTextVariants}
        >
          <motion.div whileHover={buttonHoverScale} whileTap={buttonTapScale}>
            <Button
              size="lg"
              asChild
              className={
                isDark
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-background hover:bg-background/90 text-foreground"
              }
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          </motion.div>
          {secondaryCta && (
            <motion.div whileHover={buttonHoverScale} whileTap={buttonTapScale}>
              <Button
                size="lg"
                variant="outline"
                asChild
                className={
                  isDark
                    ? "border-background/30 text-background hover:bg-background/10"
                    : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                }
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
