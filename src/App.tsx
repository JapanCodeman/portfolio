import React from 'react';
import './App.scss';

import Header from './components/Header';
import PicAndWelcome from './components/PicAndWelcome';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Header />
      <PicAndWelcome />
      <ProjectCard title='Tic Tac Toe' image='https://placehold.jp/75x75.png' description='A simple JavaScript based Tic Tac Toe game I built' codeLink='http://ryansurdick.com' visitLink='http://www.google.com' />
    </div>
  );
}

export default App;
