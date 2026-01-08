'use client'

import { useState, useEffect } from 'react'

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }

    if (selectedService !== null) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  const services = [
    {
      title: 'Web Development',
      description:
        'Modern, responsive web applications built with the latest technologies and best practices.',
      expandedDescription: `We specialize in building cutting-edge web applications that are fast, scalable, and user-friendly. Our web development services include:

• Custom web application development using modern frameworks like React, Next.js, and Vue.js
• Responsive design that works seamlessly across all devices and screen sizes
• Performance optimization for lightning-fast load times
• API development and integration
• Content Management Systems (CMS) customization
• Progressive Web Apps (PWA) for app-like experiences
• E-commerce platform development and customization
• Third-party integrations and API connections

We follow industry best practices and ensure your web application is secure, maintainable, and ready to scale with your business growth.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      expandedDescription: `Transform your business with powerful mobile applications that engage users and drive results. Our mobile app development services cover:

• Native iOS development using Swift and SwiftUI
• Native Android development using Kotlin and Jetpack Compose
• Cross-platform development with React Native and Flutter
• App design and user experience optimization
• App Store and Google Play Store submission and optimization
• Push notification implementation
• In-app purchases and monetization strategies
• Integration with backend services and APIs
• App maintenance and updates

Whether you need a native app for maximum performance or a cross-platform solution for faster deployment, we deliver mobile experiences that users love.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions to power your applications.',
      expandedDescription: `Leverage the power of cloud computing to scale your business efficiently. Our cloud solutions include:

• Cloud infrastructure setup and migration (AWS, Azure, Google Cloud)
• Serverless architecture implementation
• Container orchestration with Docker and Kubernetes
• CI/CD pipeline setup for automated deployments
• Database optimization and cloud database solutions
• Cloud security and compliance implementation
• Auto-scaling and load balancing configuration
• Cloud cost optimization and monitoring
• Disaster recovery and backup solutions

We help you build robust, scalable infrastructure that grows with your business while optimizing costs and ensuring high availability.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, intuitive interfaces designed with user experience at the forefront.',
      expandedDescription: `Create delightful user experiences that convert visitors into customers. Our UI/UX design services include:

• User research and persona development
• Information architecture and user flow design
• Wireframing and prototyping
• Visual design and brand identity integration
• Responsive design for all devices
• Accessibility compliance (WCAG guidelines)
• Usability testing and optimization
• Design system creation and documentation
• Interactive prototypes and animations
• Design-to-development handoff

We combine aesthetic appeal with functional design to create interfaces that are not only beautiful but also intuitive and conversion-focused.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'E-Commerce',
      description:
        'Complete e-commerce solutions that drive sales and provide seamless shopping experiences.',
      expandedDescription: `Build a powerful online store that drives sales and provides exceptional shopping experiences. Our e-commerce services include:

• Custom e-commerce platform development
• Shopify, WooCommerce, and Magento customization
• Shopping cart and checkout optimization
• Payment gateway integration (Stripe, PayPal, etc.)
• Inventory management systems
• Product catalog management
• Order processing and fulfillment automation
• Customer account management
• Multi-currency and multi-language support
• SEO optimization for product pages
• Analytics and conversion tracking setup

From small online stores to enterprise-level marketplaces, we create e-commerce solutions that maximize your revenue and provide seamless shopping experiences.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
    {
      title: 'Consulting',
      description:
        'Expert guidance on technology strategy, architecture, and digital transformation.',
      expandedDescription: `Get expert guidance to make informed technology decisions and accelerate your digital transformation. Our consulting services include:

• Technology strategy and roadmap development
• Architecture review and optimization
• Code review and quality assessment
• Performance optimization consulting
• Security audit and recommendations
• Technology stack selection and evaluation
• Digital transformation planning
• Team training and knowledge transfer
• Project management and agile coaching
• Technical due diligence for acquisitions

Whether you're starting a new project or optimizing existing systems, our consulting services help you make the right technology choices and avoid costly mistakes.`,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(index)}
              className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100 cursor-pointer"
            >
              <div className="text-primary-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div
              className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal content */}
              <div className="p-8">
                <div className="text-primary-600 mb-4">
                  {services[selectedService].icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[selectedService].title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {services[selectedService].expandedDescription}
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                  >
                    Get Started
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

