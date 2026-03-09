'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: null, display: '24/7', label: 'Support' },
]

const codeLines = [
  { text: 'const project = {', color: 'text-gray-300' },
  { text: '  framework:', color: 'text-gray-400', value: '"Next.js 14"', valueColor: 'text-emerald-400' },
  { text: '  styling:', color: 'text-gray-400', value: '"Tailwind CSS"', valueColor: 'text-emerald-400' },
  { text: '  database:', color: 'text-gray-400', value: '"PostgreSQL"', valueColor: 'text-emerald-400' },
  { text: '  hosting:', color: 'text-gray-400', value: '"Vercel"', valueColor: 'text-emerald-400' },
  { text: '  ci_cd:', color: 'text-gray-400', value: '"GitHub Actions"', valueColor: 'text-emerald-400' },
  { text: '  status:', color: 'text-gray-400', value: '"✓ Deployed"', valueColor: 'text-primary-400' },
  { text: '}', color: 'text-gray-300' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-primary-600 uppercase bg-primary-50 rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About Dope Digital
            </h2>
            <p className="text-lg text-gray-500 mb-4 leading-relaxed">
              We're a passionate team of developers, designers, and digital
              strategists dedicated to creating exceptional digital experiences.
              With years of combined experience, we've helped businesses of all
              sizes transform their digital presence.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our approach combines cutting-edge technology with thoughtful
              design, ensuring that every project we deliver not only meets but
              exceeds expectations. We believe in building long-term
              partnerships with our clients.
            </p>

            {/* Stats */}
            <motion.div
              className="mt-10 grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                  }}
                  className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <motion.div
                    className="text-3xl font-extrabold text-primary-600 mb-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.1 }}
                  >
                    {stat.value !== null ? (
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.display
                    )}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: code editor visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/40 to-violet-200/20 rounded-3xl blur-2xl" />

            <motion.div
              className="relative bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-mono">project.config.ts</span>
                <div className="w-16" />
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                    className="flex items-center gap-1"
                  >
                    <span className="text-gray-700 select-none w-5 text-right text-xs mr-3">{i + 1}</span>
                    {line.value ? (
                      <>
                        <span className={line.color}>{line.text} </span>
                        <span className={line.valueColor}>{line.value},</span>
                      </>
                    ) : (
                      <span className={line.color}>{line.text}</span>
                    )}
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.div
                  className="flex items-center gap-1 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-gray-700 select-none w-5 text-right text-xs mr-3">{codeLines.length + 1}</span>
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary-400 rounded-sm"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-primary-600 flex items-center justify-between">
                <span className="text-xs text-primary-100 font-mono">TypeScript</span>
                <span className="text-xs text-primary-200 font-mono">✓ No errors</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
