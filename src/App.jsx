import {useState} from 'react';
import { GameBoard } from "./components/GameBoard/GameBoard"
import { Player } from "./components/Player/Player"
import { Log } from './components/Log/Log';

const driveActivePlayer = (gameTurns) => {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = driveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns];
      return updatedTurns;
    });
  }
  return (
   <main>
     <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          turns={gameTurns}
        />
     </div>
     <Log gameTurns={gameTurns}/>
   </main>
  )
}

export default App
