import React from 'react'

import './ProjectTile.scss'

export default function ProjectTile({ name, description, url, thumbnail, isSelected }) {

  return (
    <a href={url} target='_blank' className={`project-tile-container ${isSelected ? 'selected' : ''}`}>
      <img className='project-tile-image' src={thumbnail} alt='project tile image' />
      <div className="project-tile-text-frame">
        <h3 className="project-name">{name}</h3>
        <p className="project-desc">{description}</p>
      </div>
    </a>
  )
}
