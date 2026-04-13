import { useEffect, useRef, useState } from 'react'
import './App.css'

const PROJECTS = [
  {
    title: 'Email AI Agent',
    stack: 'React · TypeScript · FastAPI · PydanticAI · OAuth2 · Gmail API',
    description:
      'Full-stack AI email manager with a React/TypeScript frontend, protected route guards, and real-time email feed. Secure FastAPI backend with OAuth2 + JWT multi-user auth. OpenAI-powered reply engine surfaced as in-UI preview suggestions.',
    highlight: 'End-to-end typed contract between frontend and backend — zero runtime mismatches',
    github: 'https://github.com/ShreyanshWarde/EmailAgent',
  },
  {
    title: 'Autonomous Multi-Agent Data Analysis System',
    stack: 'Python · PydanticAI · LLM APIs · Pandas · Scikit-learn',
    description:
      'Fully autonomous agentic AI system with specialized agents for data quality, statistical analysis, and visualization — orchestrated dynamically via PydanticAI. Stateful routing, type-safe configs, and robust inter-agent communication.',
    highlight: '90% reduction in manual data analysis time across Hugging Face & CSV datasets',
    github: 'https://github.com/ShreyanshWarde/MultiAgents_DataAnalysis-main2',
  },
  {
    title: 'DeepTrack — Face Recognition Attendance',
    stack: 'Python · YOLOv11 · ResNet50 · Deep Learning · MySQL · JSON',
    description:
      'Enterprise-grade real-time attendance system using YOLOv11 face detection and deep learning embeddings. JSON-based configurable ROI zones and hash-based embedding cache for multi-face throughput on commodity hardware.',
    highlight: 'Modular architecture: detection, recognition, and attendance layers fully decoupled',
    github: 'https://github.com/ShreyanshWarde',
  },
]

const SKILLS = [
  { category: 'Languages', items: ['Python (Advanced)', 'TypeScript', 'Java', 'SQL', 'Async/Await'] },
  { category: 'AI / ML', items: ['LLM Orchestration', 'Multi-Agent Systems', 'YOLOv11', 'Scikit-learn', 'Pandas', 'NumPy'] },
  { category: 'Backend', items: ['FastAPI', 'PydanticAI', 'OpenAI SDK', 'OAuth2', 'JWT', 'RESTful APIs'] },
  { category: 'Frontend', items: ['React', 'TypeScript', 'HTML/CSS', 'REST API Integration'] },
  { category: 'Databases', items: ['MySQL', 'SQL Modeling', 'NoSQL (familiar)', 'ChromaDB'] },
  { category: 'Tools', items: ['Git/GitHub', 'Logfire', 'OpenTelemetry', 'Tableau', 'AWS (learning)'] },
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/ShreyanshWarde' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyansh-warde-812666299/' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1urLcn_DEI45-SP9prSbJ5C-dKRZaYU_q/view' },
  { label: 'Email', href: 'mailto:shreyanshwarde2011@gmail.com' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.classList.add('visible')
            observerRef.current?.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a href="#" className="nav-logo">SW</a>
        <div className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          <a href="#work" className="nav-link" onClick={closeMenu}>Work</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a
            href="mailto:shreyanshwarde2011@gmail.com"
            className="nav-cta"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <span className="hero-tag">AI/ML Engineer · Mumbai</span>
          <h1 className="hero-headline">
            I build AI systems<br />
            <span className="hero-accent">that actually work.</span>
          </h1>
          <p className="hero-sub">
            Multi-agent architectures. Computer vision pipelines. LLM-powered applications.
            <br className="hero-br" />
            Fresh grad with a portfolio that speaks louder than a degree.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">See my work</a>
            <a href="https://github.com/ShreyanshWarde" target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/shreyansh-warde-812666299/" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <span className="hero-scroll-hint" aria-hidden="true">scroll ↓</span>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="section-inner">
          <h2 className="section-heading reveal">The Work</h2>
          <div className="projects-list">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="project-card reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="project-header">
                  <div className="project-meta">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-stack">{p.stack}</p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-highlight">
                  <span className="highlight-dot" aria-hidden="true" />
                  {p.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section--alt" id="skills">
        <div className="section-inner">
          <h2 className="section-heading reveal">Technical Stack</h2>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div
                key={i}
                className="skill-block reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h4 className="skill-category">{s.category}</h4>
                <div className="skill-tags">
                  {s.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-inner about-inner">
          <div className="about-left reveal">
            <h2 className="section-heading">About</h2>
            <p className="about-text">
              I am a final-year Electronics &amp; Telecom engineer at TSEC Mumbai, but my real
              education happened building AI systems late at night. I care about the gap between a
              demo and a deployment — multi-agent systems that hold under real conditions, face
              recognition that runs on cheap hardware, email agents that do not hallucinate replies.
            </p>
            <p className="about-text">
              Actively looking for remote AI/ML roles or Mumbai-based internships, especially at
              companies that evaluate through projects — not just interviews.
            </p>
            <div className="about-contacts">
              <a href="mailto:shreyanshwarde2011@gmail.com" className="contact-link">
                <span className="contact-icon">✉</span>
                shreyanshwarde2011@gmail.com
              </a>
              <a href="https://github.com/ShreyanshWarde" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon">⌥</span>
                github.com/ShreyanshWarde
              </a>
              <a href="tel:+917045078091" className="contact-link">
                <span className="contact-icon">☎</span>
                +91 70450 78091
              </a>
            </div>
          </div>

          <div className="about-right reveal">
            <div className="edu-block">
              <p className="edu-label">Education</p>
              <div className="edu-item">
                <span className="edu-degree">B.E. Electronics &amp; Telecom Engineering</span>
                <span className="edu-school">TSEC Mumbai · 2022–Present</span>
                <span className="edu-detail">CGPA 6.67 · Final Year</span>
              </div>
              <div className="edu-item">
                <span className="edu-degree">HSC Science · 85.17%</span>
                <span className="edu-school">Cambridge Junior College, Latur · 2022</span>
              </div>
            </div>
            <div className="edu-block">
              <p className="edu-label">Certifications</p>
              <div className="edu-item">
                <span className="edu-degree">Deloitte Data Analytics Job Simulation</span>
                <span className="edu-school">Forage · Data analysis &amp; forensic technology</span>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1urLcn_DEI45-SP9prSbJ5C-dKRZaYU_q/view"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              View Full Resume ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-copy">Shreyansh Warde · 2026</span>
        <div className="footer-links">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto') ? undefined : 'noreferrer'}
              className="footer-link"
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
