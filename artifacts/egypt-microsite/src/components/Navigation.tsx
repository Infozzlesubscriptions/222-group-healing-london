import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";

const navLinks = [
  { href: "hero", label: "Home" },
  { href: "programme", label: "Programme" },
  { href: "testimonials", label: "Transformation Stories" },
  { href: "faq", label: "FAQ" },
];

function scrollToSection(id: string) {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["hero", "programme", "about", "testimonials", "pricing", "faq"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        showSolid
          ? "bg-background/95 backdrop-blur-md border-border/30 py-2 shadow-sm"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:opacity-80 transition-opacity shrink-0"
          >
            <img
              src={logoSrc}
              alt="Star Magic"
              className={`w-auto transition-all duration-500 ${showSolid ? "h-10" : "h-14"}`}
              style={{ filter: showSolid ? "brightness(0)" : "brightness(0) invert(1)" }}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => { scrollToSection(link.href); }}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : showSolid
                      ? "text-foreground/70 hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      isActive ? "w-full bg-primary" : "w-0 group-hover:w-full bg-primary/60"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("pricing")}
              className="hidden lg:block text-sm font-semibold px-5 py-2 rounded-lg tracking-wide transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                color: "#1a1208",
                border: "none",
              }}
            >
              Secure Your Place
            </button>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                showSolid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 border-b border-border/40 shadow-xl"
            style={{ background: "hsl(var(--background))", backdropFilter: "blur(20px)" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollToSection(link.href); setIsOpen(false); }}
                  className="text-base py-3 px-4 rounded-xl tracking-wide transition-colors duration-200 text-left text-foreground/80 hover:text-foreground hover:bg-secondary/60 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-border/30">
                <button
                  onClick={() => { scrollToSection("pricing"); setIsOpen(false); }}
                  className="w-full text-base font-semibold py-3 rounded-xl tracking-wide cursor-pointer"
                  style={{
                    background: "linear-gradient(90deg, #d39222 0%, #FFECBA 24.52%, #F3D696 51.93%, #FFECBA 76.93%, #d39222 100%)",
                    color: "#1a1208",
                    border: "none",
                  }}
                >
                  Secure Your Place
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
