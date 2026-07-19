import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaWhatsapp,
  FaEnvelope, 
  FaCode, 
  FaRocket, 
  FaChevronRight,
  FaTerminal
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 border-t border-dark-200/40 dark:border-dark-800 relative overflow-hidden text-dark-300">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-brand-500/5 to-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          className="grid lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-md shadow-brand-500/20">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Aman <span className="text-brand-500">Pandey</span>
              </span>
            </div>
            <p className="text-dark-400 mb-6 max-w-md text-sm leading-relaxed">
              2nd-year engineering student & self-taught maker passionate about 
              embedded systems, ESP32 IoT projects, C, Python, and modern Web Development.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/amanpandey1202"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-2.5 rounded-xl text-dark-400 hover:text-brand-400 border border-dark-700/60 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/aman-pandey-03b484383/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-2.5 rounded-xl text-dark-400 hover:text-brand-400 border border-dark-700/60 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com/amanotic"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-2.5 rounded-xl text-dark-400 hover:text-accent-400 border border-dark-700/60 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/919555448162"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong p-2.5 rounded-xl text-dark-400 hover:text-accent-400 border border-dark-700/60 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:amanpandey8162@gmail.com"
                className="glass-strong p-2.5 rounded-xl text-dark-400 hover:text-brand-400 border border-dark-700/60 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <nav className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Me', href: '#about' },
                { label: 'Skills & Tech', href: '#skills' },
                { label: 'Projects Showcase', href: '#projects' },
                { label: 'Get In Touch', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-dark-400 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                >
                  <FaChevronRight className="w-3 h-3 text-brand-500" />
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Focus Areas */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Current Focus</h4>
            <div className="space-y-2.5 text-sm text-dark-400">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                C & Embedded Programming
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                ESP32 IoT Systems
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                Python Scripting & Tools
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                React & Modern Web Stack
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Sleek Bottom Bar - Monochromatic & Cyber Styled (No Red/Green Clash) */}
        <div className="pt-8 border-t border-dark-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs font-mono">
            © {currentYear} <span className="text-dark-300 font-semibold">Aman Pandey</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-dark-700/60 text-brand-400">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span>Status: Seeking Internships</span>
            </span>

            <span className="hidden md:inline-block text-dark-600">•</span>

            <span className="hidden md:inline-flex items-center gap-1.5 text-dark-400">
              <FaTerminal className="w-3.5 h-3.5 text-brand-500" />
              <span>Built with React & Tailwind</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}