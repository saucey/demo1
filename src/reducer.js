const initState = {
    userLoggedIn: null
  }
  
  const Reducer = (state=initState,action) => {
      switch (action.type) {

        case "LOGIN":
            return {
              ...state,
              userLoggedIn: action.userLoggedIn 
            }
          
        // you can have as many case statements as you need
          
        default: 
          return state
      }
  }
  
  export default Reducer