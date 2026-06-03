import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { threshold: 0.4 }
    )
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8, background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'white'
        }}>JH</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>
          Jeff Harell
        </span>
      </a>

      <nav style={{ display: 'flex', gap: 4 }} className="desktop-nav">
        {links.map(link => (
          <a key={link.href} href={link.href} style={{
            padding: '6px 14px', borderRadius: 6, fontSize: 14, fontWeight: 500,
            color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text2)',
            background: active === link.href.slice(1) ? 'rgba(124,111,255,0.1)' : 'transparent',
            transition: 'all 0.2s',
          }}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn btn-primary desktop-nav" style={{ padding: '8px 20px', fontSize: 13 }}>
        Hire Me
      </a>

      <button className="mobile-nav" onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: 4 }}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '68px', left: 0, right: 0,
              background: 'rgba(10,10,15,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)', padding: '16px 24px',
              display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500,
                color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text2)',
                background: active === link.href.slice(1) ? 'rgba(124,111,255,0.1)' : 'transparent',
              }}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav { display: block !important; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
      `}</style>
    </motion.header>
  )
}