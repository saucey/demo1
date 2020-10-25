import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import './index.css'
import App from './App'
import config from './config'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import Reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer)

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
})

Amplify.configure({
  aws_appsync_graphqlEndpoint: config.graphql.URL,
  aws_appsync_region: config.graphql.REGION,
  aws_appsync_authenticationType: config.graphql.AUTHENTICATION_TYPE
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
