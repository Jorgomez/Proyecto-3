import { searchInput } from '../../../main'
import { showMeMore } from '../Botton-ShowMore/boton'
import { printFooter } from '../Footer/Footer'
import { printGallery } from '../PrintGallery/PrintGallery'

import './gallery.css'

export const gallery = (
  boxGallery,
  {
    palabra = searchInput.value,
    pages = 9,
    API_KEY = 'BAzIxj7ys5oiLjAbp7jBD8MyuzxPy_Xnit58V_4w6bo'
  }
) => {
  boxGallery.innerHTML = ''

  fetch(
    `https://api.unsplash.com/search/photos?query=${palabra}&client_id=${API_KEY}&per_page=${pages}`
  )
    .then((res) => res.json())
    .then((pictures) => {
      const arrayPictures = pictures.results

      // const PrintBoxError =()=>
      if (pictures.total > 0) {
        boxGallery.classList.remove('boxError')

        printGallery(arrayPictures, boxGallery)
        if (arrayPictures.length < 30) {
          const showMore = document.createElement('button')
          showMeMore(boxGallery, showMore)
          boxGallery.append(showMore)
        }
      } else {
        boxGallery.classList.add('boxError')
        setTimeout(function () {
          alert('favor intruducir busqueda valida')
        }, 100)
      }
    })
    .catch((error) => {
      console.error('Hubo un problema con la solicitud fetch:', error)
    })

  document.body.appendChild(boxGallery)
  printFooter()
}
