import { filterWord } from '../FilterWord/filter'
import { gallery } from '../Gallery/gallery'
import './header.css'

export const header = (boxGallery, boxInput) => {
  const header = document.querySelector('header')
  // header.className = 'flex-container'
  const nav1 = document.createElement('nav')
  nav1.className = 'flex-container'
  nav1.id = 'firstNav'
  nav1.innerHTML = `


  
<ul class="flex-container main-nav">
  <li><a href="#logo">
  <img
  id="logo"
  src="https://res.cloudinary.com/digcf0lad/image/upload/v1701263161/imagenes%20pinterest%20practica/logo-pinterest_qeqjmn.png"
  alt="logotipo brand"
  /></a></li>
  
  <li><a href="#">Hoy</a></li>
  <li><a href="#info">Crear</a></li>
</ul>
`

  const reinicio = document.createElement('button')
  reinicio.textContent = 'Inicio'
  reinicio.id = 'button-Start'
  nav1.append(reinicio)

  const divForm = document.createElement('div')
  divForm.className = 'divForm'

  boxInput.type = 'text'
  boxInput.id = 'search-input'
  boxInput.placeholder = '🔍  Search your preferences'

  boxInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      filterWord(boxGallery, e.target)
    }
  })

  reinicio.addEventListener(
    'click',

    () => (gallery(boxGallery, { palabra: 'surf' }), (boxInput.value = ''))
  )

  const buttonSearch = document.createElement('button')
  buttonSearch.className = 'buttonSearch'
  buttonSearch.textContent = 'Enter'

  buttonSearch.addEventListener('click', () => {
    filterWord(boxGallery, boxInput)
  })

  const nav2 = document.createElement('nav')
  nav2.className = 'flex-container'
  nav2.id = 'secondNav'
  nav2.innerHTML = `<ul class="flex-container">
  <li><a>
  <img
  id="notifications"
  src="https://res.cloudinary.com/digcf0lad/image/upload/v1711571024/notification_cbwxc9.png"
  alt="notifications img"
  /></a></li>
  <li><a><img
  id="comments"
  src="https://res.cloudinary.com/digcf0lad/image/upload/v1711571024/coment_zdj097.png"
  alt="icono comments"
  /></a></li>

  <li><a>
  <img
  id="user"
  src="https://res.cloudinary.com/digcf0lad/image/upload/v1711571023/man_azkjut.png"
  alt="user img"
  /></a></li>
</ul>
`
  divForm.append(boxInput, buttonSearch)
  header.append(nav1, divForm, nav2)
  document.body.append(header)
}
