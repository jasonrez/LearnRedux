import { createStore, compose } from 'redux'

console.log('starting todo redus example')

let stateDefault = { searchText: '', completed: false, todos: [] }

let reducer = (state  = stateDefault , action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}

let store = createStore(reducer,  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

let unsubscribe = store.subscribe(() => {
  let state = store.getState()
  console.log(state.searchText)
  document.getElementById('app').innerHTML = state.searchText
})


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'boobs'
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Games'
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Tax'
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Holiday'
})
