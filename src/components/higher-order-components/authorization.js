import React from 'react'
import { Redirect } from 'react-router'

const Authorization = WrappedComponent => {
  const NewComponent = props => {
    const isAllowed = true
    return (
      <div>
        { isAllowed === true ? <WrappedComponent {...props}/> : <Redirect to="/" /> }
      </div>
    )
  }
  return NewComponent
}

export default Authorization
