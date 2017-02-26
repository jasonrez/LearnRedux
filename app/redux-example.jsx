
// let redux = require('redux')
import { createStore, compose } from 'redux'


console.log('starting redux example')

let reducer = (state = {name: 'Anon'}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
      default:
        return state
  }
}

let store = createStore(reducer,
  // compose(window.devToolsExtension ? window.devToolsExtension() : f => f
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// subscribe to CHANGE_SEARCHTEXT
let unsubscribe = store.subscribe(() => {
  let state = store.getState()

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name
})
// unsubscribe();


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jason Rez'
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'NeonSkull'
})
