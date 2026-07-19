import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaCheck,
  FaCopy
} from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'amanpandey8162@gmail.com',
    href: 'mailto:amanpandey8162@gmail.com',
    color: 'text-brand-500',
    bgColor: 'bg-brand-500/10',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp / Phone',
    value: '+91 9555448162',
    href: 'https://wa.me/919555448162',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@amanotic',
    href: 'https://instagram.com/amanotic',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'aman-pandey-03b484383',
    href: 'https://www.linkedin.com/in/aman-pandey-03b484383/',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/amanpandey1202',
    href: 'https://github.com/amanpandey1202',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amanpandey8162@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('submitting')
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 border border-brand-200/50 dark:border-brand-800/50">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            Let's Connect
          </span>
          <h2 className="section-heading text-4xl sm:text-5xl font-extrabold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto text-base sm:text-lg">
            Have a project in mind, want to collaborate, or just want to say hi? 
            Feel free to send a message or connect directly!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-dark-700/60 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-2">
                Contact Information
              </h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                Feel free to reach out via email or social links below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-2xl glass hover:border-brand-400/50 transition-all cursor-pointer group"
                    >
                      <div className={`w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm font-bold text-dark-900 dark:text-dark-100 group-hover:text-brand-500 transition-colors">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Copy Email Quick Action Button */}
              <div className="pt-4 border-t border-dark-200/40 dark:border-dark-700/40">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3 px-4 rounded-2xl glass-strong border border-brand-500/30 text-brand-600 dark:text-brand-400 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-500/10 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <FaCheck className="w-4 h-4 text-green-500" /> Email Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-4 h-4" /> Copy Email Address
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-6 sm:p-10 border border-white/20 dark:border-dark-700/60 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center text-2xl shadow-lg">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Message Sent Successfully!</h4>
                  <p className="text-sm text-dark-600 dark:text-dark-300">
                    Thank you for reaching out, Aman will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary text-xs mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-dark-700 dark:text-dark-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass border border-dark-200/50 dark:border-dark-700/50 text-sm text-dark-900 dark:text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-dark-700 dark:text-dark-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl glass border border-dark-200/50 dark:border-dark-700/50 text-sm text-dark-900 dark:text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-dark-700 dark:text-dark-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass border border-dark-200/50 dark:border-dark-700/50 text-sm text-dark-900 dark:text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-dark-700 dark:text-dark-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Aman, I'd like to discuss a project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl glass border border-dark-200/50 dark:border-dark-700/50 text-sm text-dark-900 dark:text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full py-3.5 shadow-lg shadow-brand-500/25 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" /> Send Message
                      </>
                    )}
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