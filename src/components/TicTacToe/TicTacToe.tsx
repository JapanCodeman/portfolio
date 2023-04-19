import { useState } from "react";
import Header from "../Header";

import NameEntry from "./NameEntry";

function TicTacToe() {
  const [playerNames, setPlayerNames] = useState({
    player1: 'd',
    player2: ''
  })

  return (
    <div className="tic-tac-toe-wrap">
      <div className="header-wrap">
        <Header title={"Tic Tac Toes"} backButton={true} />
      </div>

      {playerNames.player1 && playerNames.player2 === '' ? 
        <NameEntry /> : <h1>test</h1>
      }

      <div className="board-wrap">

      </div>
    </div>
  );
}
export default TicTacToe;