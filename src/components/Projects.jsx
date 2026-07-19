import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaSearch, 
  FaWifi, 
  FaMusic, 
  FaShoppingCart, 
  FaTasks, 
  FaBrain, 
  FaCloudSun,
  FaEye,
  FaFilter
} from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const projects = [
  {
    id: 1,
    title: "Aman's Chatroom",
    description: 'Real-time browser-based chat application built with ESP32 microcontrollers. Features low-latency WebSocket communication, multi-channel messaging, and a sleek responsive mobile interface.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['ESP32', 'WebSocket', 'C++', 'HTML/CSS/JS'],
    category: 'IoT',
    icon: FaWifi,
    github: 'https://github.com/amanpandey1202/AMAN-S-CHATROOM',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Pencil Piano',
    description: 'Capacitive touch audio synthesizer using conductive graphite pencil drawings as keys. Powered by ESP32 touch pins with polyphonic sound generation and visual pitch feedback.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop',
    tags: ['ESP32', 'Arduino', 'C++', 'Capacitive Touch'],
    category: 'IoT',
    icon: FaMusic,
    github: 'https://github.com/amanpandey1202/PENCIL-PIANO',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Full-stack online store solution with dynamic cart, secure Stripe payment processing, real-time inventory management dashboard, and customer order tracking.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    category: 'Full Stack',
    icon: FaShoppingCart,
    github: 'https://github.com/amanpandey1202',
    live: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative project workspace featuring real-time Kanban boards, drag-and-drop task progression, workspace notifications, and team productivity analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Full Stack',
    icon: FaTasks,
    github: 'https://github.com/amanpandey1202',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'AI Code Assistant',
    description: 'Intelligent code generation & refactoring extension powered by LLMs. Provides real-time code explanations, unit test generation, and automated error diagnostics.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    tags: ['TypeScript', 'VS Code API', 'OpenAI', 'WebSocket'],
    category: 'AI/ML',
    icon: FaBrain,
    github: 'https://github.com/amanpandey1202',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather IoT Dashboard',
    description: 'Environmental telemetry monitor integrating multiple hardware sensors (temperature, humidity, air quality). Live charts powered by MQTT & Grafana.',
    image: 'https://images.unsplash.com/photo-1592797290489-8f0b7d0e2e8e?w=600&h=400&fit=crop',
    tags: ['ESP32', 'InfluxDB', 'Grafana', 'MQTT', 'React'],
    category: 'IoT',
    icon: FaCloudSun,
    github: 'https://github.com/amanpandey1202',
    live: '#',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'IoT', 'AI/ML']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="projects" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-strong text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 border border-brand-200/50 dark:border-brand-800/50">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Portfolio Showcase
          </span>
          <h2 className="section-heading text-4xl sm:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto text-base sm:text-lg">
            Explore a curated selection of full-stack web applications, IoT embedded projects, 
            and intelligent systems I've architected.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 glass-strong rounded-2xl border border-dark-200/50 dark:border-dark-700/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-500 to-accent-600 text-white shadow-md'
                    : 'text-dark-600 dark:text-dark-400 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-strong border border-dark-200/50 dark:border-dark-700/50 text-sm text-dark-900 dark:text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass-strong rounded-3xl overflow-hidden border border-white/20 dark:border-dark-700/60 shadow-xl hover:shadow-2xl hover:border-brand-400/50 transition-all duration-500 flex flex-col"
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-dark-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Overlay Quick Action Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-950/40 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-brand-500 text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
                      title="Quick View Details"
                    >
                      <FaEye className="w-4 h-4" />
                    </button>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-dark-800 text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 text-brand-400 backdrop-blur-md border border-dark-700">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-dark-50 mb-2 group-hover:text-brand-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Actions */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dark-200/50 dark:border-dark-800">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                      >
                        Learn More <FaExternalLinkAlt className="w-3 h-3" />
                      </button>

                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-400 hover:text-dark-900 dark:hover:text-white transition-colors"
                          aria-label="GitHub Source"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-dark-500 dark:text-dark-400">No projects found matching your search.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}