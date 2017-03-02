
// let redux = require('redux')
import { createStore, compose, combineReducers} from 'redux'



console.log('starting redux example')
let actions = require('./actions/index')
import { configure } from './store/configureStore'
let store = configure()
//let store = require('./store/configureStore').configure()


// subscribe to CHANGE_SEARCHTEXT
let unsubscribe = store.subscribe(() => {
  let state = store.getState()

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name

  console.log('New state', store.getState())

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
})
console.log(actions)
store.dispatch(actions.fetchLocation())

store.dispatch(actions.addHobby('Biking'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Swimming'));
store.dispatch(actions.changeName('Jason Rez'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('NeonSkull'));
store.dispatch(actions.addMovie('Aliens', 'Sci-Fi'));
store.dispatch(actions.addMovie('Superbad', 'Comedy'));
store.dispatch(actions.removeMovie(2));
