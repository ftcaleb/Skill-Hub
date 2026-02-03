"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/data/courses";
import { cardHoverVariants } from "@/animations/variants";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
      >
        <Card className="h-full group bg-card">
          {/* Image Placeholder */}
          <div className="relative h-48 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/20">
                {course.title.charAt(0)}
              </span>
            </div>
            {course.featured && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Badge variant="secondary" className="font-normal">
                {course.category}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {course.title}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {course.shortDescription}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{course.industry}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
