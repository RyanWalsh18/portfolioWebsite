// ProjectDetails page — fetches a single project by its URL id param and renders its details
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectImages } from '../helpers/ProjectList';
import api from '../services/api';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
  // id comes from the dynamic route segment /projects/:id
  const { id } = useParams();
  const [project, setProject] = useState(null);  // null until the fetch resolves
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);       // stores the error message if the fetch fails

  useEffect(() => {
    api.get(`/project/${id}`)
      .then((data) => {
        // The API may return description/skills as a single string or an array.
        // Normalise both fields to arrays so the JSX can always use .map()
        const description = Array.isArray(data.description)
          ? data.description
          : [data.description];
        const skills = Array.isArray(data.skills)
          ? data.skills
          : [data.skills];
        setProject({ ...data, description, skills });
      })
      // api.js throws on any non-2xx response — catch it here and store the message
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

  }, [id]); // Re-fetch whenever the id param changes (user navigates between projects for example)

  // Show a spinner while the API call is in flight
  if (loading) {
    return <div className='projectDetails'><p>Loading...</p></div>;
  }

  // Explicit error state set by .catch() — covers 404s, network failures, etc.
  if (error) {
    return (
      <div className='projectDetails'>
        <p>Project not found.</p>
        <Link to='/projects'><button>Back</button></Link>
      </div>
    );
  }

  return (
    <div className='projectDetails'>
      <h1>{project.name}</h1>
      {/* Thumbnail uses background-image so CSS can handle sizing and cropping */}
      <div className="projectImage" style={{ backgroundImage: `url(${projectImages[project.id]})` }}></div>

      <h2>Description</h2>
      <div className='description'>
        <ul>
          {/* Each sentence in the description array becomes its own bullet point */}
          {project.description.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </div>

      <h2>Skills</h2>
      <div>
        <ul>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Back button returns the user to the full project gallery */}
      <Link to='/projects'><button>Back</button></Link>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProjectDetails;
