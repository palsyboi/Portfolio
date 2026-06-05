import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { ArrowDown, GitFork as Github, Link2 as Linkedin, Mail, Terminal } from 'lucide-react'

const roles = [
  'Software Developer',
  'IT Student',
  'Full Stack Builder',
  'Open Source Enthusiast',
  'Problem Solver',
]

const socials = [
  { icon: <Github size={17} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <Linkedin size={17} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <Mail size={17} />, href: 'mailto:Jeffharell.climaco@hcdc.edu.ph', label: 'Email' },
]

function Particle({ x, y, size, color, duration, delay }) {
  return (
    <motion.div
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: size, height: size, borderRadius: '50%', background: color, pointerEvents: 'none' }}
      animate={{ y: [0, -30, 0, 20, 0], x: [0, 10, -10, 5, 0], opacity: [0.15, 0.5, 0.15, 0.4, 0.15], scale: [1, 1.3, 0.8, 1.1, 1] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const particles = [
  { x: 10, y: 20, size: 4, color: '#7c6fff', duration: 8, delay: 0 },
  { x: 85, y: 15, size: 6, color: '#ff6b9d', duration: 10, delay: 1 },
  { x: 60, y: 70, size: 3, color: '#00e5c4', duration: 7, delay: 2 },
  { x: 25, y: 80, size: 5, color: '#ffd166', duration: 9, delay: 0.5 },
  { x: 75, y: 45, size: 3, color: '#7c6fff', duration: 11, delay: 3 },
  { x: 45, y: 10, size: 4, color: '#ff6b9d', duration: 6, delay: 1.5 },
  { x: 90, y: 60, size: 5, color: '#00e5c4', duration: 12, delay: 4 },
  { x: 5, y: 55, size: 3, color: '#ffd166', duration: 8, delay: 2.5 },
]

function useTyping(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(w => (w + 1) % words.length)
    }
    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function GlitchText({ text, style }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', ...style }}>
      {text}
      <span aria-hidden style={{ position: 'absolute', inset: 0, color: 'var(--accent)', animation: 'glitch1 4s infinite linear', clipPath: 'inset(0 0 95% 0)' }}>{text}</span>
      <span aria-hidden style={{ position: 'absolute', inset: 0, color: 'var(--accent2)', animation: 'glitch2 4s infinite linear', clipPath: 'inset(50% 0 30% 0)' }}>{text}</span>
    </span>
  )
}

export default function Hero() {
  const role = useTyping(roles)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const [terminalDone, setTerminalDone] = useState(false)
  const [termLines, setTermLines] = useState([])

  const lines = [
    { text: '$ whoami', delay: 300 },
    { text: '> jeff_harell_climaco', delay: 700, color: 'var(--accent3)' },
    { text: '$ cat skills.txt', delay: 1200 },
    { text: '> React · Node.js · PHP · MySQL', delay: 1600, color: 'var(--accent)' },
    { text: '$ status --check', delay: 2100 },
    { text: '> Available for opportunities ✓', delay: 2500, color: 'var(--accent2)' },
  ]

  useEffect(() => {
    lines.forEach(({ text, delay, color }) => {
      setTimeout(() => {
        setTermLines(prev => [...prev, { text, color }])
        if (delay === 2500) setTimeout(() => setTerminalDone(true), 500)
      }, delay)
    })
  }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 62 }}>

      {/* Background orbs */}
      <div className="orb" style={{ width: 500, height: 500, top: '-10%', right: '-5%', background: 'radial-gradient(circle, rgba(124,111,255,0.14) 0%, transparent 70%)' }} />
      <div className="orb" style={{ width: 400, height: 400, bottom: '0%', left: '-8%', background: 'radial-gradient(circle, rgba(255,107,157,0.10) 0%, transparent 70%)' }} />
      <div className="orb" style={{ width: 300, height: 300, top: '40%', left: '40%', background: 'radial-gradient(circle, rgba(0,229,196,0.07) 0%, transparent 70%)' }} />

      {/* Particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Scanline */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />

      <motion.div className="container" style={{ position: 'relative', zIndex: 1, y, opacity, width: '100%' }}>

        {/* Two-column on desktop, single column on mobile */}
        <div className="hero-grid">

          {/* Left — main content */}
          <div className="hero-left">

            {/* Status badge */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'rgba(0,229,196,0.08)', border: '1px solid rgba(0,229,196,0.2)', fontSize: 11, color: 'var(--accent3)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 24, letterSpacing: '0.05em' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', boxShadow: '0 0 10px var(--accent3)', display: 'inline-block', animation: 'pulse-glow 2s infinite', flexShrink: 0 }} />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            {/* Name */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 10vw, 6rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 18 }}>
              <span style={{ display: 'block', color: 'var(--text2)', fontSize: '0.38em', fontWeight: 500, letterSpacing: '0.1em', marginBottom: 8 }}>Hi, I'm</span>
              <GlitchText text="Jeff" style={{ background: 'linear-gradient(135deg, var(--accent), #b8afff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
              {' '}
              <GlitchText text="Harell" style={{ color: 'var(--text)' }} />
              <br />
              <span style={{ color: 'var(--text)', fontSize: '0.75em' }}>Climaco</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '1rem', flexShrink: 0 }}>{'>'}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)', fontWeight: 600, color: 'var(--accent3)', minWidth: 0 }}>
                {role}<span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>_</span>
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              style={{ fontSize: 'clamp(0.9rem, 3vw, 1.05rem)', color: 'var(--text2)', lineHeight: 1.8, maxWidth: 520, marginBottom: 32 }}>
              Building modern, fast, and accessible web applications. Passionate about crafting{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>clean code</span> and{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>beautiful experiences</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <a href="#projects" className="btn btn-primary" style={{ fontSize: 13 }}>
                <Terminal size={14} /> View My Work
              </a>
              <a href="#contact" className="btn btn-outline" style={{ fontSize: 13 }}>Get In Touch</a>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-hover
                  style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 6px 20px var(--glow-accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                  {s.icon}
                </a>
              ))}
              <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 4px' }} />
              <span style={{ fontSize: 12, color: 'var(--text3)', fontFamily: 'var(--font-display)' }}>@jeffharell</span>
            </motion.div>
          </div>

          {/* Right — terminal (hidden on mobile via CSS) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-terminal"
            style={{ background: 'var(--surface)', border: '1px solid var(--border-bright)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,111,255,0.1)', animation: 'float 6s ease-in-out infinite' }}>
            <div style={{ padding: '11px 16px', background: 'var(--bg3)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbc2e' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-display)' }}>jeff@portfolio ~</span>
            </div>
            <div style={{ padding: '16px 18px', fontFamily: 'var(--font-display)', fontSize: 12, lineHeight: 1.85, minHeight: 190 }}>
              {termLines.map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
                  style={{ color: line.color || 'var(--text2)' }}>
                  {line.text}
                </motion.div>
              ))}
              {!terminalDone && <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>█</span>}
              {terminalDone && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  style={{ marginTop: 12, padding: '8px 12px', background: 'rgba(0,229,196,0.08)', borderRadius: 6, border: '1px solid rgba(0,229,196,0.15)', fontSize: 11, color: 'var(--accent3)' }}>
                  ✓ Ready to build something great.
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--accent))', animation: 'pulse-glow 2s infinite' }} />
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} color="var(--accent)" />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: center;
        }
        .hero-terminal {
          width: 340px;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .hero-terminal {
            display: none !important;
          }
          .hero-left {
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-left {
            padding-top: 12px;
          }
        }
      `}</style>
    </section>
  )
}