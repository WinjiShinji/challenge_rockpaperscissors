  // Random Number Generator //
  const rng = (max) => {
    const random = Math.ceil(Math.random() * max)
    return random
  }
  
  // Opponent Logic //
  const opponentRNG = () => {
    const random = rng(3)
    if (random === 1) {return 'paper'}
    if (random === 2) {return 'rock'}
    if (random === 3) {return 'scissors'}
  }

  // Result Logic //
  const resultLogic = (user, opponent) => {
    if (user === 'paper' && opponent === 'rock') return 'win'
    if (user === 'paper' && opponent === 'scissors') return 'lose'
    if (user === 'paper' && opponent === 'paper') return 'draw'
    if (user === 'rock' && opponent === 'scissors') return 'win'
    if (user === 'rock' && opponent === 'paper') return 'lose' 
    if (user === 'rock' && opponent === 'rock') return 'draw' 
    if (user === 'scissors' && opponent === 'paper') return 'win'
    if (user === 'scissors' && opponent === 'rock') return 'lose'
    if (user === 'scissors' && opponent === 'scissors') return 'draw'
  }

  const scoreLogic = (result) => {
    if (result === 'win') return + 1
    if (result === 'lose') return - 1
    if (result === 'draw') return 0
    if (result === null) return 0
    if (result === undefined) return 0
  }
 

export { 
  rng, 
  opponentRNG, 
  resultLogic, 
  scoreLogic 
}