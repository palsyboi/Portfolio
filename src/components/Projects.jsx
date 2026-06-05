import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { GitFork as Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'SCRAPPIX',
    description: 'AI-Powered Recycling and Repurposing for Filipino Households: Fostering Sustainable Habits and Economic Empowerment.',
    tags: ['AI', 'React', 'Node.js', 'Machine Learning'],
    color: '#2e7d32',
    logo: '/scrapixlogo.png',
    github: '#',
    live: '#',
  },
  {
    title: 'OJT DTR Website',
    description: 'A web-based Daily Time Record system built for Eonbotz, streamlining OJT attendance tracking, time-in/out logging, and report generation for interns.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    color: '#0ea5e9',
    images: ['/DTR dashboard.webp'],
    github: '#',
    live: '#',
  },
  {
    title: 'Petshop',
    description: 'A full-featured online pet shop with product listings, pet profiles, shopping cart, and order management for pet owners and shop administrators.',
    tags: ['PHP', 'MySQL', 'C#'],
    color: '#f59e0b',
    images: [
      '/petshop1.webp', '/petshop2.webp', '/petshop3.webp',
      '/petshop4.webp', '/petshop5.webp', '/petshop6.webp',
      '/petshop7.webp', '/petshop8.webp', '/petshop9.webp',
      '/petshop10.webp', '/petshop11.webp', '/petshop12.webp',
      '/petshop13.webp',
    ],
    github: '#',
    live: '#',
  },
  {
    title: 'Inventory Management System',
    description: 'A comprehensive inventory tracking system with stock monitoring, supplier management, low-stock alerts, and detailed sales and inventory reports.',
    tags: ['C#', 'PHP', 'MySQL'],
    color: '#8b5cf6',
    emoji: '📦',
    github: '#',
    live: '#',
  },
  {
    title: "Nar's School Supplies website",
    description: "An online storefront for Nar's School Supplies featuring product catalog, shopping cart, order management, and an admin dashboard for inventory and sales tracking.",
    tags: ['React', 'PHP', 'MySQL'],
    color: '#f97316',
    emoji: '🎒',
    github: '#',
    live: '#',
  },
]

// Auto-sliding image carousel for project cards
function ImageSlider({ images, color, hovered }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  // Auto-advance when card is hovered
  useEffect(() => {
    if (hovered && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % images.length)
      }, 1800)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [hovered, images.length])

  const prev = (e) => {
    e.stopPropagation()
    setCurrent(c => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent(c => (c + 1) % images.length)
  }

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`screenshot ${current + 1}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </AnimatePresence>

      {/* Dark overlay so controls are visible */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)', pointerEvents: 'none' }} />

      {/* Prev / Next buttons — only show when hovered and multiple images */}
      {images.length > 1 && hovered && (
        <>
          <button onClick={prev} style={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            width: 28, height: 28, borderRadius: '50%', border: 'none',
            background: 'rgba(0,0,0,0.55)', color: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = color}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
          >
            <ChevronLeft size={14} />
          </button>
          <button onClick={next} style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            width: 28, height: 28, borderRadius: '50%', border: 'none',
            background: 'rgba(0,0,0,0.55)', color: 'white', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = color}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
          >
            <ChevronRight size={14} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 5,
        }}>
          {images.map((_, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }} style={{
              width: i === current ? 16 : 6, height: 6,
              borderRadius: 100, border: 'none', cursor: 'pointer',
              background: i === current ? color : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s', padding: 0,
            }} />
          ))}
        </div>
      )}

      {/* Image counter badge */}
      {images.length > 1 && (
        <div style={{
          position: 'absolute', top: 10, right: 10,
          padding: '3px 9px', borderRadius: 100,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
          fontSize: 11, color: 'white', fontWeight: 600,
        }}>
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  const hasImages = project.images && project.images.length > 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--surface2)' : 'var(--surface)',
        border: `1px solid ${hovered ? project.color + '60' : 'var(--border)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 48px ${project.color}22` : 'none',
        position: 'relative',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: hovered ? project.color : 'transparent',
        transition: 'background 0.25s',
        borderRadius: '16px 16px 0 0',
        zIndex: 2,
      }} />

      {/* Banner area */}
      <div style={{
        width: '100%', paddingTop: '56%', position: 'relative',
        background: `linear-gradient(135deg, ${project.color}10, ${project.color}04)`,
        borderBottom: `1px solid ${hovered ? project.color + '30' : 'var(--border)'}`,
        transition: 'border-color 0.25s',
        overflow: 'hidden',
      }}>
        {/* Subtle grid bg (always shown behind images) */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03, zIndex: 0,
          backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none',
        }} />

        {hasImages ? (
          <ImageSlider images={project.images} color={project.color} hovered={hovered} />
        ) : project.logo ? (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.img
              src={project.logo}
              alt={project.title}
              animate={{ scale: hovered ? 1.06 : 1 }}
              transition={{ duration: 0.3 }}
              style={{
                width: 'auto', height: '72%', maxWidth: '60%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))',
              }}
            />
          </div>
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              style={{
                width: 80, height: 80, borderRadius: 20,
                background: project.color + '20',
                border: `2px solid ${project.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 40,
                boxShadow: `0 8px 32px ${project.color}30`,
              }}
            >
              {project.emoji}
            </motion.div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
            color: 'var(--text)', letterSpacing: '0.02em',
          }}>
            {project.title}
          </h3>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0, marginLeft: 12 }}>
            {[{ icon: <Github size={14} />, href: project.github, label: 'GitHub' }, { icon: <ArrowUpRight size={14} />, href: project.live, label: 'Live' }].map((btn, i) => (
              <a key={i} href={btn.href} target="_blank" rel="noreferrer"
                title={btn.label}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = project.color; e.currentTarget.style.borderColor = project.color + '60'; e.stopPropagation() }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)'; e.stopPropagation() }}>
                {btn.icon}
              </a>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--text2)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 500,
              background: project.color + '14',
              color: project.color,
              border: `1px solid ${project.color}28`,
            }}>
              {tag}
            </span>
          ))}
        </div>
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, maxWidth: 560 }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Things I've{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              built
            </span>
          </h2>
          <p className="section-subtitle">A selection of projects I've worked on — from full-stack applications to creative side projects.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
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