import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button onClick={toggleTheme} whileTap={{ scale: 0.88 }} data-hover
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      style={{ width: 38, height: 38, borderRadius: 9, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s', flexShrink: 0 }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 16px var(--glow-accent)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.boxShadow = 'none' }}>
      <AnimatePresence mode="wait">
        <motion.span key={theme} initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }} style={{ display: 'flex' }}>
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
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
        padding: '0 20px', height: '62px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Logo */}
      <a href="#home" data-hover style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <motion.div whileHover={{ scale: 1.05 }} style={{ width: 34, height: 34, borderRadius: 9, overflow: 'hidden', border: '2px solid var(--accent)', flexShrink: 0, boxShadow: '0 0 16px rgba(124,111,255,0.3)' }}>
          <img src="/portrait.png" alt="Jeff Harell" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: 'var(--text)', letterSpacing: '-0.01em' }}>Jeff Harell</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, color: 'var(--accent3)', letterSpacing: '0.08em' }}>Software Dev</span>
        </div>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="desktop-nav">
        {links.map(link => {
          const isActive = active === link.href.slice(1)
          return (
            <a key={link.href} href={link.href} data-hover
              style={{ position: 'relative', padding: '6px 13px', borderRadius: 7, fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-display)', color: isActive ? 'var(--accent)' : 'var(--text2)', background: isActive ? 'rgba(124,111,255,0.1)' : 'transparent', transition: 'all 0.2s', letterSpacing: '0.01em' }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--surface)' } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' } }}>
              {link.label}
              {isActive && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)' }} />
              )}
            </a>
          )
        })}
      </nav>

      {/* Desktop right: theme only (no hire me) */}
      <div style={{ display: 'flex', alignItems: 'center' }} className="desktop-nav">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Mobile: theme + hamburger */}
      <div className="mobile-nav" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: 'var(--text)', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', top: '62px', left: 0, right: 0, background: 'var(--navbar-mobile-bg)', backdropFilter: 'blur(24px)', borderBottom: '1px solid var(--border)', padding: '10px 16px 18px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {links.map((link, i) => (
              <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                style={{ padding: '12px 16px', borderRadius: 10, fontSize: 15, fontFamily: 'var(--font-display)', fontWeight: 500, color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text2)', background: active === link.href.slice(1) ? 'rgba(124,111,255,0.1)' : 'transparent', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--accent3)', fontSize: 12 }}>//</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
      `}</style>
    </motion.header>
  )
}