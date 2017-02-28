
// let redux = require('redux')
import { createStore, compose, combineReducers} from 'redux'


console.log('starting redux example')

let nextHobbyId = 1
let nextMovieId = 1



let nameReducer = (state = 'Anon', action) => {
  switch(action.type) {
    case 'CHANGE_NAME' :
      return action.name
    default:
      return state
  }
}

let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY' :
      return [
        ...state,
        {
          id : nextHobbyId++,
          hobby : action.hobby
        }
      ]
      case 'REMOVE_HOBBY' :
        return state.filter( hobby => hobby.id !== action.id)
    default:
      return state
    }
}

let moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE' :
      return [
        ...state,
        {
          id : nextMovieId++,
          title : action.title,
          genre : action.genre
        }
      ]
    case 'REMOVE_MOVIE' :
      return state.filter( movie =>  movie.id !== action.id )
    default:
      return state
  }
}

let reducer = combineReducers({
  name : nameReducer,
  hobbies : hobbiesReducer,
  movies : moviesReducer
})

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
  type: 'ADD_HOBBY',
  hobby: 'Running'
})

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Swimming'
})
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jason Rez'
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
