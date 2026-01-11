'use client'

import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Dope Digital
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We're a passionate team of developers, designers, and digital
              strategists dedicated to creating exceptional digital experiences.
              With years of combined experience, we've helped businesses of all
              sizes transform their digital presence.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Our approach combines cutting-edge technology with thoughtful
              design, ensuring that every project we deliver not only meets but
              exceeds expectations. We believe in building long-term
              partnerships with our clients.
            </p>
            <motion.div
              className="mt-8 grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: 'easeOut',
                      },
                    },
                  }}
                 
                >
                  <motion.div
                    className="text-4xl font-bold text-primary-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.1,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 shadow-2xl"
              
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <div className="space-y-2">
                  <motion.div
                    className="h-4 bg-gray-200 rounded w-3/4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <motion.div
                    className="h-4 bg-gray-200 rounded w-1/2"
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.div
                    className="h-4 bg-primary-200 rounded w-5/6 mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '83%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <motion.div
                    className="h-4 bg-primary-200 rounded w-4/6"
                    initial={{ width: 0 }}
                    whileInView={{ width: '67%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.div
                    className="h-4 bg-primary-200 rounded w-3/4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
