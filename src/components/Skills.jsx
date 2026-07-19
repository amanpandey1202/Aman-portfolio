import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaServer, FaTools, FaMicrochip, FaCheckCircle } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const skillCategories = [
  {
    id: 'hardware',
    category: 'Hardware & IoT',
    icon: FaMicrochip,
    description: 'Hardware microcontrollers, sensor interfacing, and IoT communication.',
    items: [
      { name: 'ESP32 / ESP8266', level: 85 },
      { name: 'Arduino Platform', level: 90 },
      { name: 'C / C++ (Embedded)', level: 75 },
      { name: 'WebSocket / Telemetry', level: 80 },
      { name: 'Sensors & Relays', level: 85 },
      { name: 'Circuit Wiring', level: 80 },
    ],
  },
  {
    id: 'programming',
    category: 'Programming & Logic',
    icon: FaLaptopCode,
    description: 'Core programming logic, structured problem solving, and script development.',
    items: [
      { name: 'C Language', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'Data Structures (Learning)', level: 65 },
      { name: 'Algorithms (Learning)', level: 60 },
      { name: 'OOP Concepts', level: 70 },
    ],
  },
  {
    id: 'webdev',
    category: 'Web Tech (Actively Learning)',
    icon: FaServer,
    description: 'Building modern responsive web layouts and interactive frontends.',
    items: [
      { name: 'HTML5 & Semantics', level: 80 },
      { name: 'CSS3 & Flex/Grid', level: 75 },
      { name: 'JavaScript Essentials', level: 70 },
      { name: 'React (Learning)', level: 65 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    id: 'tools',
    category: 'Developer Tools',
    icon: FaTools,
    description: 'Development environments, version control, and productivity tools.',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'PlatformIO / Arduino IDE', level: 85 },
      { name: 'Command Line / Terminal', level: 75 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('hardware')

  const currentCategory = skillCategories.find(c => c.id === activeCategory) || skillCategories[0]

  return (
    <section id="skills" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 relative">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 border border-brand-200/50 dark:border-brand-800/50">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Skills & Learning Track
          </span>
          <h2 className="section-heading text-4xl sm:text-5xl font-extrabold mb-4">
            Current <span className="gradient-text">Skills & Tech</span>
          </h2>
          <p className="section-subheading mx-auto text-base sm:text-lg">
            An honest breakdown of the technologies I work with daily and the skills 
            I am actively expanding in my 2nd year of engineering.
          </p>
        </motion.div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`glass-strong rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'border-brand-500 shadow-xl ring-2 ring-brand-500/20 bg-brand-500/5'
                    : 'border-white/20 dark:border-dark-700/60 hover:border-brand-400/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isActive ? 'bg-gradient-to-br from-brand-500 to-emerald-500 text-white' : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-dark-900 dark:text-dark-50 text-base mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-dark-500 dark:text-dark-400 line-clamp-2">
                  {cat.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* Selected Category Skill Meter Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-strong rounded-3xl p-6 sm:p-10 border border-white/20 dark:border-dark-700/60 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-dark-200/40 dark:border-dark-800/40">
            <currentCategory.icon className="w-6 h-6 text-brand-500" />
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-50">
                {currentCategory.category}
              </h3>
              <p className="text-sm text-dark-500 dark:text-dark-400">
                {currentCategory.description}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {currentCategory.items.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-dark-800 dark:text-dark-200 flex items-center gap-2">
                    <FaCheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    {skill.name}
                  </span>
                  <span className="text-brand-600 dark:text-brand-400 font-mono text-xs">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 w-full bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}