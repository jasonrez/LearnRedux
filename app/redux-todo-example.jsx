import { createStore } from 'redux'

console.log('starting todo redus example')

let stateDefault = { searchText: '', completed: false, todos: [] }

let reducer = (state  = stateDefault , action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}

let store = createStore(reducer)



console.log('currentState', store.getState())
store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'boobs'
})
console.log('currentState', store.getState())
