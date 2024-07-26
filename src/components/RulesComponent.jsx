import imageAssets from "../imageAssets"

const RulesComponent = ({ state, dispatch }) => {
  return (
    <>
      <div
        className={`rules-bg ${state.RulesComponent === false ? "hide" : ""}`}
      ></div>
      <div className="rules_container">
        <p>Rules</p>
        <img src={imageAssets.imageRules} alt="" className="rules-img" />
        <button
          className="rules-btn"
          onClick={() => dispatch({ type: "showRules", payload: false })}
        >
          <img
            src={imageAssets.iconClose}
            alt="Close Rules"
            className="rules-close"
          />
        </button>
      </div>
    </>
  )
}

export default RulesComponent
