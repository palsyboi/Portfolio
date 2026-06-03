import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Code, Coffee, Heart } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Certificates' },
  { value: '100%', label: 'Dedication' },
]

const highlights = [
  { icon: <GraduationCap size={18} />, text: 'BS Information Technology — Holy Cross of Davao College' },
  { icon: <Code size={18} />, text: 'Specialized in Full Stack Web Development' },
  { icon: <Coffee size={18} />, text: 'Coffee-fueled code sessions & late night debugging' },
  { icon: <Heart size={18} />, text: 'Passionate about open-source & community learning' },
]

function AnimatedStat({ value, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay, duration: 0.5 }}
      style={{ textAlign: 'center', padding: '24px 20px', background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--text3)', fontWeight: 500 }}>{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ background: 'var(--bg2)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', opacity: 0.3 }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div style={{ position: 'relative', marginBottom: 32 }}>
              <div style={{ width: 220, height: 220, borderRadius: 20, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', position: 'relative', boxShadow: '0 24px 64px rgba(124,111,255,0.25)' }}>
                JH
              </div>
              <div style={{ position: 'absolute', bottom: 8, right: 0, background: 'var(--bg)', border: '2px solid var(--accent3)', borderRadius: 10, padding: '6px 14px', fontSize: 12, fontWeight: 600, color: 'var(--accent3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', display: 'inline-block' }} />
                Open to work
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {stats.map((s, i) => <AnimatedStat key={s.label} {...s} delay={0.1 * i} />)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Building digital <br />
              <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>experiences</span> that matter
            </h2>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 24, fontSize: '1.02rem' }}>
              I'm <strong style={{ color: 'var(--text)' }}>Jeff Harell Climaco</strong>, a passionate IT student and aspiring full stack developer from Davao City, Philippines. I love turning ideas into elegant, functional software that solves real-world problems.
            </p>
            <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 36, fontSize: '1.02rem' }}>
              My journey started with curiosity about how websites work, which evolved into a deep passion for clean code, intuitive design, and scalable architecture.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {highlights.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{h.icon}</span>
                  <span style={{ fontSize: 14, color: 'var(--text2)' }}>{h.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} style={{ marginTop: 32 }}>
              <a href="#contact" className="btn btn-primary">Download CV</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}