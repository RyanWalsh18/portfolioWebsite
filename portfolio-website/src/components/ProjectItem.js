import React from 'react'
import { Link } from 'react-router-dom';

function ProjectItem({id,image,name}) {
  return (
    <Link to={`/projects/${id}`} className='projectLink' >
      <div className='projectItem'>
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <h1>{name}</h1>
      </div>
    </Link>
    )
}

export default ProjectItem;
