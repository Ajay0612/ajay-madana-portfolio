import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${hasScrolled ? "navbar--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>{profile.shortName}</span>
        </a>

        <div className="nav-links" aria-label="Section links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="talk-link" href="#contact">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            className="icon-button nav-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`} id="mobile-menu">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="mobile-talk" href="#contact" onClick={closeMenu}>
          Let's Talk
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
