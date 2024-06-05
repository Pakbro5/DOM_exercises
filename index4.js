//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click
const btnToClick = document.getElementById('btnToClick')

btnToClick.addEventListener('click', function (event) {
  console.log(btnToClick)
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('input')
const log = document.getElementsByClassName('focus')
const value = document.getElementById('searchInput').value

input.addEventListener('focus', function (event) {
  console.log('input event value;', this.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
document.querySelector('.value').addEventListener('input', function () {
  console.log('Input event value:', this.value)
})
