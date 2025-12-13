export default function PrivacyPolicy() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="mb-4 leading-relaxed">
                Dope Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="leading-relaxed">
                By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                2.1 Personal Information
              </h3>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fill out our contact form</li>
                <li>Request information about our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="mb-4 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit on our website</li>
                <li>Time and date of your visit</li>
                <li>Time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery, hosting, and analytics.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with your explicit consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="mb-4 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Third-Party Services
              </h2>
              <p className="mb-4 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you use.
              </p>
              <p className="mb-4 leading-relaxed">
                We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Google reCAPTCHA for spam prevention</li>
                <li>Resend for email delivery</li>
                <li>Vercel for hosting and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                To exercise these rights, please contact us at{' '}
                <a
                  href="mailto:dopedigitalstudio@gmail.com"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  dopedigitalstudio@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="mb-4 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:dopedigitalstudio@gmail.com"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    dopedigitalstudio@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+16463094008"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    +1 (646) 309-4008
                  </a>
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 10:00 PM
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

