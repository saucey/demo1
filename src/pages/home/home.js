import React from 'react'
import Layout from '../../layouts/navbar'
import Authorization from '../../components/higher-order-components/authorization'

const Home = () => {
//   const wrapper = props => {
  return (
    <div>
      <Layout/>
    </div>
  )
  //   }
//   return wrapper
}

// export default Home
// export default Home
// const Authenticaion = () => {
//     if(notLoggin) ? <Redirect to=""/> : "<>"
// }

export const WithAuthorization = Authorization(Home)
