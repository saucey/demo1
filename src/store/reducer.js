const initState = {
  userLoggedIn: null,
  listSectors: [],
  epic: null
}

const Reducer = (state = initState, action) => {

  console.log(action, 'action called')
  
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userLoggedIn: {...action.userLoggedIn, loggedIn: true}
      }

    case 'LOGOUT':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn
      }
    
    case 'INSERT_SECTORS':
      return {
        ...state,
        listSectors: [...action.listSectors]
      }
    
    case 'INSERT_SECTOR':
      return {
        ...state,
        listSectors: [...state.listSectors, action.listSectors]
      }
    
    case 'EPIC':
      return {
        ...state,
        epic: true
      }

      // you can have as many case statements as you need

    default:
      return state
  }
}

export default Reducer
