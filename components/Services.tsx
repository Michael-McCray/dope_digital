'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { services } from '@/lib/services'

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-primary-600 uppercase bg-primary-50 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedService(index)}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 cursor-pointer overflow-hidden"
              whileHover={{
                y: -6,
                boxShadow: '0 20px 60px -15px rgba(2,132,199,0.18)',
                borderColor: 'rgba(14,165,233,0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-5 shadow-lg shadow-primary-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-5 text-sm">
                  {service.description}
                </p>

                <motion.button
                  className="inline-flex items-center text-primary-600 font-semibold text-sm"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 10 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-br from-primary-50 to-white p-8 border-b border-gray-100">
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white mb-4 shadow-lg shadow-primary-200">
                    {services[selectedService].icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {services[selectedService].title}
                  </h2>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {services[selectedService].expandedDescription}
                  </p>
                  <div className="mt-8 flex gap-3">
                    <motion.a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-100"
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Get Quote
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedService(null)}
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-semibold rounded-xl text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
