export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  5+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-primary-200 rounded w-5/6 mt-4"></div>
                  <div className="h-4 bg-primary-200 rounded w-4/6"></div>
                  <div className="h-4 bg-primary-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

