import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  X,
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "Frontend", items: ["React.js", "React Hooks", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MVC", "JWT"] },
  { title: "Data & Cloud", items: ["PostgreSQL", "MongoDB", "Prisma", "AWS S3", "SQLite"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Firebase"] },
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "MERN STACK",
    url: "https://e-commerce-rho-flax.vercel.app/",
    image: "/ecommerce-preview.png",
    description:
      "A full-stack shopping experience with product discovery, filtering, cart management, secure authentication, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    number: "02",
    title: "Backend REST API",
    category: "API & CLOUD",
    description:
      "A scalable REST API service built with secure authentication, validated requests, PostgreSQL migrations, and AWS S3 file storage.",
    tags: ["Express", "PostgreSQL", "Prisma", "JWT", "AWS S3"],
  },
];

const experience = [
  {
    period: "JAN 2026 — MAY 2026",
    role: "Full Stack Developer Intern",
    company: "Anukta Infotech Pvt. Ltd.",
    certificate: "https://drive.google.com/file/d/1JKCu1PVIFcMeKc9GT8Zg1hNFCjkhb0Nj/view",
    points: [
      "Built and maintained full-stack application features using React.js and Node.js.",
      "Integrated REST APIs and worked with PostgreSQL and MongoDB.",
      "Implemented JWT authentication and contributed to debugging and deployment.",
    ],
  },
  {
    period: "2024",
    role: "Full Stack Developer Intern",
    company: "NIVRI Solutions",
    points: [
      "Developed React.js interfaces and connected REST APIs.",
      "Built backend services with Express, Prisma, PostgreSQL, and MongoDB.",
      "Used secure authentication and collaborative Git workflows.",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "nav scrolled" : "nav"}>
        <a className="logo" href="#top" aria-label="Home" onClick={closeMenu}>
          MM<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="mailto:mahamadmuzammil635@gmail.com" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Available for opportunities</div>
              <h1>Mahammad<br /><em>Muzammil</em></h1>
              <p className="hero-role">FULL STACK DEVELOPER</p>
              <p className="hero-description">
                I build thoughtful digital experiences and reliable backend systems
                — from a polished interface to a production-ready API.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a className="button button-ghost" href="mailto:mahamadmuzammil635@gmail.com">
                  <Mail size={18} /> Get in touch
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-label="Developer profile">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="monogram">M<span>M</span></div>
              <div className="code-card code-card-one">
                <Code2 size={18} />
                <div><b>React.js</b><small>Frontend</small></div>
              </div>
              <div className="code-card code-card-two">
                <BriefcaseBusiness size={18} />
                <div><b>Node.js</b><small>Backend</small></div>
              </div>
            </div>
          </div>
          <div className="hero-meta">
            <span><MapPin size={16} /> Bhimavaram, Andhra Pradesh</span>
            <span>React · Node.js · PostgreSQL · MongoDB</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-content">
            <h2>Turning ideas into<br /><em>working products.</em></h2>
            <div className="about-copy">
              <p>
                Full Stack Developer with internship experience building web applications
                across React.js, Node.js, Express.js, MongoDB, and PostgreSQL.
              </p>
              <p>
                I enjoy solving real problems, designing clean APIs, shaping responsive
                interfaces, and improving systems through thoughtful engineering.
              </p>
              <div className="quick-stats">
                <div><strong>8.0</strong><span>CGPA</span></div>
                <div><strong>2+</strong><span>Internships</span></div>
                <div><strong>3+</strong><span>Core stacks</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-label">02 / EXPERIENCE</div>
          <div className="section-heading">
            <h2>Experience that<br /><em>ships.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  {item.certificate && (
                    <a
                      className="certificate-link"
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Internship Certificate <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading inline-heading">
            <h2>Featured<br /><em>projects.</em></h2>
            <span>{projects.length.toString().padStart(2, "0")} projects</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const card = (
                <>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-preview">
                  {project.image ? (
                    <img
                      className="project-screenshot"
                      src={project.image}
                      alt={`${project.title} homepage preview`}
                    />
                  ) : (
                    <div className="preview-window">
                      <div className="preview-bar"><i /><i /><i /></div>
                      <div className="api-preview">
                        <>
                          <div className="preview-code"><b>{"{"}</b><i /><i /><i /><b>{"}"}</b></div>
                          <div className="preview-result"><i /><i /></div>
                        </>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                </>
              );

              return project.url ? (
                <a
                  className="project-card"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live website`}
                  key={project.title}
                >
                  {card}
                </a>
              ) : (
                <article className="project-card" key={project.title}>
                  {card}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-label">04 / SKILLS</div>
          <div className="skills-layout">
            <h2>Tools I work<br /><em>with.</em></h2>
            <div className="skill-grid">
              {skills.map((skill) => (
                <div className="skill-group" key={skill.title}>
                  <h3>{skill.title}</h3>
                  {skill.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <div className="section-label">05 / CONTACT</div>
            <h2>Have an idea?<br /><em>Let's build it.</em></h2>
          </div>
          <a className="contact-link" href="mailto:mahamadmuzammil635@gmail.com">
            mahamadmuzammil635@gmail.com <ArrowUpRight />
          </a>
        </section>
      </main>

      <footer>
        <a className="logo footer-logo" href="#top">MM<span>.</span></a>
        <p>© 2026 Mahammad Muzammil</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:mahamadmuzammil635@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
