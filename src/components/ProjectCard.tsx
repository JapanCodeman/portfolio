import { Link } from "react-router-dom"

interface ProjectCardProps {
  title: string,
  description: string,
  image: string,
  codeLink: string,
  visitLink: string
}

function ProjectCard({title, description, image, codeLink, visitLink}: ProjectCardProps) {
  return (
    <div className='project-card-wrap' >
      <div className='card-flip-container'>
        <div className='card-front' >
          <div className='project-title'>{title}</div>
          <div className='project-thumbnail-and-description-wrap'>
            <img className='project-thumbnail' src={image} alt='thumbnail text' />
            <div className='project-description'>{description}</div>
          </div>
        </div>
        
        <div className='card-back'>
          <div className='project-title-back'>{title}</div>
          <Link className='project-visit-link' to={visitLink}>Check out {title}</Link>
          <a className='project-code-link' href={codeLink}>Code</a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;