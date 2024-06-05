const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const div = document.querySelector("[data-function='printHere']")
const ul = document.createElement('ul')

for (let i = 0; i < places.length; i++) {
  const li = document.createElement('li')
  li.innerText = places
  ul.appendChild(li)
}

document.body.appendChild(ul)
