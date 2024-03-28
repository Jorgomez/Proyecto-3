import './Footer.css'

export const printFooter = () => {
  const footerBox = document.querySelector('footer')

  footerBox.innerHTML = ' <h4>Copyright 2024 - Surfterest - Jorge Gomez</h4>'

  document.body.append(footerBox)
}
