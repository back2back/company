const BASE_URL = '/company'

export const getPublicPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path already includes base URL, return as is
  if (cleanPath.startsWith('company/')) {
    return '/' + cleanPath;
  }
  
  return `${BASE_URL}/${cleanPath}`;
};

export const getImagePath = (imageName) => {
  return getPublicPath(`images/${imageName}`);
};
