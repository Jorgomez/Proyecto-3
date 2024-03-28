import { gallery } from '../Gallery/gallery'

export const filterWord = (boxGallery, wordKey) => {
  boxGallery.innerHTML = ''

  gallery(boxGallery, { palabra: wordKey.value })
}
