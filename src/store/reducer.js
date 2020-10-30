const initState = {
  userLoggedIn: null,
  listSectors: null,
  epic: null
}

const Reducer = (state = initState, action) => {
  console.log(action, 'the actions here!!!')
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
    
    case 'LIST_SECTORS':
      return {
        ...state,
        listSectors: action.listSectors
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
