import React from 'react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string,
  description: string,
  image: string,
  codeLink: string,
  visitLink: string
}

function ProjectCard({title, description, image, codeLink, visitLink}: ProjectCardProps) {

  const [cardFlipped, setCardFlipped] = useState(false);
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCardFlipped(true);
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCardFlipped(false);
  }

  return (
    <div className='project-card-wrap'>
      {cardFlipped? 
      <div className='card-back' onMouseOut={handleMouseOut}>
        <div className='project-title-back'>{title}</div>
        <img className='project-image' src={image} alt='project' />
        <a className='project-visit-link' href={visitLink}>Check out {title}</a>
        <a className='project-code-link' href={codeLink}>Code</a>
      </div>
      :
      <div className='card-front' onMouseOver={handleMouseOver}>
        <div className='project-title'>{title}</div>
        <img className='project-thumbnail' src={image} alt='thumbnail text' />
        <div className='project-description'>{description}</div>
      </div>}
    </div>
  );
}
export default ProjectCard;