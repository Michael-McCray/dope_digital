'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 w-[100vw] z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#home">
              <Image src="/logo.png" alt="Dope Digital" width={130} height={40} className="h-auto w-[130px]" />
            </a>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg"
              >
                {link.label}
                <AnimatePresence>
                  {hoveredLink === link.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-lg bg-white/8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-500 transition-colors"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Get Quote
            </motion.a>
          </motion.div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none rounded-lg p-2"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.92 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-5 h-4 flex flex-col justify-between"
              >
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 7.5 },
                  }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1, scaleX: 1 },
                    open: { opacity: 0, scaleX: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -7.5 },
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed top-16 right-0 h-[calc(100vh-64px)] w-72 bg-gray-950/95 backdrop-blur-xl border-l border-white/5 z-50 md:hidden overflow-y-auto"
              >
                <div className="px-4 pt-6 pb-8 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, ease: 'easeOut' }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.06 }}
                    className="pt-4"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-4 py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500"
                    >
                      Get Quote
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
