import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  { label: 'Frontend', color: '#61DAFB', techs: [{ name: 'React', icon: '⚛️', level: 90 }, { name: 'JavaScript', icon: '🟨', level: 88 }, { name: 'TypeScript', icon: '🔷', level: 72 }, { name: 'HTML5', icon: '🧡', level: 95 }, { name: 'CSS3', icon: '💙', level: 92 }, { name: 'Tailwind', icon: '🎨', level: 85 }, { name: 'Next.js', icon: '▲', level: 70 }, { name: 'Vue.js', icon: '💚', level: 60 }] },
  { label: 'Backend', color: '#68D391', techs: [{ name: 'Node.js', icon: '🟢', level: 80 }, { name: 'Express', icon: '🚀', level: 78 }, { name: 'PHP', icon: '🐘', level: 82 }, { name: 'Python', icon: '🐍', level: 70 }, { name: 'REST APIs', icon: '🔌', level: 85 }, { name: 'GraphQL', icon: '🔺', level: 55 }] },
  { label: 'Database', color: '#F6AD55', techs: [{ name: 'MySQL', icon: '🐬', level: 82 }, { name: 'MongoDB', icon: '🍃', level: 75 }, { name: 'PostgreSQL', icon: '🐘', level: 68 }, { name: 'Firebase', icon: '🔥', level: 72 }, { name: 'SQLite', icon: '💾', level: 80 }] },
  { label: 'Tools & DevOps', color: '#FC8181', techs: [{ name: 'Git', icon: '🔧', level: 88 }, { name: 'GitHub', icon: '🐙', level: 87 }, { name: 'VS Code', icon: '💻', level: 95 }, { name: 'Docker', icon: '🐳', level: 55 }, { name: 'Figma', icon: '🎭', level: 70 }, { name: 'Linux', icon: '🐧', level: 65 }] },
]

function SkillBar({ name, icon, level, color, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>{icon}</span>
          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{name}</span>
        </div>
        <span style={{ fontSize: 12, color: 'var(--text3)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 100, background: 'var(--surface2)', overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} animate={inView ? { width: `${level}%` } : {}} transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: 100, background: color }} />
      </div>
    </div>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="techstack" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 56, maxWidth: 560 }}>
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Tools I <span style={{ background: 'linear-gradient(135deg, var(--accent3), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>work with</span></h2>
          <p className="section-subtitle">Technologies and tools I've picked up along my development journey.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {categories.map((cat, ci) => (
            <motion.div key={cat.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: ci * 0.08 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: cat.color, boxShadow: `0 0 10px ${cat.color}60` }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>{cat.label}</span>
              </div>
              {cat.techs.map((tech, ti) => <SkillBar key={tech.name} {...tech} color={cat.color} delay={ci * 0.05 + ti * 0.04} />)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}