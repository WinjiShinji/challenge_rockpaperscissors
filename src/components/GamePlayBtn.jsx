import { opponentRNG, scoreLogic } from "../logic/gameLogic"

const GamePlayBtn = ({ state, dispatch, result }) => {
  // Game Reset //
  const resetGame = () => {
    const rng = opponentRNG()
    dispatch({ type: 'cpu', payload: rng })
    dispatch({ type: 'selected', payload: false })
    dispatch({ type: 'selection', payload: true })
    dispatch({ type: 'choice', payload: null })
    dispatch({ type: 'playAgain', payload: false })
  }
  
  // Update Score //
  const updateScore = () => {
    const score = state.score
    const logic = scoreLogic(result)
    const update = score + logic
    dispatch({ type: 'score', payload: update })
  }

  return (
    <button
      onClick={() => {
        resetGame()
        updateScore()
      }}
    >
      Play Again
    </button>
  )
}

export default GamePlayBtn