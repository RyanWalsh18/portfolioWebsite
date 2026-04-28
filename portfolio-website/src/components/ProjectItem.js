// Reusable card component for a single project in the Projects gallery
import React from 'react'
import { Link } from 'react-router-dom';

// Props:
//   id    — numeric project ID used to build the detail page URL and look up the image
//   image — imported image asset passed in from ProjectList
//   name  — display name shown below the thumbnail
function ProjectItem({id,image,name}) {
  return (
    // Wrapping the card in a Link makes the entire card clickable
    <Link to={`/projects/${id}`} className='projectLink' >
      <div className='projectItem'>
          {/* Background-image approach lets CSS control sizing/cropping via background-size */}
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <h1>{name}</h1>
      </div>
    </Link>
    )
}

export default ProjectItem;
