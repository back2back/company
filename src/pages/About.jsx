import { motion } from 'framer-motion'
import { LightBulbIcon, CubeIcon, UserGroupIcon } from '@heroicons/react/outline'

const About = () => {
  const features = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions in game development and 3D production.'
    },
    {
      icon: <CubeIcon className="w-8 h-8" />,
      title: 'Quality',
      description: 'Delivering exceptional quality in every project through attention to detail and technical excellence.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients to bring their visions to life through effective communication and teamwork.'
    }
  ]

  const team = [
    {
      name: 'Development Team',
      description: 'Expert developers crafting immersive gaming experiences with the latest technologies.'
    },
    {
      name: '3D Artists',
      description: 'Talented artists creating stunning visual assets and breathtaking environments.'
    },
    {
      name: 'Design Team',
      description: 'Creative designers ensuring intuitive user experiences and engaging interfaces.'
    }
  ]

  return (
    <div className="min-h-screen pt-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <section className="mb-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Back to Back
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are a passionate team of developers, artists, and designers dedicated to creating exceptional digital experiences. Our expertise spans game development, 3D production, and VR/AR solutions.
          </motion.p>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-panel p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-panel p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default About
