import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '../components/LoadingScreen'
import Clients from '../components/Clients'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="min-h-screen pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              Game Development
              <br />& 3D Production
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              Creating immersive digital experiences that push the boundaries of what's possible
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
            >
              <a
                href="/portfolio"
                className="btn-primary"
              >
                Explore Our Work
              </a>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-3xl"
                initial={{
                  x: Math.random() * 100 - 50 + '%',
                  y: Math.random() * 100 - 50 + '%',
                  scale: 0,
                }}
                animate={{
                  x: [
                    Math.random() * 100 - 50 + '%',
                    Math.random() * 100 - 50 + '%',
                  ],
                  y: [
                    Math.random() * 100 - 50 + '%',
                    Math.random() * 100 - 50 + '%',
                  ],
                  scale: [0.5, 1.5],
                }}
                transition={{
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 3 + index * 0.2,
                }}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Game Development',
                  description: 'Creating engaging and immersive gaming experiences across multiple platforms.'
                },
                {
                  title: '3D Production',
                  description: 'High-quality 3D modeling, animation, and visualization services.'
                },
                {
                  title: 'VR/AR Solutions',
                  description: 'Cutting-edge virtual and augmented reality applications for various industries.'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="glass-panel p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <Clients />
      </motion.div>
    </>
  )
}

export default Home
