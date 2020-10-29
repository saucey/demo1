const initState = {
  userLoggedIn: null,
  listSectors: null
}

const Reducer = (state = initState, action) => {
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

      // you can have as many case statements as you need

    default:
      return state
  }
}

export default Reducer
