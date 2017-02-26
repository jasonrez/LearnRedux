
// let redux = require('redux')
import { createStore, compose } from 'redux'


console.log('starting redux example')

let stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}

let nextHobbyId = 1
let nextMovieId = 1

let reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'ADD_HOBBY' :
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            bobby: action.hobby
          }
        ]
      }
    case 'REMOVE_HOBBY' :
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      }
    case 'ADD_MOVIE' :
      return {
        ...state,
        movies:[
          ...state.movies,
          {
            id : nextMovieId++,
            title : action.title,
            genre : action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE' :
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      }
      default:
        return state
  }
}

let store = createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

)

// subscribe to CHANGE_SEARCHTEXT
let unsubscribe = store.subscribe(() => {
  let state = store.getState()

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name

  console.log('New state', store.getState())
})
// unsubscribe();


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jason Rez'
})

store.dispatch({
  type: 'ADD_HOBBY',
  bobby: 'Running'
})

store.dispatch({
  type: 'ADD_HOBBY',
  bobby: 'Swimming'
})

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'NeonSkull'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Aliens',
  genre: 'sci-fi'
})

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Superbad',
  genre: 'comedy'
})

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
