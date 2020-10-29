import React from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux';

const Authorization = WrappedComponent => {
  const NewComponent = props => {

    const userLoggedIn = useSelector((state) => state.userLoggedIn);
    const isAllowed = userLoggedIn && userLoggedIn.loggedIn;

    return (
      <div>
        { isAllowed === true ? <WrappedComponent {...props}/> : <Redirect to="/" /> }
      </div>
    )
  }
  return NewComponent
}

export default Authorization
