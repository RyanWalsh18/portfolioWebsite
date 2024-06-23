import React from 'react'
import {ProjectList} from '../helpers/ProjectList';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects' >
        <h1 className='pageTitle'>My Projects</h1>
        <div className='projectsList'>
            {ProjectList.map((project, key)=>{
                return <ProjectItem key={key} image={project.image} name={project.name}></ProjectItem>
            })}
        </div>
    </div>
  )
}

export default Projects;
