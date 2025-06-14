import { motion } from 'framer-motion'
import { EnvelopeIcon, CodeBracketIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const contactLinks = [
  {
    name: 'Email',
    icon: EnvelopeIcon,
    href: 'mailto:abonars30@gmail.com',
    text: 'abonars30@gmail.com',
  },
  {
    name: 'GitHub',
    icon: CodeBracketIcon,
    href: 'https://github.com/Sayedabdalsamie',
    text: 'github.com/Sayedabdalsamie',
  },
  {
    name: 'LinkedIn',
    icon: BriefcaseIcon,
    href: 'https://www.linkedin.com/in/sayed-mohammed-085a94253/',
    text: 'linkedin.com/in/sayed-mohammed-085a94253',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="section-title">Get in Touch</h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <link.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {link.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {link.text}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <p className="text-gray-600 dark:text-gray-300">
            Note: My resume is private and only accessible upon request. Please contact me via email for access.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 