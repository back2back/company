import { createContext, useContext, useState, useEffect } from 'react';
import { projectService } from '../firebase/projectService';

const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load projects from Firebase
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const addProject = async (project) => {
    try {
      const newProject = await projectService.addProject(project);
      setProjects(prev => [newProject, ...prev]);
      return newProject;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateProject = async (id, updatedProject) => {
    try {
      const updated = await projectService.updateProject(id, updatedProject);
      setProjects(prev =>
        prev.map(project => (project.id === id ? updated : project))
      );
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteProject = async (id) => {
    try {
      await projectService.deleteProject(id);
      setProjects(prev => prev.filter(project => project.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const getProject = (id) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        addProject,
        updateProject,
        deleteProject,
        getProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
