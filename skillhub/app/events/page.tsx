"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/hero-section";
import { EventCard } from "@/components/event-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { CTASection } from "@/components/cta-section";
import { eventsData, eventCategories, eventLocations } from "@/data/events";

export default function EventsPage() {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [locationFilter, setLocationFilter] = useState("All Locations");

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesCategory =
        categoryFilter === "All Categories" || event.category === categoryFilter;
      const matchesLocation =
        locationFilter === "All Locations" || event.city === locationFilter;
      return matchesCategory && matchesLocation;
    });
  }, [categoryFilter, locationFilter]);

  const handleReset = () => {
    setCategoryFilter("All Categories");
    setLocationFilter("All Locations");
  };

  const filterGroups = [
    {
      label: "Category",
      options: eventCategories,
      value: categoryFilter,
      onChange: setCategoryFilter,
    },
    {
      label: "Location",
      options: eventLocations,
      value: locationFilter,
      onChange: setLocationFilter,
    },
  ];

  return (
    <>
      <HeroSection
        title="Upcoming Events & Conferences"
        subtitle="Join industry leaders at our premier events and conferences held in key locations around the world."
        variant="page"
      />

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <FilterSidebar
              title="Filter Events"
              filterGroups={filterGroups}
              onReset={handleReset}
            />

            {/* Events Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredEvents.length}</span> events
                </p>
              </div>

              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.slug} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No events match your current filters.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Host a Corporate Event?"
        subtitle="Partner with us to create impactful training events and conferences for your organization."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
