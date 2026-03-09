'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'

const serviceOptions = [
  'Web Development',
  'Mobile Apps',
  'Cloud Solutions',
  'UI/UX Design',
  'E-Commerce',
  'Consulting',
]

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]

const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Flexible',
]

const contactInfo = [
  {
    title: 'Email',
    value: 'dopedigitalstudio@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '+1 (646) 309-4008',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Hours',
    value: 'Mon–Fri 9AM–10PM',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 placeholder:text-gray-400 text-sm'

const selectClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 text-sm appearance-none cursor-pointer'

const labelClass = 'block text-sm font-semibold text-gray-700 mb-2'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    description: '',
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleRecaptchaChange = (token: string | null) => setRecaptchaToken(token)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    if (!recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA verification.' })
      setIsSubmitting(false)
      return
    }

    if (selectedServices.length === 0) {
      setSubmitStatus({ type: 'error', message: 'Please select at least one service.' })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, services: selectedServices, recaptchaToken }),
      })

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response:', text)
        throw new Error('Server returned an invalid response. Please check your API configuration.')
      }

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to send message')

      setSubmitStatus({
        type: 'success',
        message: "Thank you! Your quote request has been received. We'll be in touch within 1 business day.",
      })
      setFormData({ fullName: '', email: '', phone: '', company: '', budget: '', timeline: '', description: '' })
      setSelectedServices([])
      setRecaptchaToken(null)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldVariant = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  })

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-primary-600 uppercase bg-primary-50 rounded-full mb-4">
            Get a Quote
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a detailed proposal within 1 business day.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl shadow-gray-100/80 space-y-6"
          >
            {/* Section: Contact Details */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div {...fieldVariant(0.15)}>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Jane Smith"
                  />
                </motion.div>

                <motion.div {...fieldVariant(0.2)}>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </motion.div>

                <motion.div {...fieldVariant(0.25)}>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number{' '}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </motion.div>

                <motion.div {...fieldVariant(0.3)}>
                  <label htmlFor="company" className={labelClass}>
                    Company / Business Name{' '}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Corp"
                  />
                </motion.div>
              </div>
            </div>

            {/* Section: Project Details */}
            <div>
              <h3 className="text-base font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Project Details
              </h3>

              {/* Services */}
              <motion.div {...fieldVariant(0.35)} className="mb-5">
                <label className={labelClass}>
                  Services Required <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {serviceOptions.map((service) => {
                    const checked = selectedServices.includes(service)
                    return (
                      <motion.button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3 py-2.5 rounded-xl text-sm font-medium border text-left transition-all duration-150 ${
                          checked
                            ? 'bg-primary-50 border-primary-400 text-primary-700'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-primary-300 hover:text-gray-800'
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${
                              checked ? 'bg-primary-500 border-primary-500' : 'border-gray-300'
                            }`}
                          >
                            {checked && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          {service}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>

              {/* Budget + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <motion.div {...fieldVariant(0.4)}>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="" disabled>Select a budget range</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div {...fieldVariant(0.45)}>
                  <label htmlFor="timeline" className={labelClass}>
                    Project Timeline <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="" disabled>Select a timeline</option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Description */}
              <motion.div {...fieldVariant(0.5)}>
                <label htmlFor="description" className={labelClass}>
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={inputClass + ' resize-none'}
                  placeholder="Describe your project, goals, key features, and any specific requirements or challenges we should know about..."
                />
              </motion.div>
            </div>

            {/* Status message */}
            <AnimatePresence>
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`p-4 rounded-xl text-sm font-medium ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-red-50 text-red-700 border border-red-100'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* reCAPTCHA */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={handleRecaptchaChange}
                theme="light"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting || !recaptchaToken}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-3.5 px-6 rounded-xl font-semibold text-base shadow-lg shadow-primary-100 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              whileHover={{ scale: 1.02, y: -1, boxShadow: '0 16px 40px -10px rgba(2,132,199,0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </motion.svg>
                  Submitting...
                </span>
              ) : (
                'Submit Quote Request'
              )}
            </motion.button>

            <p className="text-center text-xs text-gray-400">
              We typically respond within 1 business day. Your information is kept strictly confidential.
            </p>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-5 bg-gray-50 rounded-2xl border border-gray-100 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                whileHover={{ scale: 1.04, y: -3, boxShadow: '0 12px 30px -8px rgba(2,132,199,0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-100">
                  {item.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700">{item.title}</div>
                <div className="text-sm text-gray-500 break-all">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
