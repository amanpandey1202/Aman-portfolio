import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaMicrochip, FaLightbulb, FaRocket, FaUserCheck } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const timelineData = [
  {
    year: '2nd Year (Present)',
    title: 'Computer Science & Engineering Student',
    company: 'Engineering College, Lucknow',
    description: 'Actively learning programming fundamentals, data structures, and expanding into Web Development and IoT.',
    icon: FaGraduationCap,
    color: 'brand',
    current: true,
  },
  {
    year: '2024 - Present',
    title: 'ESP32 & Embedded IoT Maker',
    company: 'Self-Directed Hardware Projects',
    description: 'Designing interactive hardware devices such as WebSocket Chatroom and Capacitive Touch Pencil Piano using ESP32.',
    icon: FaMicrochip,
    color: 'emerald',
  },
  {
    year: '2023 - Present',
    title: 'Self-Taught Developer',
    company: 'C & Python Fundamentals',
    description: 'Developing problem-solving skills in C and Python, building CLI applications, and learning full-stack web tech.',
    icon: FaCode,
    color: 'brand',
  },
]

const learningStack = [
  { category: 'Core Languages', items: ['C Language', 'Python', 'C++ (Arduino/ESP32)'] },
  { category: 'Hardware & IoT', items: ['ESP32', 'Arduino Microcontrollers', 'Capacitive Sensors', 'WebSockets', 'Circuit Design'] },
  { category: 'Web Tech (Learning)', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
  { category: 'Developer Tools', items: ['Git & GitHub', 'VS Code', 'PlatformIO', 'Arduino IDE'] },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-dark-950">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 border border-brand-200/50 dark:border-brand-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            My Authentic Journey
          </span>
          <h2 className="section-heading text-4xl sm:text-5xl font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto text-base sm:text-lg">
            A second-year student from Lucknow, UP, dedicated to continuous learning, 
            hardware experimentation, and building practical software solutions.
          </p>
        </motion.div>

        {/* Story Highlights Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Journey Timeline */}
          <motion.div
            className="glass-strong rounded-3xl p-6 sm:p-8 h-full border border-white/20 dark:border-dark-700/60 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
                <FaGraduationCap className="w-5 h-5" />
              </span>
              My Progress & Milestones
            </h3>
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-5 border border-dark-200/40 dark:border-dark-700/40 hover:border-brand-400/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono text-brand-600 dark:text-brand-400 px-3 py-1 rounded-full bg-brand-500/10">
                      {item.year}
                    </span>
                    {item.current && (
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                        Current Focus
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-dark-900 dark:text-dark-50 text-base mb-1">{item.title}</h4>
                  <p className="text-xs font-semibold text-dark-500 dark:text-dark-400 mb-2">{item.company}</p>
                  <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack & Focus Areas */}
          <motion.div
            className="glass-strong rounded-3xl p-6 sm:p-8 h-full border border-white/20 dark:border-dark-700/60 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-brand-500 flex items-center justify-center text-white shadow-md">
                <FaCode className="w-5 h-5" />
              </span>
              Skills & Learning Track
            </h3>
            <div className="space-y-6">
              {learningStack.map((category) => (
                <div key={category.category} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dark-500 dark:text-dark-400">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-200 border border-dark-200/50 dark:border-dark-700/50 hover:border-brand-500/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mindset Card */}
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-brand-500/10 to-emerald-500/10 border border-brand-500/20">
              <h4 className="font-bold text-dark-900 dark:text-dark-50 text-sm mb-1 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" /> Continuous Mindset
              </h4>
              <p className="text-xs text-dark-600 dark:text-dark-300 leading-relaxed">
                "I believe in being honest about my current skills while relentlessly pushing to learn 
                more every day—whether it's writing cleaner C/Python scripts, wiring microcontrollers, 
                or building responsive web apps."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}