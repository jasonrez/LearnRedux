
// let redux = require('redux')
import { createStore, compose, combineReducers} from 'redux'


console.log('starting redux example')





// name reducer and action generators
let nameReducer = (state = 'Anon', action) => {
  switch(action.type) {
    case 'CHANGE_NAME' :
      return action.name
    default:
      return state
  }
}
let changeName = (name) => ({ type: 'CHANGE_NAME', name})

// hobbies reducers and action generators
let nextHobbyId = 1
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
let addHobby = (hobby) => ({ type: 'ADD_HOBBY', hobby })
let removeHobby = (id) => ({ type: 'REMOVE_HOBBY', id })

// movies reducers and action generators
let nextMovieId = 1
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

let addMovie = (title, genre) => ({ type: 'ADD_MOVIE', title, genre })
let removeMovie = (id) => ({ type: 'REMOVE_MOVIE', id })

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





store.dispatch(addHobby('Biking'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Swimming'));
store.dispatch(changeName('Jason Rez'));
store.dispatch(removeHobby(2));
store.dispatch(changeName('NeonSkull'));
store.dispatch(addMovie('Aliens', 'Sci-Fi'));
store.dispatch(addMovie('Superbad', 'Comedy'));
store.dispatch(removeMovie(2));
