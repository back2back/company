import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

const Portfolio = () => {
  const { projects } = useProjects()

  return (
    <div className="min-h-screen pt-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Portfolio</h1>
        
        {projects.length === 0 ? (
          <div className="text-center text-white/70 py-20">
            No projects to display yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <Link to={`/portfolio/${project.id}`} key={project.id}>
                <motion.div
                  className="glass-panel overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.images && project.images.length > 0 && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/20 text-accent text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 3 && (
                        <span className="px-2 py-1 bg-accent/20 text-accent text-sm rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className={`px-2 py-1 rounded text-sm ${
                        project.status === 'completed' ? 'bg-green-500/20 text-green-500' :
                        project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-500' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-accent">View Details →</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Portfolio
