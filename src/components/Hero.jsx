import { motion } from 'framer-motion'
import { ArrowDown, GitFork as Github, Link2 as Linkedin, Mail, Code2 } from 'lucide-react'

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:Jeffharell.climaco@hcdc.edu.ph', label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(124,111,255,0.12) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '0%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,107,157,0.08) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '30%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,229,196,0.06) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(30px)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'rgba(124,111,255,0.1)', border: '1px solid rgba(124,111,255,0.25)', fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent3)', boxShadow: '0 0 8px var(--accent3)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Available for opportunities
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Hi, I'm{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Jeff Harell
            </span>
            <br />
            <span style={{ color: 'var(--text)' }}>Climaco</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <Code2 size={20} color="var(--accent3)" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 600, color: 'var(--text2)' }}>
              Full Stack Developer & IT Student
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
            style={{ fontSize: '1.08rem', color: 'var(--text2)', lineHeight: 1.75, maxWidth: 580, marginBottom: 40 }}>
            I build modern, fast, and accessible web applications. Passionate about crafting clean code and beautiful user experiences that make a real impact.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
            style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                {s.icon}
              </a>
            ))}
            <div style={{ width: 1, height: 24, background: 'var(--border)', margin: '0 4px' }} />
            <span style={{ fontSize: 13, color: 'var(--text3)' }}>@jeffharell</span>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--text3)', fontSize: 12 }}>
        <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  )
}