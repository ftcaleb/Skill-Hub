import type { Metadata } from "next";
import { Target, Eye, Globe, Building2 } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { aboutContent } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Trajlon Group, a leading provider of professional training and capacity building solutions serving clients globally.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title={aboutContent.hero.title}
        subtitle={aboutContent.hero.subtitle}
        variant="page"
      />

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {aboutContent.overview.title}
              </h2>
              <div className="space-y-4">
                {aboutContent.overview.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-32 w-32 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {aboutContent.mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.mission.content}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-xl border border-border p-8 lg:p-10">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {aboutContent.vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver specialized training solutions across diverse sectors, helping organizations thrive in their unique contexts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aboutContent.industries.map((industry) => (
              <div
                key={industry}
                className="group flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <Building2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-background/70 max-w-3xl mx-auto leading-relaxed">
            With operations spanning six continents, Trajlon Group brings world-class training to organizations wherever they are. Our global network of facilitators ensures that participants receive culturally relevant, locally informed, and internationally benchmarked learning experiences.
          </p>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        subtitle="Discover how Trajlon Group can help transform your organization through exceptional training and development programs."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Courses", href: "/courses" }}
      />
    </>
  );
}
