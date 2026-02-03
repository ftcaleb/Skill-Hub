"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/hero-section";
import { CourseCard } from "@/components/course-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { CTASection } from "@/components/cta-section";
import { coursesData, courseCategories, courseIndustries, courseDurations } from "@/data/courses";

export default function CoursesPage() {
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [durationFilter, setDurationFilter] = useState("All Durations");

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory =
        categoryFilter === "All Categories" || course.category === categoryFilter;
      const matchesIndustry =
        industryFilter === "All Industries" || course.industry === industryFilter;
      const matchesDuration =
        durationFilter === "All Durations" || course.duration === durationFilter;
      return matchesCategory && matchesIndustry && matchesDuration;
    });
  }, [categoryFilter, industryFilter, durationFilter]);

  const handleReset = () => {
    setCategoryFilter("All Categories");
    setIndustryFilter("All Industries");
    setDurationFilter("All Durations");
  };

  const filterGroups = [
    {
      label: "Category",
      options: courseCategories,
      value: categoryFilter,
      onChange: setCategoryFilter,
    },
    {
      label: "Industry",
      options: courseIndustries,
      value: industryFilter,
      onChange: setIndustryFilter,
    },
    {
      label: "Duration",
      options: courseDurations,
      value: durationFilter,
      onChange: setDurationFilter,
    },
  ];

  return (
    <>
      <HeroSection
        title="Professional Training Courses"
        subtitle="Explore our comprehensive portfolio of courses designed to develop skills and drive performance across industries."
        variant="page"
      />

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <FilterSidebar
              title="Filter Courses"
              filterGroups={filterGroups}
              onReset={handleReset}
            />

            {/* Course Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> courses
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No courses match your current filters.
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
        title="Need a Custom Training Solution?"
        subtitle="We design bespoke training programs tailored to your organization's specific needs and objectives."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
