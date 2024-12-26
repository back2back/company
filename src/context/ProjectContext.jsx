import { createContext, useContext, useState, useEffect } from 'react'

const ProjectContext = createContext()

export const useProjects = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider')
  }
  return context
}

export const ProjectProvider = ({ children }) => {
  // Initialize state from localStorage or empty array
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects')
    return savedProjects ? JSON.parse(savedProjects) : []
  })

  // Save to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    }
    setProjects(prevProjects => [...prevProjects, newProject])
  }

  const updateProject = (id, updatedProject) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === id
          ? { ...project, ...updatedProject, updatedAt: new Date().toISOString() }
          : project
      )
    )
  }

  const deleteProject = (id) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== id))
  }

  const getProject = (id) => {
    return projects.find(project => project.id === id)
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
