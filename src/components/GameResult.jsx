import { resultLogic} from "../logic/gameLogic"
import GamePlayBtn from "./GamePlayBtn"

const GameResult = ({ state, dispatch }) => {
  // Game Result //
  const result = resultLogic(state.choice, state.cpu)
  
  return (
    <div className="result">
      <p>
        {result}
      </p>
      {state.playAgain === true
        ? <GamePlayBtn state={state} dispatch={dispatch} result={result} />
        : ''
      }
      
    </div>
  )
}

export default GameResult