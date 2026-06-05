import { Heart, ArrowUp, Terminal } from 'lucide-react'

const marqueeItems = ['React', 'Node.js', 'PHP', 'MySQL', 'Laravel', 'JavaScript', 'TypeScript', 'MongoDB', 'Python', 'Git', 'Docker', 'Tailwind', 'Next.js', 'Firebase']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Marquee tech strip */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '14px 0', overflow: 'hidden', background: 'var(--surface)' }}>
        <div style={{ display: 'flex', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, color: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--accent2)' : 'var(--accent3)', padding: '0 20px', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
              {item} <span style={{ color: 'var(--text3)', marginLeft: 20 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '28px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        {/* Logo + copy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', border: '1.5px solid var(--accent)', flexShrink: 0 }}>
            <img src="/portrait.png" alt="Jeff Harell" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>Jeff Harell Climaco</div>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>© 2026 · All rights reserved.</div>
          </div>
        </div>

        {/* Built with */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text3)', fontFamily: 'var(--font-display)' }}>
          <Terminal size={13} color="var(--accent3)" />
          Built with <Heart size={12} color="var(--accent2)" fill="var(--accent2)" /> using React + Vite
        </div>

        {/* Scroll to top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-hover
          style={{ width: 38, height: 38, borderRadius: 9, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 16px var(--glow-accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.boxShadow = 'none' }}>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  )
}