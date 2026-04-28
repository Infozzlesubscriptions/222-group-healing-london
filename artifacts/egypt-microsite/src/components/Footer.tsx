import { Link } from "wouter";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";
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
  return (
    <footer style={{ background: "hsl(265 60% 8%)", borderTop: "1px solid rgba(211,146,34,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          <div className="flex flex-col items-start gap-5">
            <Link href="/">
              <img
                src={logoSrc}
                alt="Star Magic"
                className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Star Magic · 222 Group Healing · London, September 2026
            </p>
            <a
              href="https://www.starmagichealing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide transition-colors hover:opacity-80"
              style={{ color: "#d39222" }}
            >
              www.starmagichealing.com
            </a>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "#d39222" }}>Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm tracking-wide cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-6" style={{ color: "#d39222" }}>Reserve Your Place</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
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
              <a href="mailto:info@starmagichealing.com" className="text-sm transition-colors hover:opacity-80" style={{ color: "#d39222" }}>
                info@starmagichealing.com
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-white/30 text-xs tracking-widest uppercase">
            ✦ Star Magic · One Love
          </p>
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Star Magic. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            <a href="https://starmagichealing.com/cancellation-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Cancellation Policy</a>
            <span>·</span>
            <a href="mailto:info@starmagichealing.com" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
