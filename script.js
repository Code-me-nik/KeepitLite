// notes input field
let title = document.querySelector('.title')
let note = document.querySelector('.note')

// elements we creating for notes 
let div = document.createElement('div')
let heading = document.createElement('h5')
let p = document.createElement('p')


document.querySelector('.add').addEventListener('click', () => {
  
// accessing notes value from title and note
// giving the access to the heading and p elements
  heading.innerText = title.value
  p.innerText = note.value

  div.setAttribute('class', 'notediv')
  div.appendChild(heading)
  div.appendChild(p)

// all the created notes div printing on notes playground
  let noteplayground = document.querySelector('#notesground')
  noteplayground.appendChild(div)

});