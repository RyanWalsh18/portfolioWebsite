import React from 'react'
import {ProjectList} from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
        <h1 className='pageTitle'>My Projects</h1>
        <div className='projectsList'>
            {ProjectList.map((project, key)=>{
                return <div>{project.name}</div>
            })}
        </div>
    </div>
  )
}

export default Projects;
