import redux from 'redux'

console.log('starting redux example')

function add (a,b) {
  return  a + b
}

let person = {
  name: 'steve',
  age: 7
}

function update (person) {
  return {
    ...person,
    name: 'Phil'
  }
}

console.log(update(person));
