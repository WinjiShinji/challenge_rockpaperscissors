import logo from "./images/logo.svg"
import { useReducer } from "react"
import reducer from "./logic/reducer"
import GameComponent from "./components/GameComponent"
import GameResult from "./components/GameResult"
import { opponentRNG } from "./logic/gameLogic"

function App() {
  // Initial Reducer State //
  const [state, dispatch] = useReducer(reducer, {
    selection: true,
    selected: false,
    choice: null,
    cpu: opponentRNG(),
    result: null,
    score: 0,
    showRules: false,
    playAgain: false,
  })

  // Component Functions //
  const resetScore = () => {
    dispatch({ type: "score", payload: 0 })
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      resetScore()
    }
  }

  return (
    <main className="app">
      <header>
        <img src={logo} alt="" />
        <div tabIndex={0} onKeyDown={handleKeyPress} onClick={resetScore}>
          <p>Score</p>
          <p>{state.score}</p>
        </div>
      </header>
      <GameComponent state={state} dispatch={dispatch} />
      <GameResult state={state} dispatch={dispatch} />
      <footer>
        <button
          onClick={() => {
            state.showRules === false
              ? dispatch({ type: "showRules", payload: true })
              : dispatch({ type: "showRules", payload: false })
          }}
        >
          Rules
        </button>
      </footer>
    </main>
  )
}

export default App
