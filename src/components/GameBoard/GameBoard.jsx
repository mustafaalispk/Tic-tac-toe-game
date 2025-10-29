import React,{useState} from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export const GameBoard = () => {
  const[gameBoard, setGameBoard]=useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard].map((innerArray) => [...innerArray]);
        updatedBoard[rowIndex][colIndex]  = 'X';
        return updatedBoard;
    });       
  }
  return (
    <ol id="game-board">
       {gameBoard.map((row, rowIndex) => {
        return <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => {
                    return (
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    )
                })}                
            </ol>
        </li>
       })}
    </ol>
  )
}
