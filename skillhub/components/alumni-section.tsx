"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Alumni } from "@/data/alumni";

interface AlumniCardProps {
  alumni: Alumni;
}

function AlumniCard({ alumni }: AlumniCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-64 md:w-72 group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
    >
      {/* Card Container */}
      <div
        className="relative overflow-hidden rounded-2xl bg-neutral-900 transition-shadow duration-300"
        style={{
          boxShadow: isHovered
            ? "0 20px 40px rgba(0,0,0,0.4), 0 0 60px rgba(59,130,246,0.15)"
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Portrait Image */}
        <div className="relative h-72 md:h-80 w-full overflow-hidden">
          <Image
            src={alumni.image || "/placeholder.svg"}
            alt={alumni.name}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>

        {/* Name & Role */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-lg font-semibold text-white tracking-tight">
            {alumni.name}
          </h3>
          <p className="text-sm text-white/60 mt-1">
            {alumni.role}
            <span className="text-white/40"> at </span>
            {alumni.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface AlumniSectionProps {
  alumni: Alumni[];
}

export function AlumniSection({ alumni }: AlumniSectionProps) {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Duplicate the array for seamless infinite loop
  const duplicatedAlumni = [...alumni, ...alumni, ...alumni];

  return (
    <section className="py-20 lg:py-28 bg-neutral-950 overflow-hidden">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight text-balance">
            Alumni Success Stories
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-xl mx-auto text-pretty">
            Meet our graduates who are making an impact across industries
            worldwide.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          className="flex gap-6 md:gap-8"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: ["0%", "-33.333%"],
                }
          }
          transition={{
            x: {
              duration: 40,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
          whileHover={{
            animationPlayState: "paused",
          }}
        >
          {duplicatedAlumni.map((person, index) => (
            <AlumniCard key={`${person.id}-${index}`} alumni={person} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
