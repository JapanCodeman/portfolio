import './App.scss';

import Header from './components/Header';
import PicAndWelcome from './components/PicAndWelcome';
import ProjectCard from './components/ProjectCard';

import ticTacToePic from '../src/assets/images/tic-tac-toe.png'

function App() {

  const projectsList = [
    {
      title: "Tic Tac Toe",
      image: ticTacToePic,
      description: "A simple JavaScript based Tic Tac Toe game I built",
      codeLink: "http://ryansurdick.com",
      visitLink: "http://www.google.com"
    }
  ]

  return (
    <div className="App">
      <Header />
      <PicAndWelcome />
      {projectsList? projectsList.map(project => <ProjectCard title={project.title} image={project.image} description={project.description} codeLink={project.codeLink} visitLink={project.visitLink} />) : "No Projects Found"}
    </div>
  );
}

export default App;
