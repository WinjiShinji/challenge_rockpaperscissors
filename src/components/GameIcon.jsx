
const GameIcon = ({ icon, alt }) => {
  return (
    <>
      <img 
        src={icon} 
        alt={alt} 
        height={"32px"}
        width={"32px"}
      />
    </>
  )
}

export default GameIcon