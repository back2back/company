import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Quality',
      description: 'Delivering excellence through attention to detail and best practices.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve the best possible outcomes.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 md:p-8 lg:p-12 rounded-lg"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            About <span className="text-cyan-500">Us</span>
          </h1>
          
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-500">
              Our Vision
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-6">
              At Back2Back, we strive to create innovative digital solutions that make a difference.
              Our passion for technology and creativity drives us to deliver exceptional results
              for our clients.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-500">
                Our Approach
              </h2>
              <p className="text-gray-300 text-base md:text-lg">
                We believe in a collaborative approach, working closely with our clients
                to understand their needs and deliver solutions that exceed expectations.
                Our team combines technical expertise with creative thinking to build
                innovative solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 glass-panel rounded-lg"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
