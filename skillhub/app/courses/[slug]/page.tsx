import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Tag, Users, CheckCircle, Download, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coursesData } from "@/data/courses";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
    description: course.shortDescription,
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = coursesData
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Courses", href: "/courses" },
              { label: course.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                {course.category}
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                {course.industry}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              {course.title}
            </h1>

            <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>{course.industry}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Download className="h-4 w-4 mr-2" />
                Download Brochure
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Enquire Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Course Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.overview}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Learning Outcomes</h2>
                <p className="text-muted-foreground mb-6">
                  Upon completion of this course, participants will be able to:
                </p>
                <ul className="space-y-3">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Attend */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Who Should Attend</h2>
                <p className="text-muted-foreground mb-6">
                  This course is designed for:
                </p>
                <ul className="space-y-3">
                  {course.whoShouldAttend.map((attendee, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{attendee}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Course Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Duration</dt>
                    <dd className="text-foreground font-medium">{course.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Category</dt>
                    <dd className="text-foreground font-medium">{course.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Industry</dt>
                    <dd className="text-foreground font-medium">{course.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Delivery</dt>
                    <dd className="text-foreground font-medium">In-Person / Virtual / Hybrid</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Brochure
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.slug} course={relatedCourse} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Enhance Your Skills?"
        subtitle="Contact us today to discuss your training needs and how we can help you achieve your goals."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View All Courses", href: "/courses" }}
      />
    </>
  );
}
