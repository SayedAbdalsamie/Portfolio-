import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Sentiment Analysis',
    description: 'A real-time sentiment analysis tool that can analyze text and determine the emotional tone. Built using NLP techniques and deployed with Streamlit.',
    link: 'https://sentimentanalysis-sayed.streamlit.app/',
    tags: ['NLP', 'Streamlit', 'Python'],
  },
  {
    title: 'Facial Expression Recognition',
    description: 'An AI-powered facial expression recognition system that can detect and classify human emotions in real-time using computer vision and deep learning.',
    link: 'https://emotion-recognition1.streamlit.app/',
    tags: ['Computer Vision', 'Deep Learning', 'Streamlit'],
  },
  {
    title: 'Car Crash Classification',
    description: 'A machine learning model that can classify car crash severity based on various features. Implemented using scikit-learn and deployed as a web application.',
    link: 'https://github.com/SayedAbdalsamie/DEPI_CarCresh.git',
    tags: ['Machine Learning', 'scikit-learn', 'Python'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  View Project
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects 