import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>AJAY MADANA</strong>
        <span>Data / Analytics / AI</span>
      </div>
      <p>© 2026 Ajay Madana</p>
      <nav aria-label="Footer links">
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={17} aria-hidden="true" />
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Github size={17} aria-hidden="true" />
        </a>
        <a href={profile.links.email} aria-label="Email Ajay">
          <Mail size={17} aria-hidden="true" />
        </a>
        <a href="#top" aria-label="Back to top">
          <ArrowUp size={17} aria-hidden="true" />
        </a>
      </nav>
    </footer>
  );
}
