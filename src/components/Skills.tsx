import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', category: 'Programming' },
  { name: 'TensorFlow', category: 'Deep Learning' },
  { name: 'PyTorch', category: 'Deep Learning' },
  { name: 'NLP', category: 'AI/ML' },
  { name: 'Computer Vision', category: 'AI/ML' },
  { name: 'scikit-learn', category: 'Machine Learning' },
  { name: 'Flask', category: 'Web Development' },
  { name: 'Streamlit', category: 'Web Development' },
]

const categories = Array.from(new Set(skills.map(skill => skill.category)))

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="max-w-4xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                      }}
                    >
                      <span className="skill-badge">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 