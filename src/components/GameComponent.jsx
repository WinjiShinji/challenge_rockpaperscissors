import RulesComponent from "./RulesComponent"
import GameSelection from "./GameSelection"
import GameSelected from "./GameSelected"

const GameComponent = ({ state, dispatch }) => {
  return (
    <>
    {state.showRules === true 
        ? <RulesComponent dispatch={dispatch} />
        : state.selection === true
        ? <GameSelection dispatch={dispatch} />
        : state.selected === true
        ? <GameSelected state={state} /> 
        : ''
      }
    </>
  )
}

export default GameComponent