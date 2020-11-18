import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Authorization from '../../components/higher-order-components/authorization'
import { useSelector } from 'react-redux'
import Records from './records'
import Sectors from './sectors'
import ModalMessaging from '../../components/modalMessaging'


const Home = () => {

  const location = useLocation();
  // const wtf = useSelector((state) => state);

  
  
  const PageRoute = () => {

    switch(location.pathname) {
        case '/home':
          return (<Sectors />)
      // code block
        case '/sectors':
          return (<Sectors />)
      // code block
      default:
        return false;
      // code block
    }
  }

  //   useEffect(() => {
  //   if (userLoggedIn !== null) {
  //     history.push('/home')
  //   }
  // }, [])

  

  PageRoute()

  const user = {
    name: 'Leo',
    age: 33,
    sex: 'Male'
  }

  return (
    <div style={{ position: 'relative' }}>
      <ModalMessaging />
      <PageRoute />
    </div>
  )
}

export const WithAuthorization = Authorization(Home)
