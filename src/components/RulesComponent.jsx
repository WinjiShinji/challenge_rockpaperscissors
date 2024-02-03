import imageAssets from "../imageAssets"

const RulesComponent = ({ dispatch }) => {
  return (
    <>
      <img src={imageAssets.imageRules} alt="" />
      <button
        onClick={() => dispatch({ type: 'showRules', payload: false})}
      >
        <img src={imageAssets.iconClose} alt="Close Rules" />
      </button>
    </>
  )
}

export default RulesComponent