import imageAssets from "../imageAssets"
import GameIcon from "./GameIcon"

const GameSelected = ({ state }) => {
  return (
    <div className="selected_container">
      {/* User */}
      <div className="selected_user">
        {state.choice === 'paper'
        ? <div className="icon_paper selected">
            <GameIcon icon={imageAssets.iconPaper} alt={'paper'} />
          </div>
        : state.choice === 'rock'
        ? <div className="icon_rock selected">
          <GameIcon icon={imageAssets.iconRock} alt={'rock'} />
          </div>
        : <div className="icon_scissors selected">
          <GameIcon icon={imageAssets.iconScissors} alt={'scissors'} />
          </div>
        }
        <p>You Picked</p>
      </div>
      
      {/* CPU */}
      <div className="selected_cpu">
        {state.cpu === 'paper'
        ? <div className="icon_paper opponent">
          <GameIcon icon={imageAssets.iconPaper} alt={'paper'} />
          </div>
        : state.cpu === 'rock'
        ? <div className="icon_rock opponent">
          <GameIcon icon={imageAssets.iconRock} alt={'rock'} />
          </div>
        : state.cpu === 'scissors'
        ? <div className="icon_scissors opponent">
          <GameIcon icon={imageAssets.iconScissors} alt={'scissors'} />
          </div>
        : <p>Invalid Opponent <br/> RNG-Logic</p>
        }
        <p>The House Picked</p>
      </div>
    </div>
  )
}

export default GameSelected