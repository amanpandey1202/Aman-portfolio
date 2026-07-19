import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaCode, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/amanpandey1202', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aman-pandey-03b484383/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com/amanotic', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/919555448162', label: 'WhatsApp' },
  { icon: FaEnvelope, href: 'mailto:amanpandey8162@gmail.com', label: 'Email' },
]

export default function Navbar({ activeSection, scrolled, onNavigate, darkMode, onToggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLinkClick = (sectionId) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-3 sm:top-4 left-0 right-0 z-40 px-4 pointer-events-none"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav
        className={`pointer-events-auto max-w-5xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2 flex items-center justify-between shadow-xl backdrop-blur-2xl ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-900/85 border border-white/40 dark:border-dark-700/80 shadow-brand-500/5 ring-1 ring-black/5 dark:ring-white/5'
            : 'bg-white/60 dark:bg-dark-900/60 border border-white/20 dark:border-dark-800/60'
        }`}
        aria-label="Main navigation"
      >
        {/* Brand Logo - Compact Pill */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
          className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-dark-900 dark:text-dark-50 hover:opacity-90 transition-opacity"
          aria-label="Go to homepage"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
            <FaCode className="w-4 h-4" />
          </span>
          <span className="tracking-tight">
            Aman <span className="text-brand-500">Pandey</span>
          </span>
        </motion.a>

        {/* Desktop Nav Links - Smooth Floating Pills */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick(link.id)}
              className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-dark-600 dark:text-dark-300 hover:text-brand-500 dark:hover:text-brand-400'
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activePillNav"
                  className="absolute inset-0 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {link.label}
            </motion.button>
          ))}
        </div>

        {/* Right Controls (Theme & Socials) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleDarkMode}
            className="p-2 rounded-full text-dark-700 dark:text-amber-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </motion.button>

          <div className="h-4 w-px bg-dark-200 dark:bg-dark-700 mx-0.5" />

          {/* Compact Social Icons */}
          {socialLinks.slice(0, 3).map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-dark-500 dark:text-dark-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors cursor-pointer"
              aria-label={social.label}
            >
              <social.icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onToggleDarkMode}
            className="p-2 rounded-full text-dark-700 dark:text-amber-400 cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </motion.button>

          <button
            className="p-2 rounded-full text-dark-900 dark:text-dark-50 cursor-pointer hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Pill Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto max-w-sm mx-auto mt-2 p-4 rounded-3xl bg-white/95 dark:bg-dark-900/95 backdrop-blur-2xl border border-white/30 dark:border-dark-700 shadow-2xl space-y-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white shadow-md'
                    : 'text-dark-700 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex items-center justify-around pt-3 border-t border-dark-200 dark:border-dark-800">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-dark-500 dark:text-dark-400 hover:text-brand-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}