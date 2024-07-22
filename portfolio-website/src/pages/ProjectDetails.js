import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { Link } from 'react-router-dom';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
  const { id } = useParams();
  const project = ProjectList.find((project) => project.id === parseInt(id));

  return (
    <div className='projectDetails'>
      <h1>{project.name}</h1>
      <div className="projectImage" style={{ backgroundImage: `url(${project.image})` }}></div>
      <h2>Description</h2>
      {/* <p className='description'>{project.description}</p> */}
      <div className='description'>
        <ul>
          {project.description.map((sentance, index) => (
            <li key={index}>{sentance}</li>
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
      <Link to={`/projects`} >
        <button>Back</button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ProjectDetails;
