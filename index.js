// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const pillame = document.getElementsByClassName('.showme')
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Element = document.querySelector('#pillado')

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p')

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon')

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]')

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2]

console.group()
