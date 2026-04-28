import { Link } from "wouter";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";
import { useTheme } from "@/context/ThemeContext";
import { goldBtn } from "@/lib/shared";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Experience", href: "/experience" },
  { label: "Real Transformations", href: "/stories" },
  { label: "The Science", href: "/science" },
  { label: "Book Your Place", href: "/book" },
  { label: "FAQs", href: "/faq" },
];

export function Footer() {
  const { theme } = useTheme();
  const logoFilter = theme === "light" ? "brightness(0)" : "brightness(0) invert(1)";

  return (
    <footer className="bg-secondary/40 border-t border-border/40 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="flex flex-col items-start gap-5">
            <Link href="/">
              <img
                src={logoSrc}
                alt="Star Magic"
                className="h-12 w-auto transition-all duration-500 cursor-pointer"
                style={{ filter: logoFilter }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Star Magic · 222 Group Healing · London, September 2026
            </p>
            <a
              href="https://www.starmagichealing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:text-primary/70 transition-colors tracking-wide"
            >www.starmagichealing.com</a>
          </div>

          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Book Your Place</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Places are strictly limited. 5th &amp; 6th September 2026, London.
            </p>
            <Link href="/book">
              <button
                className="text-sm font-bold px-6 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                style={goldBtn}
              >
                Book Now
              </button>
            </Link>
            <div className="mt-6">
              <a href="mailto:info@starmagichealing.com" className="text-primary text-sm hover:text-primary/70 transition-colors">
                info@starmagichealing.com
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
            ✦ Star Magic · One Love
          </p>
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Star Magic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground/40 text-xs">
            <a href="https://starmagichealing.com/cancellation-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cancellation Policy</a>
            <span>·</span>
            <a href="mailto:info@starmagichealing.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
