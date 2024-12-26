import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from './config';

const COLLECTION_NAME = 'projects';

export const projectService = {
  // Get all projects
  getProjects: async () => {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Add a new project
  addProject: async (project) => {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...project,
      createdAt: new Date().toISOString()
    });
    return {
      id: docRef.id,
      ...project
    };
  },

  // Update a project
  updateProject: async (id, project) => {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...project,
      updatedAt: new Date().toISOString()
    });
    return {
      id,
      ...project
    };
  },

  // Delete a project
  deleteProject: async (id) => {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
    return id;
  }
};
