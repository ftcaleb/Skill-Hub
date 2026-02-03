import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary-foreground">Trajlon</span>
              <span className="text-xl font-light text-background/80"> Group</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              {siteConfig.description.substring(0, 150)}...
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-background" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-background" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.footer.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.navigation.footer.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-background uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.city}, {siteConfig.contact.country}</li>
              <li className="pt-2">
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-background transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-background transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
