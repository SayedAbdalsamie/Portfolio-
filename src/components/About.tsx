import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              {/* Replace with your profile image */}
              <img
                src="/IMG_20240220_223733_239.jpg"
                alt="Sayed Mohammed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl" />
          </div>

          <div>
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm an aspiring AI/ML Engineer with a strong foundation in computer vision,
                natural language processing, and MLOps. My journey in artificial intelligence
                has been driven by a passion for creating intelligent systems that can
                understand and interact with the world around us.
              </p>
              <p>
                With expertise in deep learning frameworks like TensorFlow and PyTorch,
                I specialize in developing and deploying machine learning models that
                solve real-world problems. My work spans from sentiment analysis to
                facial expression recognition, always focusing on creating practical,
                scalable solutions.
              </p>
              <p>
                I'm particularly interested in the intersection of computer vision and
                natural language processing, exploring how these technologies can work
                together to create more intelligent and intuitive systems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-200"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-4 py-2 border border-primary-600 text-sm font-medium rounded-md text-primary-600 dark:text-primary-400 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900/50 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 