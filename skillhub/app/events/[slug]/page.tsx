import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, Clock, Target, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { EventCard } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventsData } from "@/data/events";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateShort(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: event.shortDescription,
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = eventsData
    .filter((e) => e.category === event.category && e.slug !== event.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Events", href: "/events" },
              { label: event.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground mb-4">
              {event.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              {event.title}
            </h1>

            <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
              {event.shortDescription}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mt-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDateShort(event.startDate)} - {formatDateShort(event.endDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{event.city}, {event.country}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Event Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.overview}
                </p>
              </div>

              {/* Objectives */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Event Objectives</h2>
                <ul className="space-y-3">
                  {event.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agenda */}
              {event.agenda && event.agenda.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Event Agenda</h2>
                  <div className="space-y-6">
                    {event.agenda.map((day, dayIndex) => (
                      <div key={dayIndex} className="bg-card rounded-lg border border-border p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          {day.day}
                        </h3>
                        <ul className="space-y-2">
                          {day.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Event Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-muted-foreground">Date</dt>
                    <dd className="text-foreground font-medium">
                      {formatDate(event.startDate)}
                      {event.startDate !== event.endDate && (
                        <> - {formatDate(event.endDate)}</>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Venue</dt>
                    <dd className="text-foreground font-medium">{event.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">City</dt>
                    <dd className="text-foreground font-medium">{event.city}, {event.country}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Event Type</dt>
                    <dd className="text-foreground font-medium">{event.category}</dd>
                  </div>
                </dl>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <Button className="w-full">Register Now</Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <EventCard key={relatedEvent.slug} event={relatedEvent} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Secure Your Place Today"
        subtitle="Register now to join industry leaders and professionals at this premier event."
        primaryCta={{ label: "Register Now", href: "/contact" }}
        secondaryCta={{ label: "View All Events", href: "/events" }}
      />
    </>
  );
}
