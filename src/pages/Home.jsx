import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'
import Clients from '../components/Clients'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  const services = [
    {
      title: 'Game Development',
      description: 'Creating engaging and immersive gaming experiences across multiple platforms.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '3D Production',
      description: 'High-quality 3D modeling, animation, and visualization services.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'VR/AR Solutions',
      description: 'Cutting-edge virtual and augmented reality applications for various industries.',
      icon: (
        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    }
  ]

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary opacity-90" />
            {/* Animated Background Elements */}
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-[40vw] h-[40vw] rounded-full bg-cyan-500/20 blur-3xl"
                initial={{
                  x: Math.random() * 100 - 50 + '%',
                  y: Math.random() * 100 - 50 + '%',
                  scale: 0,
                }}
                animate={{
                  x: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                  y: [Math.random() * 100 - 50 + '%', Math.random() * 100 - 50 + '%'],
                  scale: [0.5, 1.5],
                }}
                transition={{
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Welcome to <span className="text-cyan-500">Back2Back</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4"
            >
              We create innovative solutions for businesses and individuals,
              turning ideas into reality through cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition-colors duration-300 text-center"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We <span className="text-cyan-500">Offer</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <Clients />
      </motion.div>
    </div>
  )
}

export default Home
