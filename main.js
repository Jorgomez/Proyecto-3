import { header } from './Src/Components/heaader/header'
import { gallery } from './Src/Components/Gallery/gallery'
import './style.css'
// import { printFooter } from './Src/Components/Footer/Footer'

export const gallerySection = document.querySelector('main')
export const searchInput = document.createElement('input')

gallerySection.className = 'mainSection'
header(gallerySection, searchInput)
gallery(gallerySection, { palabra: 'surf' })

// printFooter()
