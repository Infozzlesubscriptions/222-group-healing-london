import { Link } from "wouter";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programme", href: "/programme" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  const { theme } = useTheme();
  const logoFilter = theme === "light" ? "brightness(0)" : "brightness(0) invert(1)";

  return (
    <footer className="bg-secondary/40 border-t border-border/40 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <img
              src={logoSrc}
              alt="Star Magic"
              className="h-12 w-auto transition-all duration-500"
              style={{ filter: logoFilter }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Star Magic · Elite Be Superhuman · London, May 2026
            </p>
            <a
              href="https://www.starmagichealing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:text-primary/70 transition-colors tracking-wide"
            >
              www.starmagichealing.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Secure Your Place</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Places are strictly limited. If this is calling you — don't sit on it.
            </p>
            <Link href="/booking">
              <Button size="lg" className="font-bold tracking-widest uppercase">
                Reserve Now
              </Button>
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
            ✦ Star Magic · One Love 🔥
          </p>
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Star Magic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground/40 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <span>·</span>
            <a href="mailto:info@starmagichealing.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
