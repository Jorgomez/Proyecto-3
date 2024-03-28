import { searchInput } from '../../../main'
import { gallery } from '../Gallery/gallery'
import './boton.css'
let paginas = 10

export const showMeMore = (boxGallery, boxButton) => {
  boxButton.textContent = 'Show me more'
  boxButton.id = 'show-More'
  boxButton.addEventListener('click', (e) => {
    if (paginas >= 30) {
      return (paginas = 10)
    }
    ;(paginas += 10),
      gallery(boxGallery, {
        palabra: searchInput.value || 'surf',
        pages: paginas
      })
  })
}
