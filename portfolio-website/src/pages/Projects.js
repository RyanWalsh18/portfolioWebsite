// Projects page — fetches the full project list from the API and renders a card grid
import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import api from '../services/api';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);  // Array of project objects from the API
  const [loading, setLoading] = useState(true);  // Show a spinner until the fetch resolves
  const [error, setError] = useState(null);       // Stores the error message if the fetch fails

  useEffect(() => {
    // Fetch all projects on mount; the empty dependency array ensures this runs once
    api.get('/project')
      .then(setProjects)
      .catch((err) => setError(err.message))      // api.js throws on non-2xx — catch it here
      .finally(() => setLoading(false));           // Hide spinner regardless of success or error
  }, []);

  // Render a placeholder while the API call is in flight
  if (loading) {
    return <div className='projects'><p>Loading...</p></div>;
  }

  if (error) {
    return <div className='projects'><p>Failed to load projects.</p></div>;
  }

  return (
    <div className='projects'>
      <h1 className='pageTitle'>My Projects</h1>
      <div className='projectsList'>
        {projects.map((project) => (
          // imageURL is returned directly by the API — points to public/projectImages/
          <ProjectItem
            key={project.id}
            id={project.id}
            image={project.imageURL}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
