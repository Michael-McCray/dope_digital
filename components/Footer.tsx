'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design']
const company = ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service']
const companyHrefs = ['#about', '#contact', '#', '#']

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-400 pt-1 pb-12 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image src="/logo.png" alt="Dope Digital" width={140} height={44} className="h-auto w-[140px] mb-4 opacity-90" />
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              Premium development services for modern businesses. We craft
              exceptional digital experiences that drive results.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  label: 'Twitter',
                  path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                },
                {
                  label: 'GitHub',
                  path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                  fillRule: 'evenodd' as const,
                  clipRule: 'evenodd' as const,
                },
                {
                  label: 'LinkedIn',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule={social.fillRule} clipRule={social.clipRule} d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <motion.a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1.5"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 inline-block" />
                    {s}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={item}>
                  <motion.a
                    href={companyHrefs[i]}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1.5"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 inline-block" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Dope Digital. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
