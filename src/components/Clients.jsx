import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getPublicPath } from '../utils/paths'

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const clients = [
    {
      name: 'Bank of Alexandria',
      image: 'images/42Bank-of-Alexandria-Grants-Access-to-Microfinance-for-First-Time-Ever-in-Egypt.jpg'
    },
    {
      name: 'Mercedes-Benz',
      image: 'images/Mercedes-Benz_logo_2.svg_-1024x740.png'
    },
    {
      name: 'Client 3',
      image: 'images/5e13af20313ae48c98ea082cd3920fab.jpg'
    },
    {
      name: 'Client 4',
      image: 'images/954cf1214f02d50a6412c2594713ec01.jpg'
    },
    {
      name: 'Client 5',
      image: 'images/1979b890702075.5e1e3d7fc0124.jpg'
    },
    {
      name: 'Client 6',
      image: 'images/images-1.png'
    },
    {
      name: 'Client 7',
      image: 'images/images-3.png'
    },
    {
      name: 'Client 8',
      image: 'images/images.jpg'
    },
    {
      name: 'Client 9',
      image: 'images/images.png'
    },
    {
      name: 'Client 10',
      image: 'images/mafia-701x1024.jpg'
    },
    {
      name: 'Client 11',
      image: 'images/zrf-trq.jpg'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [clients.length])

  return (
    <section className="py-20 px-4 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16"
        >
          Our Clients
        </motion.h2>

        <div className="relative">
          <motion.div
            animate={{
              x: `-${currentSlide * 100}%`
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex"
          >
            <div className="flex flex-nowrap gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[200px] h-[200px] flex items-center justify-center p-4 glass-panel"
                >
                  <img
                    src={getPublicPath(client.image)}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(clients.length / 4))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-accent' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
