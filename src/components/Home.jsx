import Header from "./Header";
import PicAndWelcome from "./PicAndWelcome.jsx";
import ProjectCard from "./ProjectCard.tsx";

import ticTacToePic from '../../src/assets/images/tic-tac-toe.png'

function Home() {
  const projectsList = [
    {
      title: "Tic Tac Toe",
      image: ticTacToePic,
      description: "A simple JavaScript based Tic Tac Toe game I built",
      codeLink: "http://ryansurdick.com",
      visitLink: "/tic-tac-toe"
    }
  ]

  return (
    <div className='home-container'>
      <Header title={"Ryan Surdick"} backButton={false}/>
      <PicAndWelcome />
      {projectsList? projectsList.map(project => <ProjectCard title={project.title} image={project.image} description={project.description} codeLink={project.codeLink} visitLink={project.visitLink} />) : "No Projects Found"}
    </div>
  );
}
export default Home;