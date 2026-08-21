import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title" data-reveal>
      <div className="contact-layout">
        <div>
          <p className="section-label section-label--dark">Contact</p>
          <h2 id="contact-title">Let's build something useful.</h2>
        </div>
        <div className="contact-details">
          <a href={profile.links.email}>{profile.email}</a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          <a className="button button--light" href={profile.links.email}>
            Send Email
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <div className="contact-social" aria-label="Contact links">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.links.email} aria-label="Email Ajay">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
