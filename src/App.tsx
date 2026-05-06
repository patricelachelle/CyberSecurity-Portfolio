import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Target,
  Trophy,
  UsersRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { ProjectGrid } from "./components/ProjectGrid";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "TryHackMe", href: "#tryhackme" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const coreSkills = [
  {
    title: "Security Analysis",
    icon: ShieldCheck,
    items: ["Threat identification", "Log analysis", "Alert triage", "Risk documentation"],
  },
  {
    title: "Risk & Compliance",
    icon: ClipboardList,
    items: ["NIST CSF", "PCI DSS", "GDPR", "SOC 1/SOC 2 awareness"],
  },
  {
    title: "Network Security",
    icon: Network,
    items: ["Wireshark", "Tcpdump", "Nmap", "Linux and Windows fundamentals"],
  },
  {
    title: "Training & Leadership",
    icon: UsersRound,
    items: ["Security awareness", "Clear documentation", "Process improvement", "User support"],
  },
];

const training = [
  "Google Cybersecurity Professional Certificate coursework",
  "Merit America cybersecurity training",
  "Hands-on labs covering Linux, Windows, SIEM review, and network analysis",
  "Continued portfolio projects in incident response, compliance, and vulnerability assessment",
];

const tryHackMeProgress = [
  {
    label: "Rooms completed",
    value: "17+",
    detail: "Update this number as your TryHackMe profile grows.",
  },
  {
    label: "Current focus",
    value: "SOC foundations",
    detail: "Linux, Windows, networking, SIEM review, and incident handling.",
  },
  {
    label: "Evidence",
    value: "Journal",
    detail: "Use this area to link writeups, screenshots, badges, or a public profile.",
  },
];

const highlights = [
  "Experience working in data-sensitive and compliance-driven environments across education, healthcare, insurance, and social services.",
  "Strong background communicating processes clearly to technical and non-technical audiences.",
  "Leadership experience supporting training, documentation, service quality, and operational improvement.",
  "Current cybersecurity focus includes security awareness, risk identification, incident documentation, and log analysis.",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Patrice Brown cybersecurity portfolio home">
          <span className="brand-mark">
            <ShieldCheck size={22} />
          </span>
          <span>
            Patrice Brown
            <small>Cybersecurity Portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <main id="top">
        <section className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Cybersecurity training, analysis, and awareness</p>
            <h1>Security-focused portfolio for risk, response, and clear communication.</h1>
            <p className="hero-copy">
              I am building a cybersecurity portfolio centered on practical analysis,
              compliance-minded thinking, incident documentation, and security awareness
              training. My background in data-sensitive service environments helps me
              connect technical findings to people, process, and business impact.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me <Mail size={18} />
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Portfolio focus areas">
            <div className="panel-header">
              <span>Current Focus</span>
              <CheckCircle2 size={18} />
            </div>
            <ul>
              <li>SIEM and security log review</li>
              <li>Incident response documentation</li>
              <li>Risk identification and mitigation planning</li>
              <li>Security awareness and user training</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="section about-section">
          <div className="about-photo-card">
            <img
              src="/patrice-brown-headshot.png"
              alt="Professional headshot of Patrice Brown"
            />
          </div>
          <div className="section-copy">
            <p className="eyebrow">About Me</p>
            <h2>Career-changer with a people-first security mindset.</h2>
            <p>
              My cybersecurity work is grounded in practical problem-solving,
              careful documentation, and communication with users who need security
              to feel understandable. I am developing hands-on skills in security
              analysis, network review, incident response, and compliance while
              bringing prior experience from environments where privacy, accuracy,
              and trust mattered every day.
            </p>
            <p>
              This portfolio is designed to grow with new labs, reports, and case
              studies as I complete them. Each project will show the tools used,
              the risk or scenario being addressed, the steps taken, and the skills
              demonstrated.
            </p>
          </div>
        </section>

        <section className="section resume-summary">
          <div className="section-heading">
            <p className="eyebrow">Resume Summary</p>
            <h2>Strengths I bring into cybersecurity work.</h2>
          </div>
          <div className="summary-grid">
            <div>
              <BriefcaseBusiness size={24} />
              <h3>Professional Foundation</h3>
              <p>Experience in data-sensitive, service-oriented, and compliance-aware environments.</p>
            </div>
            <div>
              <FileText size={24} />
              <h3>Documentation</h3>
              <p>Clear written summaries, process notes, incident narratives, and stakeholder-ready reports.</p>
            </div>
            <div>
              <BookOpenCheck size={24} />
              <h3>Security Learning</h3>
              <p>Current training in security frameworks, tools, analysis methods, and hands-on labs.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Practical skills organized around real security work.</h2>
          </div>
          <div className="skills-grid">
            {coreSkills.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Cybersecurity Projects</p>
              <h2>Data-driven project cards ready for future case studies.</h2>
            </div>
            <p className="muted">
              Placeholder projects are intentionally labeled so they can be replaced
              with completed labs and reports.
            </p>
          </div>
          <ProjectGrid />
        </section>

        <section id="certifications" className="section split-band">
          <div>
            <p className="eyebrow">Certifications / Training</p>
            <h2>Current cybersecurity learning path.</h2>
          </div>
          <ul className="check-list">
            {training.map((item) => (
              <li key={item}>
                <Award size={18} />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="tryhackme" className="section tryhackme-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">TryHackMe Progress</p>
              <h2>Hands-on labs that support practical security skills.</h2>
            </div>
            <p className="muted">
              This section can be updated with your public profile, room count,
              badges, screenshots, and short reflections as you keep progressing.
            </p>
          </div>
          <div className="tryhackme-grid">
            {tryHackMeProgress.map((item) => (
              <article className="tryhackme-card" key={item.label}>
                <Trophy size={22} aria-hidden="true" />
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
          <div className="tryhackme-note">
            <Target size={20} aria-hidden="true" />
            <p>
              Current lab themes include Linux and Windows fundamentals, network
              troubleshooting with Wireshark, security monitoring concepts, Splunk
              practice, and incident response documentation.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience Highlights</p>
            <h2>Transferable strengths that support security work.</h2>
          </div>
          <div className="timeline">
            {highlights.map((item) => (
              <div className="timeline-item" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's connect professionally.</h2>
            <p>
              For now, this portfolio uses direct contact links instead of a frontend
              contact form, which keeps deployment simple and avoids collecting
              messages without a secure backend.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:patrice.lachelle.brown@gmail.com">
              <Mail size={18} /> Email
            </a>
            <a className="button button-secondary" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>(c) {new Date().getFullYear()} Patrice Brown</span>
        <span>Cybersecurity portfolio built with React, TypeScript, and Vite.</span>
      </footer>
    </div>
  );
}
