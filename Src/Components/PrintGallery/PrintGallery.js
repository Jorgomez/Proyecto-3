export const printGallery = (array, boxImages) => {
  array.forEach((photo) => {
    console.log()
    const boxImg = document.createElement('figure')
    boxImg.className = 'boxImg'

    if (photo.height > photo.width) {
      boxImg.classList.add('Vertical')
    } else {
      boxImg.classList.add('Horizon')
    }

    boxImg.innerHTML = `

    <img  src=${photo.urls.small}>

    <div class='caption'><figcaption>${
      photo.user.location ? photo.user.location : 'Paradise'
    }</figcaption>
    <figcaption>PH BLOG :<a href=${photo.user.portfolio_url}>     ${
      photo.user.portfolio_url
        ? photo.user.portfolio_url
        : 'search for: ' + photo.user.name
    } </a> </figcaption> </div>`

    boxImages.append(boxImg)
  })
}
