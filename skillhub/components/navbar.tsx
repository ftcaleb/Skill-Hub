"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { coursesData } from "@/data/courses";
import { eventsData } from "@/data/events";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const featuredCourses = coursesData.filter((c) => c.featured).slice(0, 4);
  const upcomingEvents = eventsData.filter((e) => e.featured).slice(0, 4);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Trajlon</span>
            <span className="text-xl font-light text-foreground">Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {siteConfig.navigation.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Courses Dropdown */}
                {item.label === "Courses" && activeDropdown === "Courses" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg p-4">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground">Featured Courses</h3>
                      {featuredCourses.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="block p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground">{course.title}</p>
                          <p className="text-xs text-muted-foreground">{course.duration}</p>
                        </Link>
                      ))}
                      <Link
                        href="/courses"
                        className="block text-sm font-medium text-primary hover:text-primary/80 pt-2 border-t border-border"
                      >
                        View All Courses →
                      </Link>
                    </div>
                  </div>
                )}

                {/* Events Dropdown */}
                {item.label === "Events" && activeDropdown === "Events" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg p-4">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground">Upcoming Events</h3>
                      {upcomingEvents.map((event) => (
                        <Link
                          key={event.slug}
                          href={`/events/${event.slug}`}
                          className="block p-2 rounded-md hover:bg-muted transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground">{event.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {event.city}, {event.country}
                          </p>
                        </Link>
                      ))}
                      <Link
                        href="/events"
                        className="block text-sm font-medium text-primary hover:text-primary/80 pt-2 border-t border-border"
                      >
                        View All Events →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {siteConfig.navigation.main.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
