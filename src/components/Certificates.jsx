import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Eye, Calendar } from 'lucide-react'

const certificates = [
  {
    title: 'My Certificate',
    issuer: 'Jeff Harell Climaco',
    date: '2025',
    color: '#7c6fff',
    icon: '🏅',
    credential: '/Cert.pdf',
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      style={{
        background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14,
        padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: cert.color, borderRadius: '14px 0 0 14px' }} />
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0,
        background: cert.color + '18', border: `1px solid ${cert.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
      }}>
        {cert.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.92rem',
          color: 'var(--text)', marginBottom: 3,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {cert.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Award size={11} color={cert.color} />
            <span style={{ fontSize: 12, color: 'var(--text2)' }}>{cert.issuer}</span>
          </div>
          <span style={{ color: 'var(--text3)', fontSize: 12 }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Calendar size={11} color="var(--text3)" />
            <span style={{ fontSize: 12, color: 'var(--text3)' }}>{cert.date}</span>
          </div>
        </div>
      </div>
      <a
        href={cert.credential}
        target="_blank"
        rel="noreferrer"
        title="View Certificate"
        style={{
          flexShrink: 0, width: 30, height: 30, borderRadius: 8,
          background: 'var(--bg)', border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text3)', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = cert.color; e.currentTarget.style.borderColor = cert.color + '50' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.borderColor = 'var(--border)' }}
      >
        <Eye size={13} />
      </a>
    </motion.div>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section id="certificates">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div className="section-label">Certificates</div>
          <h2 className="section-title">
            Continuous{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent2), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              learning
            </span>
          </h2>
          <p className="section-subtitle">Professional certifications and courses I've completed to sharpen my skills.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, marginTop: 20, background: 'rgba(124,111,255,0.1)', border: '1px solid rgba(124,111,255,0.2)' }}>
            <Award size={15} color="var(--accent)" />
            <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{certificates.length} Certification{certificates.length !== 1 ? 's' : ''} Earned</span>
          </div>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 14 }}>
          {certificates.map((cert, i) => <CertCard key={cert.title} cert={cert} index={i} />)}
        </div>
      </div>
    </section>
  )
}