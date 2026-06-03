import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6, overflow: 'hidden',
            border: '1.5px solid var(--accent)', flexShrink: 0,
          }}>
            <img
              src="/portrait.png"
              alt="Jeff Harell"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <span style={{ fontSize: 13, color: 'var(--text3)' }}>© 2025 Jeff Harell Climaco. All rights reserved.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text3)' }}>
          Built with <Heart size={13} color="var(--accent2)" fill="var(--accent2)" /> using React + Vite
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  )
}