import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaCode, FaRocket, FaMicrochip, FaLaptopCode, FaDatabase } from 'react-icons/fa'
import Typewriter from './Typewriter'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const roles = [
  '2nd Year Engineering Student',
  'C & Python Enthusiast',
  'ESP32 / IoT Hardware Maker',
  'Aspiring Full-Stack Developer'
]

export default function Hero({ onScrollTo }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Decorative Glowing Elements - Cyan & Emerald ONLY */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-brand-500/15 to-emerald-500/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/15 to-brand-500/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-500/5 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column Text & Actions */}
          <motion.div variants={itemVariants} className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-semibold text-brand-600 dark:text-brand-400 mb-6 border border-brand-200/50 dark:border-brand-800/50 shadow-sm"
              whileHover={{ scale: 1.03 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for Freelance Work & Internships</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
              <span className="text-dark-900 dark:text-dark-50">Hi, I'm </span>
              <br />
              <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Aman Pandey
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-dark-600 dark:text-dark-300 font-semibold mb-6 h-10 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-dark-400 font-normal">I am a </span>
              <span className="text-brand-600 dark:text-brand-400 font-bold">
                <Typewriter words={roles} />
              </span>
            </div>

            <p className="text-base sm:text-lg text-dark-600 dark:text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Second-year student passionate about coding in <strong>C & Python</strong>, 
              building <strong>ESP32 hardware projects</strong>, and learning modern Web Development. 
              Focused on problem-solving, clean code, and continuous growth.
            </p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onScrollTo('projects')}
                className="btn-primary w-full sm:w-auto shadow-lg shadow-brand-500/25 cursor-pointer"
              >
                <FaRocket className="w-4 h-4" /> View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onScrollTo('contact')}
                className="btn-secondary w-full sm:w-auto cursor-pointer"
              >
                <FaEnvelope className="w-4 h-4" /> Hire / Connect
              </motion.button>
            </motion.div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6 border-t border-dark-200/60 dark:border-dark-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="px-3.5 py-1.5 rounded-xl glass text-xs font-semibold text-brand-600 dark:text-brand-400 border border-brand-500/20">
                📍 Lucknow, India
              </div>
              <div className="px-3.5 py-1.5 rounded-xl glass text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ⚡ 2nd Year Student
              </div>
              <div className="px-3.5 py-1.5 rounded-xl glass text-xs font-semibold text-brand-600 dark:text-brand-400 border border-brand-500/20">
                🛠️ Hardware & IoT Enthusiast
              </div>
            </div>
          </motion.div>

          {/* Right Column Visual Terminal Box */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-3xl blur-2xl opacity-25 animate-pulse" />
              
              {/* Code Terminal Box */}
              <div className="relative glass-strong rounded-3xl border border-white/30 dark:border-dark-700/60 p-6 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-dark-200/40 dark:border-dark-700/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-dark-400">aman_profile.c</span>
                </div>

                {/* Code Body */}
                <pre className="font-mono text-xs sm:text-sm text-dark-700 dark:text-dark-200 leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-brand-500 font-semibold">#include</span> &lt;stdio.h&gt;{'\n\n'}
                    <span className="text-emerald-500 font-semibold">int</span> main() &#123;{'\n'}
                    {'  '}char* name = <span className="text-emerald-400">"Aman Pandey"</span>;{'\n'}
                    {'  '}int year = <span className="text-brand-400">2</span>;{'\n'}
                    {'  '}char* stack[] = &#123;<span className="text-emerald-400">"C"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"ESP32"</span>&#125;;{'\n'}
                    {'  '}printf(<span className="text-emerald-400">"Learning every day!\\n"</span>);{'\n'}
                    {'  '}<span className="text-brand-500">return</span> 0;{'\n'}
                    &#125;
                  </code>
                </pre>

                {/* Feature Chips */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-dark-200/40 dark:border-dark-700/40">
                  <div className="glass rounded-xl p-3 flex items-center gap-3">
                    <FaMicrochip className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-xs font-bold text-dark-900 dark:text-dark-50">Hardware</p>
                      <p className="text-[10px] text-dark-500 dark:text-dark-400">ESP32, Arduino, C++</p>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-3 flex items-center gap-3">
                    <FaCode className="w-5 h-5 text-brand-500" />
                    <div>
                      <p className="text-xs font-bold text-dark-900 dark:text-dark-50">Software</p>
                      <p className="text-[10px] text-dark-500 dark:text-dark-400">C, Python, HTML/CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => onScrollTo('about')}
      >
        <div className="glass-strong p-2.5 rounded-full border border-white/20 dark:border-dark-700 text-dark-400 hover:text-brand-500 transition-colors shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}