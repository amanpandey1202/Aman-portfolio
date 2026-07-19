import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheck, FaLayerGroup } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-strong rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-dark-700 z-10 my-8"
        >
          {/* Header Image / Pattern Banner */}
          <div className="relative h-56 sm:h-72 overflow-hidden bg-dark-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 rounded-full glass-strong text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Category Tag */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-500 text-white shadow-lg">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-lg">
                  ⭐ Featured Hardware Project
                </span>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:text-dark-50 mb-2">
                {project.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features Breakdown */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 flex items-center gap-2">
                <FaCheck className="w-4 h-4" /> Hardware & Software Highlights
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-dark-700 dark:text-dark-300">
                <li className="flex items-center gap-2 bg-dark-100/50 dark:bg-dark-800/50 p-2.5 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  ESP32 Microcontroller Core
                </li>
                <li className="flex items-center gap-2 bg-dark-100/50 dark:bg-dark-800/50 p-2.5 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Low-Latency Hardware Integration
                </li>
                <li className="flex items-center gap-2 bg-dark-100/50 dark:bg-dark-800/50 p-2.5 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  Responsive Web / Sensor Interface
                </li>
                <li className="flex items-center gap-2 bg-dark-100/50 dark:bg-dark-800/50 p-2.5 rounded-xl">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  Clean C++ & Web Architecture
                </li>
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-dark-500 dark:text-dark-400 flex items-center gap-2">
                <FaLayerGroup className="w-4 h-4" /> Tech Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-dark-200 dark:border-dark-800">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 sm:flex-initial"
                >
                  <FaGithub className="w-4 h-4" /> View Source Code
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 sm:flex-initial"
                >
                  <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
