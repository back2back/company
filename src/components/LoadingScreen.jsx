import { motion } from 'framer-motion'

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative">
        {/* Main Logo Animation */}
        <motion.div
          className="text-4xl md:text-6xl font-bold gradient-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Back to Back
        </motion.div>
        
        {/* Animated Line */}
        <motion.div
          className="absolute -bottom-4 left-0 h-1 bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Loading Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 0], y: 0 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
