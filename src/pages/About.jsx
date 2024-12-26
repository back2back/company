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
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          
          <motion.div
            className="glass-panel p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Back to Back is a pioneering force in game development and 3D production. 
              We blend creativity with cutting-edge technology to create immersive digital experiences 
              that push the boundaries of what's possible.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our team of passionate developers, artists, and designers work together 
              to bring innovative ideas to life, whether it's through captivating games, 
              stunning 3D visualizations, or groundbreaking VR experiences.
            </p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Sets Us Apart
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <motion.h2
            className="text-3xl md:text-4xl font-bold gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-panel p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-white/70">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default About
