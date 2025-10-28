import React, {useState} from 'react'

export const Player = ({name, symbol}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name}/>
    buttonCaption = "Save";
  }
  
  return (
    <li>
        <span className="player">
            {playerName}
        </span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  )
}
