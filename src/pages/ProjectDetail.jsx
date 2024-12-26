import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProjects } from '../context/ProjectContext'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const { getProject } = useProjects()
  const project = getProject(projectId)

  if (!project) {
    return (
      <div className="min-h-screen pt-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/portfolio"
            className="text-accent hover:text-accent-secondary transition-colors mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm ${
              project.status === 'completed' ? 'bg-green-500/20 text-green-500' :
              project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-500' :
              'bg-blue-500/20 text-blue-500'
            }`}>
              {project.status}
            </span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
              {project.category}
            </span>
          </div>
        </motion.div>

        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2">
            <div className="glass-panel p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Project</h2>
              <p className="text-white/70 whitespace-pre-wrap">{project.description}</p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="glass-panel p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="glass-panel p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Project Links</h2>
              <div className="space-y-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent-secondary transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent-secondary transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/>
                    </svg>
                    <span>View Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 rounded-lg mt-6"
            >
              <h2 className="text-2xl font-bold mb-4">Project Info</h2>
              <div className="space-y-2 text-white/70">
                <p>
                  <span className="font-medium">Category:</span> {project.category}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {project.status}
                </p>
                <p>
                  <span className="font-medium">Added:</span>{' '}
                  {new Date(project.createdAt).toLocaleDateString()}
                </p>
                {project.updatedAt && (
                  <p>
                    <span className="font-medium">Last Updated:</span>{' '}
                    {new Date(project.updatedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
