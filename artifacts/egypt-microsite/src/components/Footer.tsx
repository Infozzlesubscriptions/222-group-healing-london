import { Link } from "wouter";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Journey", href: "/journey" },
  { label: "Transformations", href: "/transformations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Join 2027", href: "/join-2027" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border/40 mt-0">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <img
              src={logoSrc}
              alt="Star Magic"
              className="h-12 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A transformational journey through Egypt's ancient temples — guided by Star Magic.
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
            <h4 className="font-serif text-foreground text-lg mb-5 tracking-wide">Navigate</h4>
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

          {/* Journey Call */}
          <div>
            <h4 className="font-serif text-foreground text-lg mb-5 tracking-wide">The Next Gateway</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The Egypt Ascension Journey 2027 opens in March. Answer the call and step into your next awakening.
            </p>
            <Link href="/join-2027">
              <span className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground text-sm font-bold px-6 py-2.5 rounded-full tracking-widest uppercase transition-colors cursor-pointer">
                Join 2027
              </span>
            </Link>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
            ✦ Egypt Ascension Journey ✦
          </p>
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Star Magic. All rights reserved.
          </p>
          <p className="text-muted-foreground/40 text-xs italic font-serif">
            "Egypt didn't change me. It revealed me."
          </p>
        </div>
      </div>
    </footer>
  );
}
