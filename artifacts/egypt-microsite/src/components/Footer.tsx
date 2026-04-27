import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "hero" },
  { label: "The Science", href: "science" },
  { label: "Transformation Stories", href: "testimonials" },
  { label: "FAQs", href: "faq" },
];

function scrollToSection(id: string) {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

const goldBtn = {
  background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
  color: "#1a1208",
  border: "none",
} as React.CSSProperties;

export function Footer() {
  const { theme } = useTheme();
  const logoFilter = theme === "light" ? "brightness(0)" : "brightness(0) invert(1)";

  return (
    <footer className="bg-secondary/40 border-t border-border/40 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="flex flex-col items-start gap-5">
            <img
              src={logoSrc}
              alt="Star Magic"
              className="h-12 w-auto transition-all duration-500"
              style={{ filter: logoFilter }}
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Star Magic · 222 Group Healing · London, September 2026
            </p>
            <a
              href="https://www.starmagichealing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:text-primary/70 transition-colors tracking-wide"
            >www.starmagichealing.org</a>
          </div>

          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-foreground text-lg mb-5 tracking-wide">Book Your Place</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Places are strictly limited. 5th &amp; 6th September 2026, London.
            </p>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-bold px-6 py-3 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              style={goldBtn}
            >
              Book Now
            </button>
            <div className="mt-6">
              <a href="mailto:info@starmagichealing.com" className="text-primary text-sm hover:text-primary/70 transition-colors">
                info@starmagichealing.com
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
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
