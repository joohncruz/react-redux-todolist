import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

// import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'
import App from './App'

console.log( 'Reducers: ', rootReducer )

const store = createStore(rootReducer);
  
render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById( 'root' )
)

// registerServiceWorker()


