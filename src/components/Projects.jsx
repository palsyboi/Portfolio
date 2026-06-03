import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { GitFork as Github, ArrowUpRight } from 'lucide-react'

const projects = [
  { title: 'E-Commerce Platform', description: 'A full-featured online shopping platform with cart, payment integration, admin dashboard, and real-time inventory management.', tags: ['React', 'Node.js', 'MongoDB', 'Stripe'], color: 'var(--accent)', emoji: '🛒', github: '#', live: '#' },
  { title: 'Student Portal System', description: 'Web-based student information system with grade tracking, enrollment, and faculty management modules.', tags: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'], color: 'var(--accent2)', emoji: '🎓', github: '#', live: '#' },
  { title: 'Task Management App', description: 'Collaborative productivity app with drag-and-drop boards, real-time updates, and team collaboration features.', tags: ['React', 'Firebase', 'Tailwind'], color: 'var(--accent3)', emoji: '✅', github: '#', live: '#' },
  { title: 'Weather Dashboard', description: 'Beautiful weather app with 7-day forecasts, interactive maps, and location-based weather data.', tags: ['JavaScript', 'OpenWeather API', 'CSS3'], color: '#f5a623', emoji: '🌤️', github: '#', live: '#' },
  { title: 'Blog CMS', description: 'Content management system with rich-text editing, media uploads, categories, and SEO optimization.', tags: ['Next.js', 'Prisma', 'PostgreSQL'], color: '#4ecdc4', emoji: '✍️', github: '#', live: '#' },
  { title: 'Inventory Tracker', description: 'Desktop-style inventory app with barcode scanning, reports, and supplier management.', tags: ['Python', 'Tkinter', 'SQLite'], color: '#ff6b6b', emoji: '📦', github: '#', live: '#' },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'var(--surface2)' : 'var(--surface)', border: `1px solid ${hovered ? project.color + '50' : 'var(--border)'}`, borderRadius: 16, padding: 28, cursor: 'pointer', transition: 'all 0.25s ease', transform: hovered ? 'translateY(-4px)' : 'translateY(0)', boxShadow: hovered ? `0 16px 48px ${project.color}18` : 'none', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: hovered ? project.color : 'transparent', transition: 'background 0.25s', borderRadius: '16px 16px 0 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, fontSize: 24, background: `${project.color}15`, border: `1px solid ${project.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {project.emoji}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[{ icon: <Github size={14} />, href: project.github }, { icon: <ArrowUpRight size={14} />, href: project.live }].map((btn, i) => (
            <a key={i} href={btn.href} target="_blank" rel="noreferrer"
              style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.stopPropagation() }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.stopPropagation() }}>
              {btn.icon}
            </a>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)', marginBottom: 10 }}>{project.title}</h3>
      <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ padding: '3px 10px', borderRadius: 100, fontSize: 12, fontWeight: 500, background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}>{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="projects">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 56, maxWidth: 560 }}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">Things I've <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>built</span></h2>
          <p className="section-subtitle">A selection of projects I've worked on — from full-stack applications to creative side projects.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
        </div>
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex' }}>
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}