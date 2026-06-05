import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { GraduationCap, Code, Coffee, Heart, Download, Sparkles } from 'lucide-react'

const stats = [
  { value: 3, suffix: '+', label: 'months of hands-on experience', color: 'var(--accent)' },
  { value: 5, suffix: '+', label: 'Projects Built', color: 'var(--accent2)' },
  { value: 3, suffix: '+', label: 'Certificates', color: 'var(--accent3)' },
  { value: 100, suffix: '%', label: 'Growth Mindset', color: 'var(--accent4)' },
]

const highlights = [
  { icon: <GraduationCap size={16} />, text: 'BS Information Technology — Holy Cross of Davao College', color: 'var(--accent)' },
  { icon: <Code size={16} />, text: 'Specialized in Software Development', color: 'var(--accent2)' },
  { icon: <Coffee size={16} />, text: 'Coffee-fueled code sessions & late night debugging', color: 'var(--accent3)' },
  { icon: <Heart size={16} />, text: 'Passionate about open-source & community learning', color: 'var(--accent4)' },
]

// Animated counter
function Counter({ value, suffix, color, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 1400
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span style={{ background: `linear-gradient(135deg, ${color}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {count}{suffix}
    </span>
  )
}

function StatCard({ stat, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.5, type: 'spring' }}
      style={{ textAlign: 'center', padding: '22px 16px', background: 'var(--surface)', borderRadius: 14, border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = stat.color; e.currentTarget.style.boxShadow = `0 8px 32px ${stat.color}22` }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: stat.color, opacity: 0.7 }} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, marginBottom: 4, transition: 'all 0.3s' }}>
        <Counter value={stat.value} suffix={stat.suffix} color={stat.color} inView={inView} />
      </div>
      <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const photoRef = useRef(null)

  // 3D tilt on photo
  const handleTilt = (e) => {
    if (!photoRef.current) return
    const rect = photoRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    photoRef.current.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`
  }
  const resetTilt = () => {
    if (photoRef.current) photoRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <section id="about" style={{ background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      {/* Top border line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)', opacity: 0.4 }} />

      {/* Background decoration */}
      <div style={{ position: 'absolute', right: -100, top: '10%', width: 400, height: 400, borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.3 }} />
      <div style={{ position: 'absolute', right: -60, top: '20%', width: 250, height: 250, borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.2 }} />

      <div className="container" ref={ref}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>

          {/* Photo + stats */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            {/* Photo with tilt */}
            <div style={{ position: 'relative', marginBottom: 32, display: 'inline-block' }}>
              {/* Decorative rings */}
              <div style={{ position: 'absolute', inset: -12, borderRadius: 28, border: '1px dashed rgba(124,111,255,0.25)', animation: 'float 8s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', inset: -24, borderRadius: 36, border: '1px dashed rgba(255,107,157,0.15)', animation: 'float 10s ease-in-out infinite reverse' }} />

              <div ref={photoRef} onMouseMove={handleTilt} onMouseLeave={resetTilt}
                style={{ width: 220, height: 220, borderRadius: 22, overflow: 'hidden', position: 'relative', boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 0 2px var(--accent)', transition: 'transform 0.15s ease' }}>
                <img src="/portrait.png" alt="Jeff Harell Climaco" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,111,255,0.08) 0%, transparent 60%)' }} />
              </div>

              {/* Status badge */}
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: -14, right: -14, background: 'var(--bg)', border: '1.5px solid var(--accent3)', borderRadius: 12, padding: '7px 14px', fontSize: 12, fontWeight: 700, color: 'var(--accent3)', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 8px 24px rgba(0,229,196,0.2)', whiteSpace: 'nowrap' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
                Open to work
              </motion.div>

              {/* Sparkle */}
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                style={{ position: 'absolute', top: -10, left: -10, color: 'var(--accent4)' }}>
                <Sparkles size={20} />
              </motion.div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} inView={inView} />)}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Building digital{' '}
              <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>experiences</span>
              <br />that matter
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 20, fontSize: '1.02rem' }}>
              I'm <strong style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}>Jeff Harell Climaco</strong>, a passionate IT student and aspiring software developer from Davao City, Philippines. I love turning ideas into elegant, functional software that solves real-world problems.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 36, fontSize: '1.02rem' }}>
              My journey started with curiosity about how websites work, which evolved into a deep passion for clean code, intuitive design, and scalable architecture.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
              {highlights.map((h, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.35 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 18px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', transition: 'all 0.2s', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = h.color; e.currentTarget.style.background = 'var(--surface2)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: h.color, borderRadius: 12, opacity: 0.7 }} />
                  <span style={{ color: h.color, flexShrink: 0 }}>{h.icon}</span>
                  <span style={{ fontSize: 13.5, color: 'var(--text2)' }}>{h.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.75 }}>
              <a href="/CV.pdf" download="Jeff_Harell_Climaco_CV.pdf" className="btn btn-primary" data-hover style={{ display: 'inline-flex' }}>
                <Download size={15} /> Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}