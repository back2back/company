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
        console.log('Loading projects from Firebase...');
        const data = await projectService.getProjects();
        console.log('Projects loaded:', data);
        setProjects(data);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const addProject = async (project) => {
    try {
      console.log('Adding project to Firebase:', project);
      const newProject = await projectService.addProject(project);
      console.log('Project added successfully:', newProject);
      setProjects(prev => [newProject, ...prev]);
      return newProject;
    } catch (err) {
      console.error('Error adding project:', err);
      setError(err.message);
      throw err;
    }
  };

  const updateProject = async (id, updatedProject) => {
    try {
      console.log('Updating project in Firebase:', id, updatedProject);
      const updated = await projectService.updateProject(id, updatedProject);
      console.log('Project updated successfully:', updated);
      setProjects(prev =>
        prev.map(project => (project.id === id ? updated : project))
      );
      return updated;
    } catch (err) {
      console.error('Error updating project:', err);
      setError(err.message);
      throw err;
    }
  };

  const deleteProject = async (id) => {
    try {
      console.log('Deleting project from Firebase:', id);
      await projectService.deleteProject(id);
      console.log('Project deleted successfully');
      setProjects(prev => prev.filter(project => project.id !== id));
    } catch (err) {
      console.error('Error deleting project:', err);
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
