import React from "react";
import { createRoot } from "react-dom/client";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Code2, BrainCircuit, Database, Sparkles } from "lucide-react";
import "./style.css";

const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <div className="grid-bg" />
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>SAI<span className="accent">.</span></span>
        </button>
        <nav>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("education")}>Education</button>
          <button className="nav-contact" onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR LEARNING & BUILDING</div>
            <p className="hello">Hello, I'm</p>
            <h1>KOKKIRALA<br /><span>CHETAN SAI</span></h1>
            <div className="role-line">
              <span className="line" />
              <strong>Software Engineer <span>•</span> AI/ML Enthusiast</strong>
            </div>
            <p className="hero-text">
              A CSE-AIML student passionate about building useful software,
              exploring artificial intelligence, and turning ideas into real projects.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>View My Work <ArrowDown size={17} /></button>
              <button className="ghost-btn" onClick={() => scrollTo("contact")}>Let's Connect</button>
            </div>
            <div className="social-row">
              <a href="https://github.com/chetan-1919" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/chetan-sai-kokkirala-57a11331b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:chetansaikokkirala@gmail.com" aria-label="Email"><Mail size={19} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="photo-frame">
              <div className="corner c1" /><div className="corner c2" /><div className="corner c3" /><div className="corner c4" />
              <div className="photo-placeholder">
                <img
                  src={profileImage}
                  alt="Chetan Sai"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="placeholder-content">
                  <span className="placeholder-icon"><Code2 size={36} /></span>
                </div>
              </div>
            </div>
            <div className="float-card card-top"><span>01</span><div><small>FOCUS</small><strong>AI / ML</strong></div></div>
            <div className="float-card card-bottom"><span>02</span><div><small>BUILDING</small><strong>React Apps</strong></div></div>
          </div>
        </section>

        <section id="about" className="section two-col">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div><p>GET TO KNOW ME</p><h2>About <span>Me</span></h2></div>
          </div>
          <div className="about-content">
            <p className="lead">I'm Sai, a third-year <strong>CSE-AIML</strong> student at Bapatla Engineering College.</p>
            <p>I'm working toward becoming a software engineer while exploring the world of AI and machine learning. I enjoy learning by building, experimenting with new technologies, and gradually turning small ideas into useful applications.</p>
            <p>Right now, I'm strengthening my foundations in Python, SQL, web development, JavaScript, and React — with bigger projects on the way.</p>
            <div className="mini-stats">
              <div><strong>7.63</strong><span>Current CGPA</span></div>
              <div><strong>3rd</strong><span>Year · CSE-AIML</span></div>
              <div><strong>06+</strong><span>Core Technologies</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div><p>WHAT I WORK WITH</p><h2>My <span>Skills</span></h2></div>
          </div>
          <div className="skills-grid">
            <Skill icon={<Code2 />} title="Development" items={["HTML", "CSS", "JavaScript", "React"]} />
            <Skill icon={<BrainCircuit />} title="Programming" items={["Python", "JS Fundamentals"]} />
            <Skill icon={<Database />} title="Data" items={["SQL"]} />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div><p>THINGS I'VE BUILT</p><h2>Featured <span>Projects</span></h2></div>
          </div>
          <div className="projects-grid">
            <Project number="01" title="Attendance Calculator" desc="A simple utility designed to calculate attendance percentages and help students track their attendance status." tags={["HTML", "CSS", "JavaScript"]} />
            <Project number="02" title="CGPA Calculator" desc="A student-focused calculator for working out CGPA from academic performance and making grade calculations easier." tags={["HTML", "CSS", "JavaScript"]} />
            <div className="project-card coming">
              <div className="coming-icon"><Sparkles size={25} /></div>
              <div><span className="project-label">NEXT UP</span><h3>More projects coming soon</h3><p>I'm currently learning and building. This space will grow with new software and AI/ML projects.</p></div>
              <span className="status-pill">IN PROGRESS</span>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div><p>MY ACADEMIC JOURNEY</p><h2>Education & <span>Journey</span></h2></div>
          </div>
          <div className="timeline">
            <Timeline year="CURRENT" title="Bapatla Engineering College" sub="CSE — Artificial Intelligence & Machine Learning · 3rd Year" score="CGPA 7.63" />
            <Timeline year="12TH" title="VGRM Junior College" sub="Higher Secondary Education" score="94%" />
            <Timeline year="10TH" title="Bapatla Public School" sub="Secondary School Education" score="80%" />
          </div>
        </section>

        <section className="section interests">
          <div className="interest-card"><span>01</span><strong>CRICKET</strong><small>ON THE FIELD</small></div>
          <div className="interest-card"><span>02</span><strong>EXPLORING</strong><small>NEW TECH</small></div>
          <div className="interest-card"><span>03</span><strong>BUILDING</strong><small>NEW IDEAS</small></div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <span className="section-number">05</span>
            <p>HAVE AN IDEA OR OPPORTUNITY?</p>
            <h2>Let's build something<br /><span>interesting.</span></h2>
            <a className="primary-btn contact-btn" href="mailto:chetansaikokkirala@gmail.com">Get In Touch <Mail size={17} /></a>
            <div className="contact-links">
              <a href="mailto:chetansaikokkirala@gmail.com"><Mail size={17} /> chetansaikokkirala@gmail.com</a>
              <a href="https://www.linkedin.com/in/chetan-sai-kokkirala-57a11331b/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a>
              <a href="https://github.com/chetan-1919" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Kokkirala Chetan Sai</span><span>DESIGNED & BUILT WITH <b>REACT</b></span></footer>
    </div>
  );
}

function Skill({ icon, title, items }) {
  return <div className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><div className="tag-list">{items.map(x => <span key={x}>{x}</span>)}</div></div>;
}
function Project({ number, title, desc, tags }) {
  return <article className="project-card"><div className="project-head"><span>{number}</span><div className="project-window"><i/><i/><i/></div></div><span className="project-label">PROJECT</span><h3>{title}</h3><p>{desc}</p><div className="tag-list">{tags.map(x => <span key={x}>{x}</span>)}</div></article>;
}
function Timeline({ year, title, sub, score }) {
  return <div className="timeline-item"><div className="timeline-dot"/><span className="timeline-year">{year}</span><div className="timeline-main"><h3>{title}</h3><p>{sub}</p></div><strong className="timeline-score">{score}</strong></div>;
}

createRoot(document.getElementById("root")).render(<App />);
