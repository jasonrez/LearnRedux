import { createStore } from 'redux'

console.log('starting todo redus example')

let stateDefault = { searchText: '', completed: false, todos: [] }

let reducer = (state  = stateDefault , action) => {
  return state
}

let store = createStore(reducer)


console.log('currentState', store.getState())
