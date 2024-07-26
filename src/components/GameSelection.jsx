import imageAssets from "../imageAssets"
import GameIcon from "./GameIcon"

const GameSelection = ({ dispatch }) => {
  const playBtn = () => {
    dispatch({ type: "playAgain", payload: true })
  }

  const selectedHandler = (choice) => {
    dispatch({ type: "selection", payload: false })
    dispatch({ type: "selected", payload: true })
    dispatch({ type: "choice", payload: choice })
  }

  return (
    <div className="game_selection">
      <img src={imageAssets.bgTriangle} alt="" className="triangle" />

      {/* Paper */}
      <div
        className="icon_paper choose"
        onClick={() => {
          selectedHandler("paper")
          playBtn()
        }}
      >
        <GameIcon icon={imageAssets.iconPaper} alt={"paper"} />
      </div>

      {/* Scissors */}
      <div
        className="icon_scissors choose"
        onClick={() => {
          selectedHandler("scissors")
          playBtn()
        }}
      >
        <GameIcon icon={imageAssets.iconScissors} alt={"scissors"} />
      </div>

      {/* Rock */}
      <div
        className="icon_rock choose"
        onClick={() => {
          selectedHandler("rock")
          playBtn()
        }}
      >
        <GameIcon icon={imageAssets.iconRock} alt={"rock"} />
      </div>
    </div>
  )
}

export default GameSelection
