
export const Log = ({gameTurns}) => {
  return (
    <ol id="log">
        {gameTurns.map((turn) => {
            return <li key={`${turn.square.row}${turn.square.col}`}>
                    {`Player: ${turn.player} Selected: ${turn.square.row}, ${turn.square.col}`}
                </li>
        })}
    </ol>
  )
}
