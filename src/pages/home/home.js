import React from 'react'
import Authorization from '../../components/higher-order-components/authorization'
import Records from './records'

const Home = () => {
  const user = {
    name: 'Leo',
    age: 33,
    sex: 'Male'
  }

  return (
    <div>
      <Records data={user} time="1" />
    </div>
  )
}

export const WithAuthorization = Authorization(Home)
