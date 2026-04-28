// Projects page — fetches the full project list from the API and renders a card grid
import React, { useState, useEffect } from 'react';
import { projectImages } from '../helpers/ProjectList';
import ProjectItem from '../components/ProjectItem';
import api from '../services/api';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);  // Array of project objects from the API
  const [loading, setLoading] = useState(true);  // Show a spinner until the fetch resolves

  useEffect(() => {
    // Fetch all projects on mount; the empty dependency array ensures this runs once
    api.get('/project')
      .then(setProjects)
      .finally(() => setLoading(false));  // Hide spinner regardless of success or error
  }, []);

  // Render a placeholder while the API call is in flight
  if (loading) {
    return <div className='projects'><p>Loading...</p></div>;
  }

  return (
    <div className='projects'>
      <h1 className='pageTitle'>My Projects</h1>
      <div className='projectsList'>
        {projects.map((project) => (
          // project.id is used as the React key and to look up the local thumbnail image
          <ProjectItem
            key={project.id}
            id={project.id}
            image={projectImages[project.id]}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
