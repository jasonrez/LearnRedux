// import redux from 'redux'
// let redux = require('redux')
import { createStore } from 'redux'


console.log('starting redux example')

let reducer = (state = {name: 'Jason'}, action) => {


  return state
}

let store = createStore(reducer)

let currentState = store.getState()

console.log(currentState)
