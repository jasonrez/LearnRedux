import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer} from './../reducers/index'
//let thunk = require('redux-thunk').default
import thunk from 'redux-thunk'

export let configure = () => {

let reducer = combineReducers({
  name : nameReducer,
  hobbies : hobbiesReducer,
  movies : moviesReducer,
  map : mapReducer
})

let store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

return store;
}
