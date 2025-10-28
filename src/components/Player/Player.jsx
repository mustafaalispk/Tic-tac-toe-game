import React, {useState} from 'react'

export const Player = ({initialName, symbol}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  }
  const handleChange = (event) => {
    console.log("event", event)
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    buttonCaption = "Save";
  }
  
  return (
    <li>
        <span className="player">
            {editablePlayerName}
        </span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  )
}
