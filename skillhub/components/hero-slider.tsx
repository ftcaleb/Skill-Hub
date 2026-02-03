"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Slide data structure
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
}

// Default slides - can be customized via props
const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "Tailored Learning for Individuals & Companies",
    description:
      "Transform your workforce with customized training programs designed to meet your specific organizational goals and industry requirements.",
    image: "/images/paper.jpeg",
    cta: { label: "Get a Quote", href: "/contact" },
  },
  {
    id: 2,
    title: "World-Class Executive Leadership Programs",
    description:
      "Develop exceptional leaders who can navigate complexity, inspire teams, and drive sustainable business growth in any environment.",
    image: "/images/corp.jpeg",
    cta: { label: "Explore Programs", href: "/courses" },
  },
  {
    id: 3,
    title: "Global Training Excellence Since 2005",
    description:
      "Join thousands of professionals across 50+ countries who have elevated their careers through our internationally accredited courses.",
    image: "/images/desk.jpeg",
    cta: { label: "View Our Courses", href: "/courses" },
  },
];

interface HeroSliderProps {
  slides?: Slide[];
}

export function HeroSlider({ slides = defaultSlides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Direction: 1 = next (left-to-right exit), -1 = previous (right-to-left exit)
  const [direction, setDirection] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Slide animation variants
  // Direction > 0: entering from right (100%), exiting to left (-100%)
  // Direction < 0: entering from left (-100%), exiting to right (100%)
  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? "100%" : "-100%",
      opacity: prefersReducedMotion ? 0 : 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? "-100%" : "100%",
      opacity: prefersReducedMotion ? 0 : 1,
    }),
  };

  // Content animation variants (staggered fade-in)
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="relative w-screen h-screen overflow-hidden"
      aria-label="Hero slider"
      role="region"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: "tween",
              duration: prefersReducedMotion ? 0 : 0.6,
              ease: [0.4, 0, 0.2, 1],
            },
            opacity: {
              duration: prefersReducedMotion ? 0.3 : 0.4,
            },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>

          {/* Slide Content */}
          <motion.div
            className="relative z-10 h-full flex items-center"
            variants={contentContainerVariants}
            initial="hidden"
            animate="visible"
            key={`content-${currentSlide}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Headline */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance"
                  variants={contentItemVariants}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mt-6 text-lg md:text-xl text-background/80 max-w-xl text-pretty"
                  variants={contentItemVariants}
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Button */}
                <motion.div className="mt-8" variants={contentItemVariants}>
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                  >
                    <Link href={slides[currentSlide].cta.href}>
                      {slides[currentSlide].cta.label}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Vertically stacked on the right */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        {/* Previous Button */}
        <motion.button
          onClick={prevSlide}
          className="w-12 h-12 md:w-14 md:h-14 bg-background/20 backdrop-blur-sm border border-background/30 flex items-center justify-center text-background hover:bg-background/30 transition-colors rotate-45"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
          type="button"
        >
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6 -rotate-45" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="w-12 h-12 md:w-14 md:h-14 bg-background/20 backdrop-blur-sm border border-background/30 flex items-center justify-center text-background hover:bg-background/30 transition-colors rotate-45"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
          type="button"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 -rotate-45" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
            type="button"
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
