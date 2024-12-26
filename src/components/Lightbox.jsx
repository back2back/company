import { motion, AnimatePresence } from 'framer-motion'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrevious = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-accent"
        >
          <XIcon className="w-8 h-8" />
        </button>

        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white hover:text-accent"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white hover:text-accent"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox
