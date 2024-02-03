const reducer = (state, action) => {
  switch (action.type) {
    case 'selection':
      return {
        ...state,
        selection: action.payload
      }
    case 'selected':
      return {
        ...state,
        selected: action.payload
      }
    case 'choice':
      return {
        ...state,
        choice: action.payload
      }
    case 'cpu':
      return {
        ...state,
        cpu: action.payload
      }
    case 'result':
      return {
        ...state,
        result: action.payload
      }
    case 'score':
      return {
        ...state,
        score: action.payload
      }
    case 'showRules':
      return {
        ...state,
        showRules: action.payload
      }
    case 'playAgain':
      return {
        ...state,
        playAgain: action.payload
      }
    default:
      return state 
  }
}

export default reducer