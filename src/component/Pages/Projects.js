import React from 'react'
import DATA from './content'

import Project from './Project'

const Projects = () => {
  return (
    <div className='page__main'>
      {DATA.projects.map((project, index) => {
        return (
          <Project
            key={index}
            project={project}
          />
        )
      })}
    </div>
  )
}

export default Projects