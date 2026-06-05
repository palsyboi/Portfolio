import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Eye } from 'lucide-react'

// Place your certificate image in public/ folder as "Cert.png" (a preview/thumbnail of the cert)
// The PDF itself stays at public/Cert.pdf for viewing

const certificates = [
  {
    title: 'My Certificate',
    issuer: 'Jeff Harell Climaco',
    date: '2026',
    color: '#7c6fff',
    image: '/simplilearn cert.png',
    credential: '/Cert.pdf',
  },
  {
    title: 'Udemy Certificate',
    issuer: 'Udemy',
    date: '2024',
    color: '#a435f0',
    image: '/Udemy Cert.png',
    credential: '/Udemy Cert.png',
  },
  {
    title: 'Learn365 Certificate',
    issuer: 'Learn365',
    date: '2024',
    color: '#00b4d8',
    image: '/Learn365 Cert.png',
    credential: '/Learn365 Cert.png',
  },
  {
    title: 'Certificate of Recognition',
    issuer: 'Holy Cross of Davao College',
    date: '2026',
    color: '#cf6666',
    image: '/cert of recog.png',
    credential: '/cert of recog.pdf',
  },
  {
    title: 'Certificate of Completion',
    issuer: 'Eonbotz Technology',
    date: '2026',
    color: '#bd6a0b',
    image: '/Eonbotz cert.png',
    credential: '/Eonbotz cert.pdf',
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.15 } }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.25s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 16px 48px ${cert.color}28`; e.currentTarget.style.borderColor = cert.color + '50' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)'; e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {/* Certificate image preview */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '62%', background: 'var(--bg2)', overflow: 'hidden' }}>
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            transition: 'transform 0.4s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          onError={e => {
            // Fallback if image not found
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement.style.background = `linear-gradient(135deg, ${cert.color}22, ${cert.color}08)`
          }}
        />
        {/* Gradient overlay at bottom of image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(to top, var(--surface), transparent)',
          pointerEvents: 'none',
        }} />
        {/* Accent top bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: cert.color }} />
      </div>

      {/* Card footer */}
      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: cert.color + '18', border: `1px solid ${cert.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Award size={18} color={cert.color} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
            color: 'var(--text)', marginBottom: 2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {cert.title}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text2)' }}>
            {cert.issuer} · {cert.date}
          </div>
        </div>
        <a
          href={cert.credential}
          target="_blank"
          rel="noreferrer"
          title="View Certificate PDF"
          style={{
            flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6,
            padding: '7px 14px', borderRadius: 8,
            background: cert.color + '18', border: `1px solid ${cert.color}40`,
            color: cert.color, fontSize: 12, fontWeight: 600,
            fontFamily: 'var(--font-display)', transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = cert.color; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = cert.color + '18'; e.currentTarget.style.color = cert.color }}
        >
          <Eye size={13} />
          View
        </a>
      </div>
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
            <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
              {certificates.length} Certification{certificates.length !== 1 ? 's' : ''} Earned
            </span>
          </div>
        </motion.div>

        {/* Card grid — naturally expands as you add more certs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          {certificates.map((cert, i) => <CertCard key={cert.title} cert={cert} index={i} />)}
        </div>
      </div>
    </section>
  )
}