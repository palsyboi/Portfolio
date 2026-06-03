import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, GitFork as Github, Link2 as Linkedin, Globe, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'Jeffharell.climaco@hcdc.edu.ph', href: 'mailto:Jeffharell.climaco@hcdc.edu.ph', color: 'var(--accent)' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+63 927 856 9994', href: 'tel:+639278569994', color: 'var(--accent2)' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Davao City, Philippines', href: '#', color: 'var(--accent3)' },
]

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <Globe size={18} />, href: '#', label: 'Website' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px', background: 'var(--surface)',
    border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)',
    fontSize: 14, fontFamily: 'var(--font-body)', outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ background: 'var(--bg2)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--accent3), transparent)', opacity: 0.2 }} />
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's work <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>together</span></h2>
          <p className="section-subtitle">Have a project in mind or want to discuss an opportunity? I'd love to hear from you!</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: 24 }}>Get in touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {contactInfo.map((item, i) => (
                <motion.a key={item.label} href={item.href} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }} whileHover={{ y: -2 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', textDecoration: 'none', transition: 'all 0.2s' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: item.color + '15', border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Find me on</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <CheckCircle size={48} color="var(--accent3)" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--text)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text2)', fontSize: 14 }}>Thanks for reaching out. I'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div style={{ marginBottom: 22 }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}