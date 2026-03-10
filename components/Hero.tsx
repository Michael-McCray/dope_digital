'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const techPills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'Flutter']

export default function Hero() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const springConfig = { damping: 30, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const blob1X = useTransform(x, [0, 1], [-40, 40])
  const blob1Y = useTransform(y, [0, 1], [-40, 40])
  const blob2X = useTransform(x, [0, 1], [40, -40])
  const blob2Y = useTransform(y, [0, 1], [40, -40])
  const blob3X = useTransform(x, [0, 1], [-20, 20])
  const blob3Y = useTransform(y, [0, 1], [-20, 20])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-600 rounded-full filter blur-[130px] opacity-20"
          style={{ x: blob1X, y: blob1Y }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-violet-600 rounded-full filter blur-[130px] opacity-15"
          style={{ x: blob2X, y: blob2Y }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500 rounded-full filter blur-[120px] opacity-10"
          style={{ x: blob3X, y: blob3Y }}
          animate={{ scale: [1, 1.08, 0.94, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src="/logo.png"
              alt="Dope Digital"
              width={400}
              height={120}
              priority
              className="h-auto w-[28vw] min-w-[260px] max-w-[400px] drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Animated tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-primary-400 via-cyan-300 to-primary-400 bg-clip-text text-transparent animate-shimmer"
        >
          Premium Development Services
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We craft exceptional digital experiences through cutting-edge web
          applications, mobile apps, and innovative software solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: '0 20px 40px -12px rgba(2,132,199,0.55)',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Get Quote
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-700 text-base font-semibold rounded-xl text-gray-300 bg-white/5 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              y: -2,
              borderColor: 'rgba(14,165,233,0.6)',
              color: '#fff',
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Our Services
          </motion.a>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techPills.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08, ease: 'easeOut' }}
              className="px-3 py-1 text-xs font-medium text-gray-300 border border-gray-700 rounded-full bg-white/8 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-8 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ opacity: 0.7 }}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </section>
  )
}
