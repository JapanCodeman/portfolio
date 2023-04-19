import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Routes>
    </div>
  );
}

export default App;
