"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/data/events";
import { cardHoverVariants } from "@/animations/variants";

interface EventCardProps {
  event: Event;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHoverVariants}
      >
        <Card className="h-full group bg-card">
          {/* Date Badge */}
          <div className="relative h-48 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-5xl font-bold text-primary/40">
                  {new Date(event.startDate).getDate()}
                </span>
                <span className="block text-lg font-medium text-primary/40 uppercase">
                  {new Date(event.startDate).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </div>
            </div>
            {event.featured && (
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>

          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <Badge variant="secondary" className="font-normal">
                {event.category}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {event.title}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {event.shortDescription}
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />
                <span>
                  {formatDate(event.startDate)} - {formatDate(event.endDate)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>
                  {event.city}, {event.country}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
