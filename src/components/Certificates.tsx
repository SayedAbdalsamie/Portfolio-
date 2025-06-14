import { motion } from 'framer-motion'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const certificates = [
  {
    title: ' Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    link: 'https://www.credly.com/badges/f6047bfd-0450-44a8-89ef-36ac81e0f7b7/public_url',
    date: '2025',
  },
  {
    title: 'Deep Learning: CNN Image Classification',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-d4810ac1-fa91-4bf2-a26a-5a9869248bd7/',
    date: '2023',
  },
  {
    title: 'Machine Learning A-Z',
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-7e174a12-ea52-4cfe-986f-f00207d4c138/',
    date: '2023',
  },
  {
    title: 'Other Certificaties',
    issuer: 'Google Drive',
    link: 'https://drive.google.com/drive/folders/1a2myMJbIRksGZkbbo66QO5rxvlRmjGxa',
    date: '',
  },
]

const Certificates = () => {
  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AcademicCapIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
              <div className="ml-4 flex-1">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {certificate.title}
                </a>
                <div className="mt-1 flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <span>{certificate.issuer}</span>
                  {certificate.date && <><span className="mx-2">•</span><span>{certificate.date}</span></>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates 