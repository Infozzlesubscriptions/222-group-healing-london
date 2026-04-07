import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import logoSrc from "@assets/live_site_logo_black_(1)_1775484379388.webp";
import { useTheme } from "@/context/ThemeContext";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/journey", label: "The Journey" },
    { href: "/transformations", label: "Transformations" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/join-2027", label: "Join 2027" },
  ];

  const logoFilter = theme === "light"
    ? "brightness(0)"
    : "brightness(0) invert(1)";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity" data-testid="link-home-logo">
            <img
              src={logoSrc}
              alt="Egypt 2026"
              className="h-10 w-auto transition-all duration-500"
              style={{ filter: logoFilter }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-semibold" : "text-foreground/80"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              data-testid="btn-theme-toggle"
              aria-label="Toggle theme"
              className="relative w-14 h-7 rounded-full border border-border/60 bg-secondary/60 hover:border-primary/50 transition-all duration-300 flex items-center px-1 shrink-0"
            >
              <span
                className={`absolute transition-all duration-400 ease-in-out flex items-center justify-center w-5 h-5 rounded-full bg-primary shadow-sm ${
                  theme === "light" ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {theme === "light"
                  ? <Sun className="w-3 h-3 text-primary-foreground" />
                  : <Moon className="w-3 h-3 text-primary-foreground" />
                }
              </span>
              <Sun className={`w-3 h-3 ml-0.5 transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-40 text-foreground"}`} />
              <Moon className={`w-3 h-3 ml-auto mr-0.5 transition-opacity duration-300 ${theme === "light" ? "opacity-40 text-foreground" : "opacity-0"}`} />
            </button>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              data-testid="btn-theme-toggle-mobile"
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 bg-secondary/40 text-foreground hover:border-primary/50 hover:text-primary transition-all"
            >
              {theme === "light"
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />
              }
            </button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg tracking-wide transition-colors ${
                  location === link.href ? "text-primary font-semibold" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
