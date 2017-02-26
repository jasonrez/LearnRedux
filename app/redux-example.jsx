
// let redux = require('redux')
import { createStore } from 'redux'


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

let store = createStore(reducer)


let action = {
  type: 'CHANGE_NAME',
  name: 'Jason Rez'
}
store.dispatch(action)
console.log('currentState',store.getState())
