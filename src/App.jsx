import { useEffect, useRef, useState } from 'react'
import { i18n, links, tech, projects, skillGroups } from './content.js'

const SECTIONS = ['about', 'work', 'research', 'skills', 'contact']

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'es') return saved
  } catch {}
  return 'en'
}

// Adds .in to the element once it scrolls into view (CSS handles the transition).
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

function Navbar({ t, lang, setLang, active }) {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a className="nav-logo" href="#top" aria-label="Home">IR</a>
        <ul className="nav-links">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="lang" role="group" aria-label="Language">
          {['en', 'es'].map((l) => (
            <button key={l} className={lang === l ? 'on' : ''} onClick={() => setLang(l)} aria-pressed={lang === l}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <Reveal className="status">
          <span className="dot" /> {t.hero.status}
        </Reveal>
        <Reveal as="h1" delay={80}>
          <span className="name">Israel Ramírez Morales</span>
          {t.hero.title}
        </Reveal>
        <Reveal delay={160} className="hero-meta">
          <span>{t.hero.location}</span>
        </Reveal>
        <Reveal delay={240} className="actions">
          <a className="btn primary" href="#contact">{t.hero.cta}</a>
          <a className="btn" href="#work">{t.hero.work}</a>
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </Reveal>
      </div>
    </section>
  )
}

function Marquee() {
  const row = [...tech, ...tech]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row.map((name, i) => (
          <span key={i}>{name}</span>
        ))}
      </div>
    </div>
  )
}

function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2">{t.about.title}</Reveal>
        <div className="about-grid">
          <Reveal as="p" className="lead" delay={80}>{t.about.text}</Reveal>
          <Reveal as="dl" className="facts" delay={160}>
            {t.about.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, t, i }) {
  const item = t.work.items[p.id]
  return (
    <Reveal as="article" className="card" delay={i * 90}>
      <div className="shot">
        {p.image ? (
          <img src={p.image} alt={`${item.name} screenshot`} loading="lazy" />
        ) : (
          <div className="shot-ph">
            <span>{item.name}</span>
            <small>{t.work.placeholder}</small>
          </div>
        )}
      </div>
      <div className="card-body">
        <span className="tag">{item.tag}</span>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <p className="role"><strong>{t.work.role}:</strong> {item.role}</p>
        <ul className="chips">
          {p.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <a className="link" href={p.repo} target="_blank" rel="noreferrer">{t.work.repo} ↗</a>
      </div>
    </Reveal>
  )
}

function Work({ t }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal as="h2">{t.work.title}</Reveal>
        <div className="cards">
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} t={t} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function Research({ t }) {
  return (
    <section className="section" id="research">
      <div className="container">
        <Reveal as="h2">{t.research.title}</Reveal>
        <Reveal className="research" delay={80}>
          <h3>{t.research.project}</h3>
          <p>{t.research.desc}</p>
          <ol className="timeline">
            {t.research.timeline.map(([when, what, where]) => (
              <li key={what}>
                <span className="when">{when}</span>
                <div>
                  <strong>{what}</strong>
                  <span>{where}</span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal as="h2">{t.skills.title}</Reveal>
        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.id} className="skill-group" delay={i * 80}>
              <h3>{t.skills.groups[g.id]}</h3>
              <ul className="chips">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal as="h2" className="big">{t.contact.title}</Reveal>
        <Reveal as="p" className="lead" delay={80}>{t.contact.text}</Reveal>
        <Reveal className="actions" delay={160}>
          <a className="btn primary" href={`mailto:${links.email}`}>{links.email}</a>
          <button className="btn" onClick={copy}>{copied ? t.contact.copied : t.contact.copy}</button>
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang)
  const [active, setActive] = useState('')
  const t = i18n[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} active={active} />
      <main>
        <Hero t={t} />
        <Marquee />
        <About t={t} />
        <Work t={t} />
        <Research t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} · {t.footer}</div>
      </footer>
    </>
  )
}
