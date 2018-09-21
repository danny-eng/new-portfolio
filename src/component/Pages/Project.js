import React from 'react'
import PropTypes from 'prop-types'

const Project = (props) => {
  const {
    project: { name, tech, url }
  } = props
  return (
    <div className='project_container'>
      <a href={url} target='_blank' rel='noopener noreferrer'>{name}</a>
      {tech.map((technology, index) => {
        return (
          <p key={index}>{technology}</p>
        )
      })}
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }),
}

Project.defaultProps = {
  project: {
    name: 'Rocket',
    tech: ['HTML'],
    url: 'www.test.com',
  },
}

export default Project