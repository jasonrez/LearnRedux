import axios from 'axios'

export let changeName = (name) => ({ type: 'CHANGE_NAME', name})

export let addHobby = (hobby) => ({ type: 'ADD_HOBBY', hobby })
export let removeHobby = (id) => ({ type: 'REMOVE_HOBBY', id })

export let addMovie = (title, genre) => ({ type: 'ADD_MOVIE', title, genre })
export let removeMovie = (id) => ({ type: 'REMOVE_MOVIE', id })

export let startLocationFetch = () => ({ type: 'START_LOCATION_FETCH' })
export let completeLocationFetch = (url) => ({ type : 'COMPLETE_LOCATION_FETCH', url })

// export let fetchLocation = () => {
//   store.dispatch(startLocationFetch())
//
//   axios.get('http://ipinfo.io').then((res)=> {
//     let loc = res.data.loc
//     let baseUrl = 'http://map.google.com?q='
//
//     store.dispatch(completeLocationFetch(baseUrl + loc))
//   })
// }
 export let fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch())

    axios.get('http://ipinfo.io').then((res)=> {
      let loc = res.data.loc
      let baseUrl = 'http://map.google.com?q='
      dispatch(completeLocationFetch(baseUrl + loc))
    })
  }
}
