import { actionRow } from "aws-amplify"

const initState = {
  userLoggedIn: null,
  listSectors: [],
  epic: null,
  modalOpen: null,
  modalMsg: null
}

const Reducer = (state = initState, action) => {

  console.log(state, 'happening2')
  console.log(action, 'happening2')

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
    
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: action.modalOpen
      }
    
    case 'MODAL_MSG':
      return {
        ...state,
        modalMsg: action.modalMsg
      }
      // you can have as many case statements as you need

    default:
      return state
  }
}

export default Reducer
